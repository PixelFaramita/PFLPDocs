---
title: TpaInfo
---

# 请求传送信息

> ### 2 处引用
> - [TpaAccepted 事件](../events/TpaAccepted.md) 参数 info
> - [TpaContinue::Info](../types/TpaContinue.md#info) 属性
---

[[toc]]

# 属性
## Sender
- ### 来源玩家
- ### 类型: [Player](../types/Player.md)
- ### 只读
## Target
- ### 目标玩家
- ### 类型: [Player](../types/Player.md)
- ### 只读
## Mode
- ### 传送模式
- ### 类型: [TpaMode](../enums/TpaMode.md)
- ### 只读
# 方法
## Wait
- ### 设置请求搁置
- 返回值: [TpaContinue](../types/TpaContinue.md)
## Remove
- ### 取消传送(从队列中移除本次请求)