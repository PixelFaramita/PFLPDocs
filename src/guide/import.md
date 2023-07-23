---
title: 数据迁移
icon: laptop-code
order: 5
---

## 从 PFEssentials 迁移数据到本插件

- ⚠️ 不得直接将 PFEssentials 的数据文件夹复制到本插件的数据文件夹，否则无法正常加载
- ### Home
  - 插件启动后自动导入`plugins\PFEssentials\data\homelist.json`
  - 所有玩家的家都会被导入，由于 PFEssentials 使用玩家名存储，故导入后 key 是`name:xxx`，在玩家进入后会二次转换
  - 运行后控制台提示`已自动导入PFEssentials的Home数据`即为成功
- ### Warp
  - 插件启动后自动导入`plugins\PFEssentials\data\warplist.json`
  - 运行后控制台提示`已自动导入PFEssentials的Warp数据`即为成功
- ### Land
  - 插件启动后自动导入`plugins\PFEssentials\data\landdata.json`
- 其他模块暂无迁移适配

## 从 TMEsstntial 迁移数据到本插件
- 由于 TMEssential 的home和warp数据文件与PFEssentials相同，故放置到`plugins\PFEssentials\data`即可自动导入
- ### Home
  - 文件放到`plugins\PFEssentials\data\homelist.json`
- ### Warp
  - 文件放到`plugins\PFEssentials\data\warplist.json`
- 其他模块暂无迁移适配
