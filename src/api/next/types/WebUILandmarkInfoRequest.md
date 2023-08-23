---
title: WebUILandmarkInfoRequest
---

# 地标信息请求

> ### 1 处引用
> - [WebUIGetLandmark 事件](../events/WebUIGetLandmark.md) 参数 info
---

[[toc]]

# 函数对象
  - (*作为函数对象直接调用*)
  - ### 添加地标
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | name | string | 用于显示的地标名称 |   | x | int | x坐标 |   | y | int | y坐标 |   | z | int | z坐标 |   | dimensionId | int | 所在维度 |
# 属性
## PlayerXuid
- ### 当前在WebUI登录的玩家的xuid	【⚠️】如果WebUI没有登录，那么xuid是null
- ### 类型: string
- ### 只读
## Player
- ### (离线)玩家对象
- ### 类型: [OfflinePlayer](../types/OfflinePlayer.md)
- ### 只读
# 方法
## Add
- ### 添加地标
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | name | string | 用于显示的地标名称 |
   | x | int | x坐标 |
   | y | int | y坐标 |
   | z | int | z坐标 |
   | dimensionId | int | 所在维度 |