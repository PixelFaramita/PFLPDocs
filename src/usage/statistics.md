---
title: Statistics | 统计变量
order: 340
---

## 配置文件

```json
"Statistics": {
    "ModuleEnabled": true,//开启模块
    "%online_time%": true,//在线时长
    "%destroy%": true,//破坏方块数量
    "%place%": true,//放置方块数量
    "%death%": true,//死亡次数
    "%respawn%": true,//重生次数
    "%join%": true,//进服次数
    //击杀次数，包括玩家和生物
    //%kill:id%筛选id的击杀次数
    //如使用%kill:player%表示玩家
    //如使用%kill:sheep%表示羊
    "%kill%": true
}
```

## 使用说明

[其他变量](../guide/format.md)
