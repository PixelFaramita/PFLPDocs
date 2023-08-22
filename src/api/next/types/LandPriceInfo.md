---
title: LandPriceInfo
---

# 领地价格信息

[[toc]]

# 属性
## OriginalPrice
- ### 原价
- ### 类型: int
- ### 只读
## Start
- ### 领地起始坐标
- ### 类型: [ReadOnlyBlockPos](../types/ReadOnlyBlockPos.md)
- ### 只读
## End
- ### 领地结束坐标
- ### 类型: [ReadOnlyBlockPos](../types/ReadOnlyBlockPos.md)
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
## DimensionId
- ### 领地所在维度id
- ### 类型: int
- ### 只读
## LandConfig
- ### 领地领地配置
- ### 类型: [LandConfig](../types/LandConfig.md)
- ### 只读
## LandType
- ### 领地类型
- ### 类型: [LandType](../enums/LandType.md)
- ### 只读
# 方法
## SetPrice
- ### 设置领地价格
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | price | int | 价格 |
## SetPrice
- ### 设置领地价格
- 参数:
    | 名称 | 类型 | 描述 |
    |---|---|---|
   | price | int | 价格 |
   | description | string | 描述 |