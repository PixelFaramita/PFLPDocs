---
title: FriendlyDisconnect | 修改掉线提示
order: 170
---

## 配置文件

```json
"FriendlyDisconnect": {
    "ModuleEnabled": true,
    // 是否在控制台显示玩家掉线信息
    "ShowDisconnectInConsole": true,
    "NotAuthenticated": "§c未能通过Microsoft服务的身份验证\n§a       请检查你的网络环境",
    "NotInWhitelist": "§c        你不在服务器的白名单内！\n§e(服务器开启了白名单,请向管理员申请白名单)",
    "OldClient": "§c你的客户端版本太低，无法加入服务器",
    "OldServer": "§c你的客户端版本过新，无法加入服务器",
    "AlreadyLoginIn": "§c当前账号已在其他设备登录\n§eID:§b{0} §eIP:§b{1}\n§e系统:§b{2}\n§e型号:§b{3}",
    "DetailedInfo": "\n  §r§b服务端支持游戏版本：§l§6{0}.{1}.{2}§g.{3}\n      §r§e服务端协议版本： §l§a{4}\n      §r§e客户端协议版本： §c§l{5}",
    //强制允许玩家加入的协议版本（通常并不一定有效）
    "ExtraAllowIncomingProtocolVersions": []
}
```

## 使用效果

... todo
