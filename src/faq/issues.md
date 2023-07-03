---
title: 故障排查
icon: lightbulb
order: 2
---

## Fail to load API money.xxxMoney

[7/3/2023 from Planet, source:QQGroup]

- 此非 PFLP 触发的报错，但可能影响经济系统运行
- 此为 LLSE(脚本引擎)触发的报错
- 原因：`LLMoney.dll`未正确加载或`LiteLoader.json`为开启经济接口
- 解决方法：
  1.  确认`LLMoney.dll`为正确版本且在 plugins 目录
  2.  ![开启经济核心](../../images/faq/lljson.png)
      [LLMoney 最新版本下载](https://github.com/LiteLDev/LLMoney/releases)
      [LiteLoaderBDS 源码对应部分](https://github.com/LiteLDev/LiteLoaderBDS/blob/main/ScriptEngine/src/main/EconomySystem.cpp#L55)
