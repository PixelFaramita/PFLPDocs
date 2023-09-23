---
title: MoneyApi
---

# 经济接口

> ### 无引用

[[toc]]

# 属性
## DisplayName
- ### 配置的货币显示名称
- ### 类型: string
- ### 只读
# 方法
## GetByXuid
- ### 通过xuid获取玩家经济数值
- 返回值: long
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | playerXuid | string | 玩家xuid |
## AddByXuid
- ### 通过xuid增加玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | playerXuid | string | 玩家xuid |
   | count | long | 增加的经济数值 |
   | info | string | 交易信息 |
## RemoveByXuid
- ### 通过xuid减少玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | playerXuid | string | 玩家xuid |
   | count | long | 减少的经济数值 |
   | info | string | 交易信息 |
## Get
- ### 通过玩家对象获取玩家经济数值
- 返回值: long
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | player | [Player](../types/Player.md) | 玩家对象 |
## Add
- ### 通过玩家对象增加玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | player | [Player](../types/Player.md) | 玩家对象 |
   | count | long | 增加的经济数值 |
   | info | string | 交易信息 |
## Remove
- ### 通过玩家对象减少玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | player | [Player](../types/Player.md) | 玩家对象 |
   | count | long | 减少的经济数值 |
   | info | string | 交易信息 |