---
title: WebsocketAPI | 远程控制 API
order: 180
---

## 远程控制 API

```json
"WebsocketAPI": {
    "ModuleEnabled": true,
    //监听地址
    "Location": "ws://0.0.0.0:29132/mcws",
    //传输密钥
    "Token": "commandpassword",
    //是否启用调试输出
    "EnableDebugOutput": false,
    //控制台不输出任何WS的消息
    "QuietConsole": false
  }
```

## 协议说明

- [BDSWebSocketAPIProtocol](https://github.com/LazuliKao/BDSWebSocketAPIProtocol)
  - Fork From(基于) [BDXWebSocket](https://github.com/KawaiiNahida/BDXWebSocket) [Apr 8, 2020]
