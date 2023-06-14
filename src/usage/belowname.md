---
title: BelowName | 玩家名下方信息显示
order: 140
---

## 配置文件

```json
"BelowName":{
    "ModuleEnabled": true,
    //刷新间隔（单位：毫秒）
    "RefreshInterval": 1000,
    "Pages": [//分页
        ["%health:F1%§r§c❤§r%hunger%§e%level%§g%experience:.00%§aL", "%os% §e| %devicename%"],
        ["§a↑%received%/s§7|§g↓%sent%/s", "§7ping:§a %ping%§ems"]
    ]
}
```
