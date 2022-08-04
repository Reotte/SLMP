﻿using System.Net.Sockets;

namespace SLMP
{
    /// <summary>
    /// This class exposes functionality to connect and manage
    /// SLMP-compatible devices.
    /// </summary>
    public class Client
    {
        /// <summary>
        /// This `HEADER` array contains the shared (header) data between
        /// commands that are supported in this library.
        /// </summary>
        private readonly byte[] HEADER = {
            0x50, 0x00,     // subheader: no serial no.
            0x00,           // request destination network no.
            0xff,           // request deestination station no.
            0xff, 0x03,     // request destination module I/O no.: 0x03ff (own station)
            0x00,           // request destination multidrop station no.
        };

        private Config config;
        private TcpClient client;
        private NetworkStream? stream;

        /// <summary>Initializes a new instance of the <see cref="Client" /> class.</summary>
        /// <param name="cfg">The config.</param>
        public Client(Config cfg)
        {
            config = cfg;
            client = new TcpClient();
        }

        /// <summary>Connects to the specified address.</summary>
        /// <param name="addr">The addr.</param>
        /// <exception cref="System.TimeoutException">connection timed out</exception>
        public void Connect(string addr)
        {
            switch (config.connTimeout)
            {
                case null:
                    client.Connect(addr, config.port);
                    break;
                default:
                    if (!client.ConnectAsync(addr, config.port).Wait((int)config.connTimeout))
                        throw new TimeoutException("connection timed out");
                    break;
            }

            // connection is successful
            if (config.sendTimeout != null) client.SendTimeout = (int)config.sendTimeout;
            if (config.recvTimeout != null) client.ReceiveTimeout = (int)config.recvTimeout;

            stream = client.GetStream();
        }

        /// <summary>
        /// Reads from a given `BitDevice` and returns a list of `bool`s.
        /// Note that there's a limit on how many registers can be read at a time.
        /// </summary>
        /// <param name="device">The bit device.</param>
        /// <param name="addr">Start address.</param>
        /// <param name="count">Number of registers to read.</param>
        public List<bool> ReadDevice(BitDevice device, ushort addr, ushort count)
        {
            SendReadDeviceCommand(device, addr, count);
            List<byte> response = ReceiveResponse();
            List<bool> result = new();

            response.ForEach(delegate(byte a) {
                result.Add((a & 0x10) != 0);
                result.Add((a & 0x01) != 0);
            });

            return result.GetRange(0, count);
        }

        /// <summary>
        /// Reads from a given `WordDevice` and returns a list of `ushort`s.
        /// Note that there's a limit on how many registers can be read at a time.
        /// </summary>
        /// <param name="device">The word device.</param>
        /// <param name="addr">Start address.</param>
        /// <param name="count">Number of registers to read.</param>
        public List<ushort> ReadDevice(WordDevice device, ushort addr, ushort count)
        {
            SendReadDeviceCommand(device, addr, count);
            List<byte> response = ReceiveResponse();
            List<ushort> result = new();

            // if the length of the response isn't even
            // then the response is invalid and we can't
            // construct an array of `ushort`s from it
            if (response.Count() % 2 != 0)
                throw new InvalidDataException("While reading words: data section of the response is uneven");

            // word data is received in little endian format
            // which means the lower byte of a word comes first
            // and upper byte second
            response
                .Chunk(2)
                .ToList()
                .ForEach(n => result.Add((ushort)(n[1] << 8 | n[0])));

            return result;
        }

        /// <summary>
        /// Writes an array of `bool`s to a given `BitDevice`.
        /// Note that there's a limit on how many registers can be written at a time.
        /// </summary>
        /// <param name="device">The BitDevice to write.</param>
        /// <param name="addr">Starting address.</param>
        /// <param name="data">Data to be written into the remote device.</param>
        public void WriteDevice(BitDevice device, ushort addr, bool[] data)
        {
            ushort count = (ushort)data.Length;
            List<bool> listData = data.ToList();
            List<byte> encodedData = new();

            // If the length of `data` isn't even, add a dummy
            // `false` to make the encoding easier. It gets ignored on the station side.
            if (count % 2 != 0)
                listData.Add(false);

            listData
                .Chunk(2)
                .ToList()
                .ForEach(a => encodedData.Add(
                    (byte)(Convert.ToByte(a[0]) << 4 | Convert.ToByte(a[1]))));

            SendWriteDeviceCommand(device, addr, count, encodedData.ToArray());
            ReceiveResponse();
        }

