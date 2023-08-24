---
title: WebUIHiddenPlayerListRequest
---

# 隐藏玩家请求

> ### 1 处引用
> - [WebUIGetHiddenPlayerTo 事件](../events/WebUIGetHiddenPlayerTo.md) 参数 req
---

[[toc]]

# 函数对象
  - (*作为函数对象直接调用*)
  - ### 添加隐藏的玩家到当前请求
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | playerXuid | string | 玩家的xuid |
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
- ### 添加隐藏的玩家到当前请求
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | playerXuid | string | 玩家的xuid |