---
title: PlayerSettingsModule
---

# 玩家个人设置注册(链式接口)

> ### 1 处引用
> - [PlayerSettingsApi::Register](../types/PlayerSettingsApi.md#register) 返回值
---

[[toc]]

# 方法
## String
- ### 注册字符串设置（文本框）
- 返回值: [PlayerSettingsStringEntry](../types/PlayerSettingsStringEntry.md)
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | key | string | 键/标识符 |
   | defaultValue | string | 默认值 |
   | description | string | 描述 |
   | placeholder | string | 文本框水印 |
## Boolean
- ### 注册布尔值设置（开关）
- 返回值: [PlayerSettingsBooleanEntry](../types/PlayerSettingsBooleanEntry.md)
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | key | string | 键/标识符 |
   | defaultValue | bool | 默认值 |
   | description | string | 描述 |