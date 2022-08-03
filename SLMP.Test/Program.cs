﻿using Spectre.Console;

namespace SLMP.Test {
    class Program
    {
        private Config config;
        private Client client;
        private string ADDRESS = "192.168.3.201";

        Device[] BitDevices  = { Device.X, Device.Y, Device.B, Device.M, Device.SM };
        Device[] WordDevices = { Device.D, Device.W, Device.Z, Device.R, Device.SD, Device.ZR };
        Program()
        {
            config = new Config()
                .Port(6000)
                .ConnTimeout(500)
                .RecvTimeout(1000)
                .SendTimeout(1000);
            client = new Client(config);
        }

        public static void Main(string[] args)
        {
            Log(LogType.INFO, "Test programi baslatiliyor");
            Program program = new Program();
            program.Connect(); Console.WriteLine("-----");
            program.ReadBitDevices(); Console.WriteLine("-----");
        }

        private void ExitTest()
        {
            Log(LogType.INFO, "Test programi bitiriliyor");
            System.Environment.Exit(0);
        }

        /// baglanti testi
        private void Connect()
        {
            Log(LogType.INFO, "PLC'e baglanti testi baslatiliyor");
            Log(LogType.DEBUG, $"Baglanilan adres: {ADDRESS}");
            try
            {
                client.Connect(ADDRESS);
            }
            catch (Exception ex)
            {
                Log(LogType.ERROR, $"Baglanti saglanamadi: {ex.Message}");
                ExitTest();
            }
        }

        private void ReadBitDevices()
        {
            Log(LogType.INFO, "Bit cihazlarindan okuma testi baslatiliyor");
            foreach (Device device in BitDevices)
            {
                try
                {
                    Log(LogType.DEBUG, $"Read({device.ToString()}, addr=0, count=32)");
                    client.ReadBitDevice(device, 0, 32);
                }
                catch (Exception ex)
                {
                    Log(LogType.ERROR, $"{device.ToString()} cihazindan okuma yapilamadi: ${ex.Message}");
                    continue;
                }
            }
        }

        private static void Log(LogType type, string message)
        {
            string mrkpStr = "none";
            switch (type)
            {
                case LogType.DEBUG: mrkpStr = "blue"; break;
                case  LogType.INFO: mrkpStr = "green"; break;
                case  LogType.WARN: mrkpStr = "yellow"; break;
                case LogType.ERROR: mrkpStr = "red"; break;
            }
            string typeStr = type.ToString();
            string dateStr = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
            AnsiConsole.Markup($"[[[{mrkpStr}]{typeStr,5}[/]]] [[{dateStr}]] {message}");
            Console.WriteLine($"");
        }
    }

    enum LogType
    {
        DEBUG,
        INFO,
        WARN,
        ERROR,
    }
}
