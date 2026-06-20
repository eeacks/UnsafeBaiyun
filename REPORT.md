# 门禁示例数据编码与使用技术分析

## 1. 结论概览

- 你提供的示例数据里，当前离线开门流程真正参与“扫描、组包、解包、开门”的核心字段只有 `bluetoothName` 和 `productKey`
- 在原始小程序里，`get_guard_list_by_phone` 返回的门禁列表会被裁剪后写入页面数据和本地缓存，开门时取当前选中的门禁对象 `curItem`
- `name` 主要用于展示，`limitTime` 用于计算是否过期，`id/code/companyId/address` 用于页面展示或业务关联
- `sn` 在原始小程序里用于“通讯密钥/黑名单同步”一类扩展流程；在当前 `UnsafeBaiyun` 的离线最小实现中，没有使用 `sn`
- 当前 `UnsafeBaiyun` 的导入/导出编码格式不是原始完整门禁对象，而是只保留：
  - `name`
  - `bluetoothName`
  - `productKey`

## 2. 你的示例数据

原始示例：

```json
{
  "id": "REDACTED",
  "name": "默认大门",
  "code": "11223344",
  "bluetoothName": "BYAABBCCDDE",
  "address": "testdoor",
  "productKey": "AABBCCDDEEFFAABB",
  "companyId": "REDACTED",
  "sn": "AABBCCDD",
  "limitTime": "2077-11-11"
}
```

## 3. 原始小程序里这份数据如何进入开门流程

### 3.1 服务端返回门禁列表

原始接口 `get_guard_list_by_phone` 位于 `page/opendoor/opendoor_index.js:884`。

接口成功后，代码把返回的每条门禁记录裁剪成前端对象，保留这些字段：

- `name`
- `address`
- `id`
- `code`
- `companyId`
- `bluetoothName`
- `limitTime`
- `productKey`
- `expireDays`

见 `page/opendoor/opendoor_index.js:897`。

这说明：

- `sn` 不在这个列表裁剪块里
- 但后续蓝牙流程里仍可能从别的来源把 `sn` 放进 `curItem`

### 3.2 选中某个门禁后开始开门

原始页面在 `openDoor_v2` / `search_openDoor` 里，把点击项放进 `curItem`，然后用：

- `curItem.bluetoothName` 作为目标蓝牙名
- `curItem.productKey` 作为 DES 密钥
- `curItem.expireDays` 判断门禁是否过期

相关位置：

- `page/opendoor/opendoor_index.js:427`
- `page/opendoor/opendoor_index.js:475`
- `page/opendoor/opendoor_index.js:483`

## 4. 蓝牙扫描阶段如何使用 `bluetoothName`

### 4.1 原始实现

原始小程序扫描时，核心匹配条件就是：

- 扫到的蓝牙设备名 `device.name`
- 是否等于 `curItem.bluetoothName`

见：

- `page/opendoor/opendoor_index.js:397`
- `page/opendoor/opendoor_index.js:440`
- `page/opendoor/opendoor_index.js:483`

也就是说，示例数据中的：

```json
"bluetoothName": "BYAABBCCDDE"
```

会被直接当成“目标 BLE 广播名”使用，而不是先哈希、再编码、再映射。

## 5. 开门指令如何从 `bluetoothName + productKey + 随机数` 编码出来

这是整个流程的核心。

### 5.1 输入

开门指令需要 3 个输入：

1. 设备先返回的 4 字节随机数 `randomValue`
2. `bluetoothName`
3. `productKey`

在当前实现中，组包函数是 `LockBiz.buildOpenDoorPacket(...)`，见：

- `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:11`
- 调用点：`UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/UnlockRepo.kt:337`

### 5.2 从 `bluetoothName` 提取设备标识

代码会从 `bluetoothName` 中截取 4 个字节：

- `substring(3, 5)`
- `substring(5, 7)`
- `substring(7, 9)`
- `substring(9, 11)`

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:12`

对你的示例：

```text
bluetoothName = BYAABBCCDDE
```

按索引拆分：

- `AA`
- `BB`
- `CC`
- `DD`

这 4 个字节会进入开门报文头部。

注意：

- 最后一位 `4` 没被这里使用
- 也就是说当前协议实现并不是把整个 `bluetoothName` 全部塞进报文，而是只截取其中一段

这和你之前 `test.js` 中提取逻辑一致，见 `test.js:251`。

### 5.3 `productKey` 的作用

你的示例：

```text
productKey = AABBCCDDEEFFAABB
```

它被当作：

- 8 字节 DES 密钥
- 同时参与前置求和

代码位置：

- `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:17`
- `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/FDes.kt:13`

DES 模式是：

- `DES/ECB/NoPadding`

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/FDes.kt:15`

### 5.4 构造 8 字节明文体

代码会先计算总和：

- 随机数 4 字节逐字节求和
- `productKey` 8 字节逐字节求和

然后构造 8 字节明文：

```text
[sumLow, sumHigh, rand0, rand1, rand2, rand3, 0x00, 0x00]
```

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:18`

这一步和原始小程序一致，原始实现见：

- `page/opendoor/opendoor_index.js:556`
- `page/opendoor/opendoor_index.js:564`

### 5.5 DES 加密

上面的 8 字节明文会用 `productKey` 做 DES 加密，得到 8 字节密文块。

原始实现对应：

- `page/opendoor/opendoor_index.js:565`

当前实现对应：

- `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:29`

### 5.6 拼装最终 20 字节开门报文

最终报文结构：

```text
[A5, 14, 05, n, r, i, c, 00, 01, 07, enc0..enc7, checksum, 5A]
```

代码见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:30`

