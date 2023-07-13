---
title: 使用网页配置插件
icon: laptop-code
order: 6
---

### 网页配置

本插件有个网页配置工具，可以打开网页上传`config.json`文件，编辑后下载配置文件，将其放入对应位置，然后控制台输入`pflp reload`命令重载插件功能。
地址：https://www.mcpf.live/
配置工具源码：https://github.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes

### 在服务器配置

#### 方法一

- 此方法与逝去的 PFEssentials 比较接近，在桌面打开窗体，只不过用的是网页前端
- 控制台输命令`pfc`（可以在配置文件修改默认命令）
- 没有内置 CEF（或者说 Chromium），但是依赖微软的 EdgeWebView2，需要 Edge 相关组件（如果系统不是很新的话需要手动安装）
- https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/#download-section
- 也可以使用方法二

#### 方法二（使用请注意安全）

打开`config.json`中开启如下配置

```json
 "WebConfig": {
    "ModuleEnabled": true,
    "Hostname": "0.0.0.0",
    "Port": 8080
  }
```

- Hostname 也可改成`127.0.0.1`,然后在远程桌面通过非 IE 的浏览器打开`http://127.0.0.1:8080/`即可直接编辑
- `0.0.0.0`即暴露地址到公网，这样可以在任意地点通过`http://[你的服务器ip]:8080/`打开网页编辑，但请一定要在云主机设置安全的访问策略，否则任何人拿到地址都能修改配置文件
