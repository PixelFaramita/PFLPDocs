---
title: 注册变量
icon: laptop-code
order: 4
---

### 示例（以彩色延迟为例）

> 效果：配置文件各个地方可以直接使用变量%colorping%

> 这里提供两种方法

- 普通 LLJS 脚本（放在 plugins 目录）

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
/// <reference path="A:/Documents/GitHub/HelperLib/src/index.d.ts" />
mc.listen("onServerStarted", () => {
  //添加监听，在服务器启动后，保证$pf变量正确获取
  $pf.Format.Add("colorping", (xuid, xuidLang, fmt, extra) => {
    const val = $pf.Api.Format.GetVariableInt(xuid, "ping");
    if (val <= 0) {
      return "?";
    } else if (val <= 50) {
      return "§a" + val + "§r";
    } else if (val <= 80) {
      return "§2" + val + "§r";
    } else if (val <= 110) {
      return "§g" + val + "§r";
    } else {
      return "§c" + val + "§r";
    }
  });
});
```

- 内置脚本（放在 PFLP 的 scripts 文件夹下面）

```js
//使用方法：
//  放在PFLP的scripts文件夹下面
//  然后在配置文件各个地方可以直接使用变量%colorping%
import { Format, Api } from "@pf";
Format.Add("colorping", (xuid, xuidLang, fmt, extra) => {
  const val = Api.Format.GetVariableInt(xuid, "ping");
  if (val <= 0) {
    return "?";
  } else if (val <= 50) {
    return "§a" + val + "§r";
  } else if (val <= 80) {
    return "§2" + val + "§r";
  } else if (val <= 110) {
    return "§g" + val + "§r";
  } else {
    return "§c" + val + "§r";
  }
});
```