其中：

- `A5`：帧头
- `14`：长度 20
- `05`：命令类型
- `n r i c`：从 `bluetoothName` 截出的 4 字节设备标识
- `00 01 07`：固定协议字段
- `enc0..enc7`：DES 加密后的 8 字节
- `checksum`：按整包求和后取反低字节
- `5A`：帧尾

原始小程序同一逻辑见：

- `page/opendoor/opendoor_index.js:567`
- `page/opendoor/opendoor_index.js:569`

## 6. 开门响应如何解码

设备返回响应后：

1. 先判断报文长度是否为 40 个 hex 字符
2. 再判断命令位是否为 `87`
3. 取响应体中的 16 个 hex 字符密文
4. 用同一个 `productKey` 做 DES 解密
5. 根据解密结果第 3 个字节判断结果

当前实现见：

- `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/LockBiz.kt:63`

判定规则：

- `00` => 开门成功
- `02` => 门已打开
- 其他 => 开门密码无效

原始小程序的对应解密逻辑见：

- `page/opendoor/opendoor_index.js:598`
- `page/opendoor/opendoor_index.js:697`

## 7. 你的示例数据中每个字段的实际用途

### 7.1 当前离线实现中会被使用的字段

#### `name`

- 仅用于界面显示、配置命名、二维码导出时展示

#### `bluetoothName`

- 扫描目标 BLE 设备名
- 从中截取 4 个协议字节

#### `productKey`

- DES 密钥
- 报文构造时参与求和
- 响应解密时再次使用

### 7.2 原始业务里有意义，但当前最小离线实现没有使用的字段

#### `limitTime`

- 原始小程序会算出 `expireDays` 用于控制是否允许开门
- 当前 `UnsafeBaiyun` 最小实现没有接入过期判断

见 `page/opendoor/opendoor_index.js:897`

#### `id`

- 原始业务主键
- 当前 `UnsafeBaiyun` 会为本地配置生成自己的 `id`，不依赖服务端 `id`

#### `code`

- 原始业务展示/关联字段
- 当前离线实现未使用

#### `address`

- 原始页面展示字段
- 当前离线实现未使用

#### `companyId`

- 原始业务关联字段
- 当前离线实现未使用

#### `sn`

- 原始小程序中用于扩展流程：
  - 通讯密钥获取
  - 黑名单同步
- 相关逻辑见 `page/opendoor/opendoor_index.js:581`
- 当前 `UnsafeBaiyun` 的最小离线版本没有实现这部分，所以 `sn` 未使用

## 8. 你的示例数据在当前 `UnsafeBaiyun` 中会如何被“裁剪”

如果把你的示例数据导入到当前 app，真正会被保留并编码导出的内容等价于：

```json
{
  "name": "默认大门",
  "bluetoothName": "BYAABBCCDDE",
  "productKey": "AABBCCDDEEFFAABB"
}
```

当前导入导出对象定义见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/ConfigTransfer.kt:9`

## 9. 当前导出二维码 / URL 的编码格式

### 9.1 导出前的数据结构

当前 app 导出时，先构造：

```json
{
  "name": "...",
  "bluetoothName": "...",
  "productKey": "..."
}
```

### 9.2 编码步骤

1. 把上面的 JSON 序列化为字符串
2. 对 JSON 做 Base64 URL Safe 编码
3. 拼成：

```text
safeby://import?data=<base64url>
```

实现见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/ConfigTransfer.kt:27`

### 9.3 导入步骤

导入时支持两种输入：

1. `safeby://import?...`
2. 原始 JSON 文本

然后解析出：

- `name`
- `bluetoothName`
- `productKey`

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/util/ConfigTransfer.kt:43`

## 10. 用你的示例数据跑当前最小离线实现时的完整链路

### 10.1 配置进入本地

最终会存为一条本地配置：

```json
{
  "id": "<本地UUID>",
  "name": "默认大门",
  "bluetoothName": "BYAABBCCDDE",
  "productKey": "AABBCCDDEEFFAABB"
}
```

存储逻辑见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/DataRepo.kt:59`

### 10.2 点击开门

`UnlockRepo.unlock()` 会：

1. 从 `DataRepo` 取当前选中的配置
2. 校验 `bluetoothName` 非空、`productKey` 长度为 16
3. 开始 BLE 扫描

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/UnlockRepo.kt:51`

### 10.3 扫描命中设备

扫描回调里，当设备名等于：

```text
BYAABBCCDDE
```

就停止扫描并连接设备。

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/UnlockRepo.kt:101`

### 10.4 读随机数并组包

连接成功后，读取设备特征值；收到 4 字节随机数后：

1. 用 `BYAABBCCDDE` 提取 `AA BB CC DD`
2. 用 `AABBCCDDEEFFAABB` 作为 DES 密钥
3. 构造 20 字节开门包
4. 写回门锁

组包调用点见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/UnlockRepo.kt:337`

### 10.5 解码结果

收到响应后，用同一个 `productKey` 解密并判断开门结果。

见 `UnsafeBaiyun/app/src/main/java/cn/huacheng/safebaiyun/unlock/UnlockRepo.kt:351`