        /// <summary>
        /// Writes an array of `ushort`s to a given `WordDevice`.
        /// Note that there's a limit on how many registers can be written at a time.
        /// </summary>
        /// <param name="device">The WordDevice to write.</param>
        /// <param name="addr">Starting address.</param>
        /// <param name="data">Data to be written into the remote device.</param>
        public void WriteDevice(WordDevice device, ushort addr, ushort[] data)
        {
            ushort count = (ushort)data.Length;
            List<byte> encodedData = new();

            foreach (ushort word in data)
            {
                encodedData.Add((byte)(word & 0xff));
                encodedData.Add((byte)(word >> 0x8));
            }

            SendWriteDeviceCommand(device, addr, count, encodedData.ToArray());
            ReceiveResponse();
        }

        /// <summary>
        /// Writes the given string to the specified device as a null terminated string.
        /// Note that there's a limit on how many registers can be written at a time.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="addr">Starting address.</param>
        /// <param name="text">The string to write.</param>
        public void WriteString(WordDevice device, ushort addr, string text)
        {
            // add a 16 bit `null` terminator
            text += "\0\0";
            // if the length of the string isn't
            // even, add a dummy null (0x00) character
            if (text.Length % 2 == 1)
                text += '\0';

            List<ushort> result = new();

            System.Text.Encoding.ASCII.GetBytes(text.ToCharArray())
                .Chunk(2)
                .ToList()
                .ForEach(a => result.Add((ushort)(a[1] << 8 | a[0])));

            WriteDevice(device, addr, result.ToArray());
        }

        /// <summary>
        /// Reads a null terminated string from the specified `WordDevice`. Note that
        /// this function reads the string at best two chars, ~500 times in a second.
        /// Meaning it can only read ~1000 chars per second.
        /// Note that there's a limit on how many registers can be read at a time.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="addr">Starting address of the null terminated string.</param>
        public string ReadString(WordDevice device, ushort addr)
        {
            ushort nullTerminator = (byte)'\0' << 8 | (byte)'\0';
            List<ushort> stringBuffer = new();
            List<char> charBuffer = new();

            do {
                stringBuffer.AddRange(ReadDevice(device, addr, 1));
                addr += 1;
            } while (stringBuffer.IndexOf(nullTerminator) == -1);

            stringBuffer.RemoveAt(stringBuffer.Count - 1);
            stringBuffer
                .ForEach(a => {
                    charBuffer.Add((char)(a & 0xff));
                    charBuffer.Add((char)(a >> 0x8));
                });

            return string.Join("", charBuffer);
        }

        /// <summary>
        /// Gets the subcommand for a given `(Bit/Word)Device`.
        /// </summary>
        /// <exception cref="System.ArgumentException">invalid device type provided</exception>
        private static ushort GetSubcommand(dynamic type)
        {
            switch (type)
            {
                case  BitDevice d: return 0x0001;
                case WordDevice d: return 0x0000;
                default:
                    throw new ArgumentException("invalid device type provided");
            }
        }

        /// <summary>This function exists because `NetworkStream` doesn't have a `recv_exact` method.</summary>
        /// <param name="count">Number of bytes to receive.</param>
        private byte[] ReceiveBytes(int count)
        {
            CheckConnection();

            int offset = 0, toRead = count;
            int read;
            byte[] buffer = new byte[count];

            while (toRead > 0 && (read = stream.Read(buffer, offset, toRead)) > 0)
            {
                toRead -= read;
                offset += read;
            }
            if (toRead > 0) throw new EndOfStreamException();

            return buffer;
        }

