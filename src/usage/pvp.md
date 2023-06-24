---
title: PvPManager | 个人 PvP 状态管理
order: 340
---

## 配置文件

```json
"PvPManager": {
    //开启
    "ModuleEnabled": true,
    //额外监听器，开启判断更全面，也可选择关闭
    "ExtraListener": {
        "OnActorHurt": true,
        "PCImpactDamage": true,
        "PCSplashPotion": true,
        "PCAoECloud": true,
        "ProjectileCatchFire": true,
        "ProjectileDouseFire": true,
        "ProjectileIgnite": true,
        "PCArrowHit": true
    }
}
```

## 命令

`/pvp`- 切换 PvP 状态

## 使用说明

仅在两个玩家都开启 PvP 状态时才会互相造成伤害
