---
title: DynamicMotd | 动态 Motd
order: 130
---

## 配置文件

```json
"DynamicMotd": {
    "ModuleEnabled": true,
    //刷新间隔（单位：毫秒）(客户端有一定获取间隔，刷新太快没有实际意义)
    "RefreshInterval": 2500,
    //motd 的具体内容
    //每页内容在间隔后切换
    "Pages": ["服务器", "%playercount% 在线"]
}
```
