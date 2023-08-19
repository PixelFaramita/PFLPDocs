---
title: 插件配置
icon: sliders
order: 2
---

## 基本配置

### 配置文件

- 配置文件使用`json`格式
- 配置文件位于`[服务端目录]\plugins\PXBANALuminousPolymerization\config.json`
- 请使用专业的编辑工具编辑（而不是祭祀本），如[`Visual Studio Code`](https://code.visualstudio.com/)

### 配置文件基本结构

```json
{
  "全局功能名称": "全局功能值",
  "模块名称": {
    "ModuleEnabld": true|false,//开启或者关闭模块
    "功能名称":"配置值"
  }
}
```

### 配置文件示例(部分)

```json
{
  "ConsoleLanguage": "zh_CN",
  "WebViewConfig_ConsoleCommand": "pfc", //打开服务端配置工具（依赖webview2网页）的命令
  "Global_AsyncTeleportWaitTime": 1000, //全局传送等待时间
  "WorldLimit": {
    //世界边界模块的配置
    "ModuleEnabled": true, //开启
    "Overworld": [
      {
        "X1": -1000,
        "Z1": -1000,
        "X2": 1000,
        "Z2": 1000
      }
    ],
    "Nether": [],
    "The End": [],
    "TeleportToSpawnpointIfError": true,
    "EnableVisualize": true //边界可视化粒子
  }
}
```
