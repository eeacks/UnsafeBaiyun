function hexToString(hex) {
  let out = "";
  const start = hex.startsWith("0x") ? 2 : 0;
  for (let i = start; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return out;
}

function stringToHex(str) {
  let out = "";
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < str.length; i++) out += digits[str.charCodeAt(i) >> 4] + digits[15 & str.charCodeAt(i)];
  return out;
}

function des(key, message, encrypt, mode, iv, padding) {
  if ("" == key) key = hexToString("6B73733230313640");
  let temp;
  let right1;
  let right2;
  let left;
  let right;
  let looping;
  let endloop;
  let loopinc;
  let cbcleft;
  let cbcright;
  let cbcleft2;
  let cbcright2;
  let chunk = 0;
  let iterations = key.length > 8 ? 3 : 1;
  let keys = des_createKeys(key);
  let m = 0;
  let len = message.length;
  let iterationsLoop = 32 == keys.length ? 3 : 9;
  const spfunction1 = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756);
  const spfunction2 = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344);
  const spfunction3 = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584);
  const spfunction4 = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928);
  const spfunction5 = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080);
  const spfunction6 = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312);
  const spfunction7 = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154);
  const spfunction8 = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696);

  const createLoops = iterationsLoop == 3
    ? (encrypt ? new Array(0, 32, 2) : new Array(30, -2, -2))
    : (encrypt ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2));
  looping = createLoops;

  if (padding == 2) {
    message += "        ";
  } else if (padding == 1) {
    temp = 8 - len % 8;
    message += String.fromCharCode(temp, temp, temp, temp, temp, temp, temp, temp);
    if (8 == temp) len += 8;
  } else if (!padding) {
    message += "\0\0\0\0\0\0\0\0";
  }

  let result = "";
  let tempresult = "";

  if (1 == mode) {
    cbcleft = iv.charCodeAt(m++) << 24 | iv.charCodeAt(m++) << 16 | iv.charCodeAt(m++) << 8 | iv.charCodeAt(m++);
    cbcright = iv.charCodeAt(m++) << 24 | iv.charCodeAt(m++) << 16 | iv.charCodeAt(m++) << 8 | iv.charCodeAt(m++);
    m = 0;
  }

  while (m < len) {
    left = message.charCodeAt(m++) << 24 | message.charCodeAt(m++) << 16 | message.charCodeAt(m++) << 8 | message.charCodeAt(m++);
    right = message.charCodeAt(m++) << 24 | message.charCodeAt(m++) << 16 | message.charCodeAt(m++) << 8 | message.charCodeAt(m++);

    if (1 == mode) {
      if (encrypt) {
        left ^= cbcleft;
        right ^= cbcright;
      } else {
        cbcleft2 = cbcleft;
        cbcright2 = cbcright;
        cbcleft = left;
        cbcright = right;
      }
    }

    temp = (left >>> 4 ^ right) & 252645135;
    right ^= temp;
    left ^= temp << 4;
    temp = (left >>> 16 ^ right) & 65535;
    right ^= temp;
    left ^= temp << 16;
    temp = (right >>> 2 ^ left) & 858993459;
    left ^= temp;
    right ^= temp << 2;
    temp = (right >>> 8 ^ left) & 16711935;
    left ^= temp;
    right ^= temp << 8;
    temp = (left >>> 1 ^ right) & 1431655765;
    right ^= temp;
    left ^= temp << 1;

    left = left << 1 | left >>> 31;
    right = right << 1 | right >>> 31;

    for (let j = 0; j < iterationsLoop; j += 3) {
      endloop = looping[j + 1];
      loopinc = looping[j + 2];
      for (let i = looping[j]; i != endloop; i += loopinc) {
        right1 = right ^ keys[i];
        right2 = (right >>> 4 | right << 28) ^ keys[i + 1];
        temp = left;
        left = right;
        right = temp ^ (spfunction2[right1 >>> 24 & 63] | spfunction4[right1 >>> 16 & 63] | spfunction6[right1 >>> 8 & 63] | spfunction8[right1 & 63] | spfunction1[right2 >>> 24 & 63] | spfunction3[right2 >>> 16 & 63] | spfunction5[right2 >>> 8 & 63] | spfunction7[right2 & 63]);
      }
      temp = left;
      left = right;
      right = temp;
    }

    left = left >>> 1 | left << 31;
    right = right >>> 1 | right << 31;
    temp = (left >>> 1 ^ right) & 1431655765;
    right ^= temp;
    left ^= temp << 1;
    temp = (right >>> 8 ^ left) & 16711935;
    left ^= temp;
    right ^= temp << 8;
    temp = (right >>> 2 ^ left) & 858993459;
    left ^= temp;
    right ^= temp << 2;
    temp = (left >>> 16 ^ right) & 65535;
    right ^= temp;
    left ^= temp << 16;
    temp = (left >>> 4 ^ right) & 252645135;
    right ^= temp;
    left ^= temp << 4;

    if (1 == mode) {
      if (encrypt) {
        cbcleft = left;
        cbcright = right;
      } else {
        left ^= cbcleft2;
        right ^= cbcright2;
      }
    }

    tempresult += String.fromCharCode(left >>> 24, left >>> 16 & 255, left >>> 8 & 255, left & 255, right >>> 24, right >>> 16 & 255, right >>> 8 & 255, right & 255);

    chunk += 8;
    if (chunk == 512) {
      result += tempresult;
      tempresult = "";
      chunk = 0;
    }
  }

  return result + tempresult;
}

