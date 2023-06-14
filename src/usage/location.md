---
title: JoinLocation | 进服 IP 归属地显示
order: 120
---

### 配置文件

```json
"JoinLocation": {
    //开启
    "ModuleEnabled": true,
    //玩家加入后发送聊天消息
    "SendMessage": true,
    //玩家加入后发送通知横幅
    "SendToast": true
}
```

### 修改提示

- 提示位于语言文件
- 如`zh_CN.lang`

```ini
JoinLocation.Msg=§e欢迎来自§c {1}§d{2}§b{3}§g{4}§7({5})§e 的§a {0} §e加入服务器~
JoinLocation.ToastContent=§e欢迎来自§c {1}§d{2}§b{3}§g{4}§7({5})§e 的§a {0} §e加入服务器~
JoinLocation.ToastTitle=    §e {0} 加入了服务器~

```

### 使用效果

... todo

### 相关配置

文件`[插件目录]\data\locationCache.json`存储了玩家的 IP 地址和归属地信息用作缓存，可以手动修改或删除

- 如需要隐藏某玩家的归属地信息或信息有误，可以修改此文件
