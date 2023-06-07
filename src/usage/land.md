---
title: Land | 领地
order: 80
---

## 配置文件

```json
"Land": {
    //开启领地
	"ModuleEnabled": true,
    //领地传送
	"EnableTeleport": true,
    //圈地飞行
	"EnableEnclosureFly": true,
    //OP临时Buff时间
    //命令/land opbuff后即可暂时无视领地权限
	"OpBuffTimeSeconds": 60,
    //开启2D领地
	"Enabled2D": true,
    //2D领地价格
	"Price2D": 100.0,
    //2D领地回收价格
	"RecyclePrice2D": 95.0,
    //2D领地最大面积
	"MaxSize2D": -1,
    //2D领地最小面积
	"MinSize2D": 4,
    //开启3D领地
	"Enabled3D": true,
    //3D领地价格
	"Price3D": 2.0,
    //3D领地回收价格
	"RecyclePrice3D": 1.9,
    //3D领地最大面积
	"MaxSize3D": -1,
    //3D领地最小面积
	"MinSize3D": 8,
    //玩家拥有的领地最大数量，-1表示无限制
	"MaximumOwnLands": -1,
    //领地提示数量(通常是无权限的提示）
	"LandTipCount": 4,
    //领地提示时间
	"LandTipTime": 3000,
    //表单每页显示的项目数量（对于翻页表单）
	"CountPerPage": 10,
    //表单每页显示的项目数量（对于选择表单）
	"ChooseItemCountPerPage": 3,
    //增强破坏保护，仅显示效果
	"PreventDestroyEx": true,
    //领地额外监听器，如果嫌领地保护的太好可以关闭，通常不建议关闭
	"ExtraListener": {
		"BlockFall": true,
		"MultifaceSpreader": true,
		"ItemFrameDrop": true,
		"OnActorHurt": true,
		"PCImpactDamage": true,
		"PCSplashPotion": true,
		"PCAoECloud": true,
		"PCArrowHit": true,
		"OnHitLightning": true,
		"WitherBossAttack": true,
		"WitherBossDestroyBlocks": true,
		"BreakDoor": true,
		"GrowTree": true,
		"GrowMashroom": true,
		"LecternBlockDropBook": true,
		"FishingHook": true,
		"EndermanTakeBlock": true,
		"EndermanLeaveBlock": true,
		"LightningBolt": true,
		"HungerChange": true,
		"BlockMove": true,
		"OpenInventory": true,
		"PlayerDie": true,
		"HopperPullIn": true,
		"OnMobHurt": true
	}
}
```

## 命令

![命令](../../images/land/cmd.png)

## 圈地

![圈地](../../images/land/create.png)
