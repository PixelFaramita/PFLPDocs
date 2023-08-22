---
title: LandInfo
---

# 领地信息

[[toc]]

# 属性
## Start
- ### 领地起始坐标
- ### 类型: [ReadOnlyBlockPos](../types/ReadOnlyBlockPos.md)
- ### 只读
## End
- ### 领地结束坐标
- ### 类型: [ReadOnlyBlockPos](../types/ReadOnlyBlockPos.md)
- ### 只读
## TeleportPos
- ### 传送点坐标
- ### 类型: [Vec3](../types/Vec3.md)
- ### 可写
## DimensionId
- ### 领地所在维度id
- ### 类型: int
- ### 只读
## DX
- ### 领地长（x方向跨度）
- ### 类型: int
- ### 只读
## DY
- ### 领地高（y方向跨度）
- ### 类型: int
- ### 只读
## DZ
- ### 领地宽（z方向跨度）
- ### 类型: int
- ### 只读
## LandType
- ### 领地类型
- ### 类型: [LandType](../enums/LandType.md)
- ### 只读
## OwnerXuid
- ### 领地主人的Xuid
- ### 类型: string
- ### 只读
## DisplayName
- ### 领地显示名称
- ### 类型: string
- ### 可写
## Message
- ### 领地留言
- ### 类型: string
- ### 可写
## ShowWelcome
- ### 领地是否显示欢迎语
- ### 类型: bool
- ### 可写
## Welcome
- ### 领地欢迎语
- ### 类型: string
- ### 可写
## PublicPermissionGroupId
- ### 领地公共权限组ID
- ### 类型: string
- ### 可写
## DefaultSharedPermissionGroupId
- ### 领地默认共享权限组ID
- ### 类型: string
- ### 可写
## PlayersShared
- ### [接口还没做请催更]领地指定共享玩家的权限组ID(PlayersShared: Map<string, string | null>;)
- ### 类型: bool
- ### 只读
## SubLands
- ### [接口还没做请催更]子领地集合SubLand
- ### 类型: bool
- ### 只读