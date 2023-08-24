---
title: 扩展WebUI功能
icon: laptop-code
order: 4
---

### 修改玩家的显示昵称（主要在聊天界面）

- 可以实现自定义称号显示等

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetNameFromXuid, (xuid, name) => {
    return `<a href="https://baidu.com">${name}</a>`;
    //写html以显示玩家名称
  });
});
```

### 在地图上动态隐藏玩家

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetHiddenPlayerTo, (playerXuid) => {
    return ["114514", "1919810"]; //返回对于`playerXuid`隐藏的玩家列表
  });
});
```

### 在地图上显示额外地标

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetLandmark, (playerXuid) => {
    //传入的playerXuid是当前登录的玩家的xuid
    //如果没有登录，playerXuid为null
    //返回的数组是显示给该玩家的地标列表
    return [
      {
        name: "地标1", //名称
        x: 100,
        y: 2,
        z: 100,
        d: 0, //维度
      },
      {
        name: "地标2", //名称
        x: -100,
        y: 2,
        z: -100,
        d: 0, //维度
      },
    ];
  });
});
```