function des_createKeys(key) {
  const pc2bytes0 = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964);
  const pc2bytes1 = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697);
  const pc2bytes2 = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272);
  const pc2bytes3 = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144);
  const pc2bytes4 = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256);
  const pc2bytes5 = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488);
  const pc2bytes6 = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746);
  const pc2bytes7 = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568);
  const pc2bytes8 = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578);
  const pc2bytes9 = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488);
  const pc2bytes10 = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800);
  const pc2bytes11 = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744);
  const pc2bytes12 = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128);
  const pc2bytes13 = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
  const iterations = key.length > 8 ? 3 : 1;
  const keys = new Array(32 * iterations);
  const shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
  let lefttemp;
  let righttemp;
  let m = 0;
  let n = 0;

  for (let j = 0; j < iterations; j++) {
    let left = key.charCodeAt(m++) << 24 | key.charCodeAt(m++) << 16 | key.charCodeAt(m++) << 8 | key.charCodeAt(m++);
    let right = key.charCodeAt(m++) << 24 | key.charCodeAt(m++) << 16 | key.charCodeAt(m++) << 8 | key.charCodeAt(m++);

    let temp = (left >>> 4 ^ right) & 252645135;
    right ^= temp;
    left ^= temp << 4;
    temp = (right >>> -16 ^ left) & 65535;
    left ^= temp;
    right ^= temp << -16;
    temp = (left >>> 2 ^ right) & 858993459;
    right ^= temp;
    left ^= temp << 2;
    temp = (right >>> -16 ^ left) & 65535;
    left ^= temp;
    right ^= temp << -16;
    temp = (left >>> 1 ^ right) & 1431655765;
    right ^= temp;
    left ^= temp << 1;
    temp = (right >>> 8 ^ left) & 16711935;
    left ^= temp;
    right ^= temp << 8;
    temp = (left >>> 1 ^ right) & 1431655765;
    right ^= temp;
    left ^= temp << 1;

    temp = left << 8 | right >>> 20 & 240;
    left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240;
    right = temp;

    for (let i = 0; i < shifts.length; i++) {
      if (shifts[i]) {
        left = left << 2 | left >>> 26;
        right = right << 2 | right >>> 26;
      } else {
        left = left << 1 | left >>> 27;
        right = right << 1 | right >>> 27;
      }
      left &= -15;
      right &= -15;

      lefttemp = pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] | pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[left >>> 4 & 15];
      righttemp = pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>> 20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>> 8 & 15] | pc2bytes13[right >>> 4 & 15];
      temp = (righttemp >>> 16 ^ lefttemp) & 65535;
      keys[n++] = lefttemp ^ temp;
      keys[n++] = righttemp ^ temp << 16;
    }
  }

  return keys;
}

function toHexByte(value) {
  let hex = value < 0 ? (255 + value + 1).toString(16) : value.toString(16);
  if (hex.length === 1) hex = "0" + hex;
  return hex;
}

function bytesToHex(bytes) {
  let out = "";
  for (const value of bytes) out += toHexByte(value);
  return out;
}

function arrayBufferToHex(buffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), item => ("00" + item.toString(16)).slice(-2)).join("");
}

