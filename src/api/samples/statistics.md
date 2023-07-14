---
title: 修改统计变量
icon: laptop-code
order: 4
---

### 修改[统计数据](../../usage/statistics.md)模块的变量

- 如实现玩家花费游戏币赎罪（减少击杀次数）等

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
/// <reference path="A:/Documents/GitHub/HelperLib/src/index.d.ts" />
mc.listen("onServerStarted", () => {
  //获取
  //var info = $pf.Api.Statistics.GetPlayerStatistics("2535445286243008");
  //$pf.log(JSON.stringify(info, null, 2));
  //设定
  $pf.Api.Statistics.SetPlayerStatistics("2535445286243008", {
    OnlineTime: 233,
  }); 
});

```
