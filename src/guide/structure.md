---
title: 文件结构
index: true
order: 1
icon: laptop-code
---

## 插件目录的文件结构

- 插件目录位于`[服务端目录]\plugins\PXBANALuminousPolymerization\`目录下
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
- `maps\`：地图服务区块颜色数据
  - `x_z_.db`：区块文件，可以删除即删除指定区块的缓存
- `data\`：数据文件夹
- `home.json`：家数据文件
- `warplist.json`：传送点数据文件
- `ban.json`：封禁数据文件
- `chat.json`：聊天配置数据文件，玩家的称号、前缀、后缀、昵称
- `death.json`：死亡数据文件
- `floattext.json`：浮动文字数据文件
- `identity.json`：身份数据文件（此文件可删除，但会暂时造成无法通过 xuid 获取到玩家名）
- `landdata.json`：领地数据文件
- `language.json`：语言数据文件（如玩家个人设置的语言）
- `locationCache.json`：位置缓存数据文件（此文件可删除，会自动获取）（如位置有误也可打开修改）
- `shopPreference.json`：商店偏好数据文件
- `TpaProfiles.json`：传送请求个人设置文件
- `translation.json`：翻译个人设置文件
- `mapdata.json`：地图服务简要数据（主要用于 WebUI 在线地图）
- `chat.db`：聊天记录数据库（主要用于 WebUI 查看）
- `avatar\`：玩家头像缓存文件（可删除，会重新获取）（主要用于 WebUI 显示玩家头像）
