# 平安回家Offline
[原项目](https://github.com/dogproton/SafeBaiyun)以及[替代项目](https://github.com/1136623363/BaiyunKeys-preview)的方法不适用于小程序抓包的情况，因此，本版本专注于从小程序抓包得到的结果来应用的离线版。

**本项目使用了 LLM 参与辅助分析和代码生成。**

# 功能列表
- 支持从小程序中嗅探的数据开门。
- 支持多个门禁配置。
- 配置支持二维码和分享URL共享，导入反之亦然。

# 如何找到关键数据
配置好HTTP嗅探之后。
1. 进入门禁列表页面。
2. 找到请求 `https://xcx.pinganbaiyun.cn/p_021_health_passport/api_007_wbyw_002/get_guard_list_by_phone`
3. 找到返回数据中的路径 `$[0].data_list[n]` 其中 n 是你需要离线使用的大门（多个门禁的情况，只有一个门时则直接替换为 `0`）
4. 提取该对象下的 `bluetoothName` 和 `productKey`
5. 新建本项目的配置并导入
6. 开门！

# 分析报告
由 LLM 生成，人工修改
[报告](./REPORT.md)
[解包小程序参考](./ref)
