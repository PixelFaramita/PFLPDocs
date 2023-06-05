---
title: 文件结构
index: true
order: 2
icon: laptop-code
---

## 插件目录的文件结构

- 插件目录位于`[服务端目录]\plugins\PixelFaramitaLuminousPolymerization\`目录下
- 插件目录下的`config.json`文件是插件的主配置文件

### 文件列表

- `config.json`：插件的主配置文件
- `menu.json`：菜单模块配置文件（开启后生成）
- `giftcode.json`：礼品码模块配置文件（开启后生成）
- `notice.json`：公告模块配置文件（开启后生成）
- `shopdata.json`：商店模块配置文件（开启后生成）

### 文件夹

> <br> ├─data
> <br> ├─lang
> <br> ├─pack
> <br> │ &emsp;└─customize
> <br> │ &emsp;&emsp;&emsp;├─behavior_packs
> <br> │ &emsp;&emsp;&emsp;└─resource_packs
> <br> ├─pictures
> <br> ├─scripts
> <br> │ &emsp;└─node_modules
> <br> │ &emsp;&emsp;&emsp;└─@pf
> <br> └─temp

- `lang\...`：语言文件夹
  - `en_US.lang`：英文语言文件
  - `zh_CN.lang`：英文语言文件
- `pack\`：资源包/行为包文件夹
  - `temp`：材质包缓存，通常由插件生成，无需查看具体内容
  - `customize`： 自定义材质包路径，配置项中开启材质包加密后里面的材质包会自动用随机密钥加密后发给客户端
    - `behavior_packs`：行为包文件夹
    - `resource_packs`：资源包文件夹
      - `[文件夹]`：某自定义材质包
        - `manifest.json`：资源包描述文件
        - `pack_icon.png`：资源包图标
        - `...`：其他文件
- `pictures\`：图片文件夹（开启图片加载器模块后生成）
  - `...`：导入图片文件文件夹
    > 图片不会存在在存档中， 删除文件夹内的图片文件后，即对应删除导入的图片
- `scripts\`：脚本文件夹
  - `node_modules\`：脚本依赖文件夹
    - `@pf\`：插件依赖文件夹
    - `...`：插件依赖文件夹
  - `xxx.js`：自定义脚本文件
    > 可通过脚本文件来扩展插件功能，脚本文件支持热重载，保存文件即自动加载
  - `package.json`：脚本依赖配置文件（主要是`@minecraft/server`等补全库）
  - `npm.bat`：通过 npm 安装依赖补全库，如需使用`@minecraft/server`等补全库，可运行以执行`npm install`命令
