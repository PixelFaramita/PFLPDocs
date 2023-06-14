---
title: Backup | 自动备份
order: 290
---

## 配置文件

```json
"Backup": {
    //总开关
    "ModuleEnabled": true,
    //备份到的目录
    "TargetFolder": "backup/%time:yyyy-MM-dd-HH-mm-ss%",
    //如果目标目录存在，是否删除
    "DeleteTargetFolderIfExists": true,
    //复制所有需要备份的文件夹
    "CopyFolder": false,
    //创建 zip 压缩包
    "CreateZipFile": true,
    //压缩包文件名
    "ZipFileName": "backup-%time:yyyy-MM-dd-HH-mm-ss%",
    //创建 .mcworld 压缩包，方便直接导入Minecraft
    "CreateMcWorldFile": true,
    //存档文件名称
    "McWorldFileName": "backup-%time:yyyy-MM-dd-HH-mm-ss%",
    //是否备份插件数据文件
    "IncludePluginData": true,
    //是否备份插件配置文件
    "IncludePluginConfig": true,
    //额外需要备份的文件
    //可使用通配符
    "Extra": ["plugins/LiteLoader/*.json"]
}
```

## 命令

- `/backup`
  - 可在控制台或者游戏内管理员使用
