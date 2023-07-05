---
title: PackManager | 资源包管理器
order: 65
---

## 配置文件

```json
//开启材质包加密
//密钥为自动生成
//目前貌似没自定义密钥的需求就不做自定义了
"PackManager_EncryptResourcePacks": true,
```

## 手动加载

- 推荐自动导入
- 解压即可自动导入
- `plugins\PixelFaramitaLuminousPolymerization\pack\customize\resource_packs\[xxx]\manifest.json`
- `plugins\PixelFaramitaLuminousPolymerization\pack\customize\behavior_packs\[xxx]\manifest.json`
  > _文件夹直接放入即可加载，不会污染地图目录和服务端目录的行为包/资源包文件夹_

## 自动加载

- 一键导入`.mcaddon`或`.mcpack`
  ![放置目录](../../images/pack/mcaddon.png)

  > _文件直接放入即可自动导入，不会污染地图目录和服务端目录的行为包/资源包文件夹_

## 快速加载

- 快速加载 结构 和`.mcfunction`文件
- `plugins\PixelFaramitaLuminousPolymerization\pack\functions`
- `plugins\PixelFaramitaLuminousPolymerization\pack\structures`
- 支持`/reload`命令重载，不过受限于`/reload`命令的限制，只能重载开服时已存在的文件
  > _文件直接放入即可自动导入，不会污染地图目录和服务端目录的行为包文件夹_

## 局限性

材质包热重载暂未实现，目前添加材质包后需要重启服务器方可应用