function buildOpenDoorCommand(randomBuffer, bluetoothName, productKey) {
  const n = parseInt(bluetoothName.substr(3, 2), 16);
  const r = parseInt(bluetoothName.substr(5, 2), 16);
  const i = parseInt(bluetoothName.substr(7, 2), 16);
  const c = parseInt(bluetoothName.substr(9, 2), 16);

  let sum = 0;
  const randomBytes = new Uint8Array(randomBuffer);
  for (let index = 0; index < randomBytes.length; index++) sum += randomBytes[index];
  for (let index = 0; index < productKey.length / 2; index++) sum += parseInt(productKey.substr(index * 2, 2), 16);

  const hi = sum >> 8 & 255;
  const lo = 255 & sum;
  const bodyHex = bytesToHex([lo, hi, randomBytes[0], randomBytes[1], randomBytes[2], randomBytes[3], 0, 0]);
  const encrypted = des(hexToString(productKey), hexToString(bodyHex), 1);
  const encryptedHex = stringToHex(encrypted);

  const packet = [
    165, 20, 5, n, r, i, c, 0, 1, 7,
    parseInt(encryptedHex.substr(0, 2), 16),
    parseInt(encryptedHex.substr(2, 2), 16),
    parseInt(encryptedHex.substr(4, 2), 16),
    parseInt(encryptedHex.substr(6, 2), 16),
    parseInt(encryptedHex.substr(8, 2), 16),
    parseInt(encryptedHex.substr(10, 2), 16),
    parseInt(encryptedHex.substr(12, 2), 16),
    parseInt(encryptedHex.substr(14, 2), 16),
    0,
    90
  ];

  let packetSum = 0;
  for (const value of packet) packetSum += value;
  packet[packet.length - 2] = ~(255 & packetSum) - 1 + 1;

  return packet;
}

function parseOpenDoorResult(responseHex, productKey) {
  if (responseHex.length !== 40) return { ok: false, msg: "响应长度不对", raw: responseHex };
  if (responseHex.substr(18, 2) !== "87") return { ok: false, msg: "不是开门结果包", raw: responseHex };

  const encryptedBody = responseHex.substr(20, 16);
  const decrypted = des(hexToString(productKey), hexToString(encryptedBody), 0);
  const decryptedHex = stringToHex(decrypted);

  if (decryptedHex.length !== 16) return { ok: false, msg: "解密失败", raw: decryptedHex };

  const code = decryptedHex.substr(4, 2);
  if (code === "00") return { ok: true, msg: "开门成功", raw: decryptedHex };
  if (code === "02") return { ok: true, msg: "门已打开", raw: decryptedHex };
  return { ok: false, msg: "开门密码无效", raw: decryptedHex };
}

const shell = {
  scan(targetName) {
    console.log("[shell.scan] start scan:", targetName);
    return { name: targetName, deviceId: "mock-device-001" };
  },

  connect(deviceId) {
    console.log("[shell.connect] connect:", deviceId);
  },

  waitRandomChallenge(deviceId) {
    console.log("[shell.waitRandomChallenge] wait challenge from:", deviceId);
    const mockRandom = Uint8Array.from([17, 34, 51, 68]).buffer;
    console.log("[shell.waitRandomChallenge] mock random:", arrayBufferToHex(mockRandom));
    return mockRandom;
  },

  write(deviceId, packet) {
    console.log("[shell.write] device:", deviceId);
    console.log("[shell.write] packet(hex):", bytesToHex(packet));
  },

  waitOpenResult(deviceId) {
    console.log("[shell.waitOpenResult] wait result from:", deviceId);
    console.log("[shell.waitOpenResult] 这里需要真实锁返回的 40 位十六进制响应");
    return null;
  }
};

function runOpenDoorTest(guard, customShell = shell) {
  console.log("[test] start with guard:", guard);

  const device = customShell.scan(guard.bluetoothName);
  if (!device) throw new Error("未找到蓝牙设备: " + guard.bluetoothName);

  customShell.connect(device.deviceId);

  const randomBuffer = customShell.waitRandomChallenge(device.deviceId);
  const openPacket = buildOpenDoorCommand(randomBuffer, guard.bluetoothName, guard.productKey);

  console.log("[test] open command:", bytesToHex(openPacket));
  customShell.write(device.deviceId, openPacket);

  const resultHex = customShell.waitOpenResult(device.deviceId);
  if (!resultHex) {
    console.log("[test] 未提供真实响应包，流程到发送开门指令为止");
    return;
  }

  const result = parseOpenDoorResult(resultHex, guard.productKey);
  console.log("[test] open result:", result);
  return result;
}

const guard = {
  id: "2a1834bba29640a98fcfb0ae5ad0c5d3",
  name: "默认大门",
  code: "38574491",
  bluetoothName: "BYD20F5BA64",
  address: "testdoor",
  productKey: "B310FA148A1AA49A",
  companyId: "e5f08eee82d44ddbb8ea0d28a0585299",
  sn: "EC4B456B",
  limitTime: "2027-10-06"
};

runOpenDoorTest(guard);

module.exports = {
  des,
  hexToString,
  stringToHex,
  bytesToHex,
  arrayBufferToHex,
  buildOpenDoorCommand,
  parseOpenDoorResult,
  runOpenDoorTest
};
