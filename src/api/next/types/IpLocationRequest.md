---
title: IpLocationRequest
---

# IP归属地信息请求

> ### 2 处引用
> - [GetIpLocation 事件](../events/GetIpLocation.md) 参数 req
> - [IpLocationRequest::FillDefaultAsync](../types/IpLocationRequest.md#filldefaultasync) 返回值
---

[[toc]]

# 属性
## Country
- ### 国家
- ### 类型: string
- ### 可写
## Province
- ### 省/州
- ### 类型: string
- ### 可写
## City
- ### 城市
- ### 类型: string
- ### 可写
## Area
- ### 区划
- ### 类型: string
- ### 可写
## InternetServiceProvider
- ### 运营商
- ### 类型: string
- ### 可写
## Language
- ### 语言
- ### 类型: string
- ### 可写
## IsFillWithDefault
- ### 是否已成功通过FillDefault方法从默认接口获取到归属地信息
- ### 类型: bool
- ### 只读
# 方法
## FillDefaultAsync
- ### 使用默认接口获取并填充到当前对象
- 返回值: [ValueTask](../types/ValueTask.md)&lt;[IpLocationRequest](../types/IpLocationRequest.md)&gt;