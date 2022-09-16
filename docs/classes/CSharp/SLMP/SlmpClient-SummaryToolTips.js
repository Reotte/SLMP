﻿NDSummary.OnToolTipsLoaded("CSharpClass:SLMP.SlmpClient",{32:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype32\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">SLMP.</span>&#8203;SlmpClient</div></div></div><div class=\"TTSummary\">This class exposes functionality to connect and manage SLMP-compatible devices.</div></div>",35:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype35\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private readonly byte</span>[] HEADER</div></div><div class=\"TTSummary\">This `HEADER` array contains the shared (header) data between commands that are supported in this library.</div></div>",36:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype36\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> SlmpConfig _config</div></div></div>",37:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype37\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> TcpClient _client</div></div></div>",38:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype38\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> NetworkStream? _stream</div></div></div>",40:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype40\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> SlmpClient(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SlmpConfig&nbsp;</td><td class=\"PName last\">cfg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Initializes a new instance of the SlmpClient class.</div></div>",82:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype82\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Connect()</div></div><div class=\"TTSummary\">Connects to the address specified in the config.</div></div>",42:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype42\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public void</span> Disconnect()</div></div><div class=\"TTSummary\">Attempt to close the socket connection.</div></div>",52:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype52\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> Connected()</div></div><div class=\"TTSummary\">Query the connection status.</div></div>",10:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype10\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">public bool</span> SelfTest()</div></div><div class=\"TTSummary\">Issue a `SelfTest` command.</div></div>",56:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype56\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private byte</span>[] ReceiveBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This function exists because `NetworkStream` doesn\'t have a `recv_exact` method.</div></div>",57:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype57\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> List&lt;<span class=\"SHKeyword\">byte</span>&gt; ReceiveResponse()</div></div><div class=\"TTSummary\">Receives the response and returns the raw response data.</div></div>",58:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype58\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> SendReadDeviceCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">dynamic</span>&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">adr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">cnt</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sends the read device command.</div></div>",59:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype59\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> SendWriteDeviceCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">dynamic</span>&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">adr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">cnt,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">byte</span>[]&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sends the write device command.</div></div>",60:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype60\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> SendSelfTestCommand()</div></div><div class=\"TTSummary\">Sends the `SelfTest` command.</div></div>",11:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> ReadBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a single Bit from a given `BitDevice` and returns a `bool`.</div></div>",27:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span>[] ReadBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads from a given `BitDevice` and returns an array of `bool`s.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",74:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype74\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span> ReadBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a single Bit from a given `BitDevice` and returns a `bool`.</div></div>",75:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype75\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public bool</span>[] ReadBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads from a given `BitDevice` and returns an array of `bool`s.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",30:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public ushort</span> ReadWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a single Word from a the given `WordDevice` and returns an `ushort`.</div></div>",43:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype43\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public ushort</span>[] ReadWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads from a given `WordDevice` and returns an array of `ushort`s.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",78:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype78\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public ushort</span> ReadWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a single Word from a the given `WordDevice` and returns an `ushort`.</div></div>",79:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype79\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public ushort</span>[] ReadWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads from a given `WordDevice` and returns an array of `ushort`s.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",53:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> ReadString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a string with the length `len` from the specified `WordDevice`. Note that this function reads the string at best two chars, ~500 times in a second.&nbsp; Meaning it can only read ~1000 chars per second.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",81:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype81\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public string</span> ReadString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads a string with the length `len` from the specified `WordDevice`. Note that this function reads the string at best two chars, ~500 times in a second.&nbsp; Meaning it can only read ~1000 chars per second.&nbsp; Note that there\'s a limit on how many registers can be read at a time.</div></div>",63:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype63\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> T? ReadStruct&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div><div class=\"TTSummary\">Read from a `WordDevice` to create a C# structure.&nbsp; The target structure can only contain very primitive data types.</div></div>",64:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype64\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> T? ReadStruct&lt;T&gt;(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">where</span> T : <span class=\"SHKeyword\">struct</span></div></div><div class=\"TTSummary\">Read from a `WordDevice` to create a C# structure.&nbsp; The target structure can only contain very primitive data types.</div></div>",46:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype46\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a single `Bit` to a given `BitDevice`.</div></div>",47:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype47\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an array of `bool`s to a given `BitDevice`.&nbsp; note that there\'s a limit on how many registers can be written at a time.</div></div>",24:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype24\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a single `Bit` to a given `BitDevice`.</div></div>",48:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype48\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteBitDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>[]&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">writes an array of `bool`s to a given `bitdevice`.&nbsp; note that there\'s a limit on how many registers can be written at a time.</div></div>",49:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype49\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a single `ushort` to a given `WordDevice`.</div></div>",50:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype50\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>[]&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an array of `ushort`s to a given `WordDevice`.&nbsp; Note that there\'s a limit on how many registers can be written at a time.</div></div>",28:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a single `ushort` to a given `WordDevice`.</div></div>",29:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype29\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteWordDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>[]&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes an array of `ushort`s to a given `WordDevice`.&nbsp; Note that there\'s a limit on how many registers can be written at a time.</div></div>",67:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype67\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes the given string to the specified device as a null terminated string.&nbsp; Note that there\'s a limit on how many registers can be written at a time.</div></div>",31:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype31\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> WriteString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Device&nbsp;</td><td class=\"PName last\">device,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">ushort</span>&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes the given string to the specified device as a null terminated string.&nbsp; Note that there\'s a limit on how many registers can be written at a time.</div></div>"});