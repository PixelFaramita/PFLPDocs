---
title: FakeMotd | 伪造 Motd 信息
order: 330
---

## 配置文件

```json
"FakeMotd": {
    "ModuleEnabled": true,
    "DynamicMaxCount": true,
    "FakeCurrentPlayerCount": 0,
    "FakeMaxPlayerCount": 0,
    "FakePortIPv4": 0,
    "FakePortIPv6": 0,
    "FakeLevelName": "Bedrock Level"
}
```

## 使用说明

- `DynamicMaxCount`动态定义最大玩家数量
- `FakeCurrentPlayerCount`伪造当前玩家数量
- `FakeMaxPlayerCount`伪造最大玩家数量
- `FakePortIPv4`伪造 IPv4 端口(用于修复 frp 后显示在局域网游戏的 bug)
- `FakePortIPv6`伪造 IPv6 端口
- `FakeLevelName`伪造存档名称（显示在 motd 的存档名称，通常只有 motd 查看工具能看到）
