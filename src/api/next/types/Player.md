---
title: Player
---

# 玩家对象

> ### 7 处引用
> - [LandCalcPrice 事件](../events/LandCalcPrice.md) 参数 player
> - [OutOfWorldLimit 事件](../events/OutOfWorldLimit.md) 参数 player
> - [PlayerApi::GetByUniqueId](../types/PlayerApi.md#getbyuniqueid) 返回值
> - [PlayerApi::GetByUuid](../types/PlayerApi.md#getbyuuid) 返回值
> - [PlayerApi::GetByXuid](../types/PlayerApi.md#getbyxuid) 返回值
> - [TpaStart 事件](../events/TpaStart.md) 参数 fromPlayer
> - [TpaStart 事件](../events/TpaStart.md) 参数 toPlayer
---

[[toc]]

# 属性
## Xuid
- ### 玩家xuid
- ### 类型: string
- ### 只读
## Uuid
- ### 玩家uuid
- ### 类型: string
- ### 只读
## Name
- ### 玩家名称
- ### 类型: string
- ### 只读
## DimensionId
- ### 玩家所在维度id
- ### 类型: int
- ### 只读
# 方法
## PlayerListAdd
- ### 列表添加玩家
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | key | string | 唯一标识符或uuid |
   | name | string | 玩家名称 |
   | xuid | string | 列表玩家 |
## PlayerListRemove
- ### 列表移除玩家
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | key | string | 唯一标识符或uuid |