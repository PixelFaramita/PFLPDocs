---
title: Player
---

# 玩家对象

> ### 13 处引用
> - [HomeAddInfo::Player](../types/HomeAddInfo.md#player) 属性
> - [LandCalcPrice 事件](../events/LandCalcPrice.md) 参数 player
> - [MoneyApi::Add](../types/MoneyApi.md#add) 参数 1
> - [MoneyApi::Get](../types/MoneyApi.md#get) 参数 1
> - [MoneyApi::Remove](../types/MoneyApi.md#remove) 参数 1
> - [OutOfWorldLimit 事件](../events/OutOfWorldLimit.md) 参数 player
> - [PlayerApi::GetByUniqueId](../types/PlayerApi.md#getbyuniqueid) 返回值
> - [PlayerApi::GetByUuid](../types/PlayerApi.md#getbyuuid) 返回值
> - [PlayerApi::GetByXuid](../types/PlayerApi.md#getbyxuid) 返回值
> - [PlayerSettingsBooleanEntry::Get](../types/PlayerSettingsBooleanEntry.md#get) 参数 1
> - [PlayerSettingsStringEntry::Get](../types/PlayerSettingsStringEntry.md#get) 参数 1
> - [TpaInfo::Sender](../types/TpaInfo.md#sender) 属性
> - [TpaInfo::Target](../types/TpaInfo.md#target) 属性
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
## DelayTeleportAsync
- ### 延迟传送
- 返回值: [Task](../types/Task.md)&lt;bool&gt;
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | x | float | x坐标 |
   | y | float | y坐标 |
   | z | float | z坐标 |
   | dimensionId | int | 维度ID |
## DelayTeleportAsync
- ### 延迟传送
- 返回值: [Task](../types/Task.md)&lt;bool&gt;
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | position | [Vec3](../types/Vec3.md) | 坐标 |
   | dimensionId | int | 维度ID |
## MoneyGet
- ### 获取玩家经济数值
- 返回值: long
## MoneyAdd
- ### 增加玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | count | long | 增加的经济数值 |
   | info | string | 交易信息 |
## MoneyRemove
- ### 减少玩经济数值
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | count | long | 减少的经济数值 |
   | info | string | 交易信息 |
## Tell
- ### 发送反馈消息
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | msg | string | 消息内容 |
## SendDialogAsync
- ### 向玩家发送对话框
- 返回值: [Task](../types/Task.md)&lt;bool&gt;
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | title | string | 表单标题 |
   | content | string | 表单内容 |
   | confirmButton | string | 确认按钮文本 |
   | cancelButton | string | 取消按钮文本 |