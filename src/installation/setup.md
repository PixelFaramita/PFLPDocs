---
title: 4.起飞
order: 4
---

### 启动服务器

## 运行`bedrock_server_mod.exe`

- 安装成功会出现如下内容
  ![运行](../../images/install/welcome.png)

---

### 修改配置文件以及开启需要的模块

- 配置文件位于：`plugins\PXBANALuminousPolymerization\config.json`
- 请使用专业的编辑工具编辑（而不是祭祀本）

- 打开文件把看起来中意的模块开起来

      像这样

  > ```json
  > "xxx": {
  >    "ModuleEnabled": true,
  >    "xxx": "xxx"
  > }
  > ```

- 控制台输入`pflp reload`重载插件，或重启服务端以应用更改
