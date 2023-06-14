---
title: BehaviorLog | 行为日志
order: 280
---

## 配置文件

```json
"BehaviorLog": {
    "ModuleEnabled": true,
    //文件名
    "FileName": "BehaviorLog_%time:yyyy-MM-dd%.db",
    //文件名刷新间隔（分钟）
    "RefreshIntervalInMinutes": 60,
    //具体日志记录项开关
    "Toggles": {
        "PlayerJoin": {
            //储存到数据库
            "Database": true,
            //输出到控制台
            "Console": true
        },
        "PlayerLeft": {
            "Database": true,
            "Console": true
        },
        "ServerCmd": {
            "Database": true,
            "Console": true
        },
        "PlayerCmd": {
            "Database": true,
            "Console": true
        },
        "PlayerRespawn": {
            "Database": true,
            "Console": true
        },
        "MobDie": {
            "Database": true,
            "Console": true
        },
        "PlayerOpenContainer": {
            "Database": true,
            "Console": true
        },
        "PlayerChat": {
            "Database": true,
            "Console": true
        },
        "PlayerChangeDimension": {
            "Database": true,
            "Console": true
        },
        "PlayerAttack": {
            "Database": true,
            "Console": true
        },
        "PlayerPickUpItem": {
            "Database": true,
            "Console": true
        },
        "PlayerDropItem": {
            "Database": true,
            "Console": true
        },
        "PlayerDestroyBlock": {
            "Database": true,
            "Console": true
        },
        "PlayerPlaceBlock": {
            "Database": true,
            "Console": true
        },
        "PlayerInteractBlock": {
            "Database": true,
            "Console": true
        },
        "PlayerInteractEntity": {
            "Database": true,
            "Console": true
        },
        "ContainerChanged": {
            "Database": true,
            "Console": true
        },
        "BlockExplode": {
            "Database": true,
            "Console": true
        },
        "EntityExplode": {
            "Database": true,
            "Console": true
        }
    }
}
```

## 特点

- 使用 SQLite 数据库储存日志记录
- 仅储存必要信息，不储存具体日志的文字描述，以节省空间

## 查阅日志

- ### 使用数据库查看软件
  - [SQLiteStudio](https://sqlitestudio.pl/)
  - [DB Browser for SQLite](https://sqlitebrowser.org/)
  - ...
- ### 使用[WebUI](webui.md) [推荐]
  - 在线查看日志
  - 支持筛选、查找、排序
  - 高性能