        /// <summary>Receives the response and returns the raw response data.</summary>
        /// <returns>Raw response data</returns>
        private List<byte> ReceiveResponse()
        {
            CheckConnection();

            // read a single byte to determine
            // if a serial no. is included or not
            int value = stream.ReadByte();
            byte[] hdrBuf;
            switch (value)
            {
                // if value is 0xd0, there's no serial no. included
                // in the response
                case 0xd0:
                    hdrBuf = ReceiveBytes(8);
                    break;
                // if value is 0xd4, there's a serial no. included
                // in the response
                case 0xd4:
                    hdrBuf = ReceiveBytes(12);
                    break;
                // in the case where we receive some other data, we mark it
                // as invalid and throw an `Exception`
                default:
                    throw new InvalidDataException($"while reading respoonse header: invalid start byte received: {value}");
            }

            // calculate the response data length
            int dataSize = hdrBuf[^1] << 8 | hdrBuf[^2];
            List<byte> responseBuffer = ReceiveBytes(dataSize).ToList();

            // if the encode isn't `0` then we know that we hit an error.
            int endCode = responseBuffer[1] << 8 | responseBuffer[0];
            if (endCode != 0)
                throw new SLMPException(endCode);

            responseBuffer.RemoveRange(0, 2);
            return responseBuffer;
        }

        /// <summary>Sends the read device command.</summary>
        /// <param name="device">The target device.</param>
        /// <param name="adr">The address</param>
        /// <param name="cnt">The count.</param>
        private void SendReadDeviceCommand(dynamic device, ushort adr, ushort cnt)
        {
            CheckConnection();

            List<byte> rawRequest = HEADER.ToList();

            ushort cmd = (ushort)Command.DeviceRead;
            ushort sub = GetSubcommand(device);

            rawRequest.AddRange(new byte[]{
                // request data length (in terms of bytes): fixed size (12) for the read command
                0x0c, 0x00,
                // monitoring timer. TODO: make this something configurable instead of hard-coding it.
                0x00, 0x00,
                (byte)(cmd & 0xff), (byte)(cmd >> 0x8),
                (byte)(sub & 0xff), (byte)(sub >> 0x8),
                (byte)(adr & 0xff), (byte)(adr >> 0x8),
                (byte)(0x00),
                (byte)device,
                (byte)(cnt & 0xff), (byte)(cnt >> 0x8),
            });


            stream.Write(rawRequest.ToArray());
        }

        /// <summary>
        /// Sends the write device command.
        /// </summary>
        /// <param name="device">The target device</param>
        /// <param name="adr">The address.</param>
        /// <param name="cnt">Number of data points.</param>
        /// <param name="data">Data itself.</param>
        private void SendWriteDeviceCommand(dynamic device, ushort adr, ushort cnt, byte[] data)
        {
            CheckConnection();

            List<byte> rawRequest = HEADER.ToList();

            ushort cmd = (ushort)Command.DeviceWrite;
            ushort sub = GetSubcommand(device);
            ushort len = (ushort)(data.Length + 0x000c);

            rawRequest.AddRange(new byte[]{
                // request data length (in terms of bytes): (12 + data.Length)
                (byte)(len & 0xff), (byte)(len >> 0x8),
                // monitoring timer. TODO: make this something configurable instead of hard-coding it.
                0x00, 0x00,
                (byte)(cmd & 0xff), (byte)(cmd >> 0x8),
                (byte)(sub & 0xff), (byte)(sub >> 0x8),
                (byte)(adr & 0xff), (byte)(adr >> 0x8),
                (byte)(0x00),
                (byte)device,
                (byte)(cnt & 0xff), (byte)(cnt >> 0x8),
            });
            rawRequest.AddRange(data);

            stream.Write(rawRequest.ToArray());
        }

        private void CheckConnection()
        {
            if (stream == null || client.Connected == false)
                throw new NotConnectedException();
        }
    }
}
