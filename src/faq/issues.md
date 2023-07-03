---
title: 故障排查
icon: lightbulb
order: 2
---

## Fail to load API money.xxxMoney

- 此非 PFLP 触发的报错，但通常影响经济系统运行
- 原因：`LLMoney.dll`未正确加载
  [LLMoney 最新版本下载](https://github.com/LiteLDev/LLMoney/releases)
  [LiteLoaderBDS 源码对应部分](https://github.com/LiteLDev/LiteLoaderBDS/blob/main/ScriptEngine/src/main/EconomySystem.cpp#L55)
