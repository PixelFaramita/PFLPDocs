---
title: HomeAddInfo
---

# 添加home信息

> ### 2 处引用
> - [HomeAdd 事件](../events/HomeAdd.md) 参数 info
> - [HomeAddContinue::Info](../types/HomeAddContinue.md#info) 属性
---

[[toc]]

# 属性
## Player
- ### 添加Home的目标玩家
- ### 类型: [Player](../types/Player.md)
- ### 只读
## HomeName
- ### 新home的名称
- ### 类型: string
- ### 可写
## HomePosition
- ### 新home的坐标
- ### 类型: [Vec3](../types/Vec3.md)
- ### 可写
## HomeDimensionId
- ### 新home的维度id
- ### 类型: int
- ### 可写
# 方法
## Cancel
- ### 取消添加home，可通过调用返回的HomeAddContinue对象恢复添加
- 返回值: [HomeAddContinue](../types/HomeAddContinue.md)