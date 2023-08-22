---
title: 全新API
index: true
icon: poop
---

## 介绍

- 支持 C# F# VB.NET
  - 引用程序集即可直接使用
- 支持 LiteLoaderJS
- js 的完整补全和提示文件
  - `/// <reference path="PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />`
- 高性能，异步接口
- 完整的文档

## JS 使用

1. 在`plugins`目录新建一个 js 文件
2. 在 js 文件起始位置放入以下内容
   > ```js
   > /// <reference path="PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
   > ```
3. 在 js 任意位置使用`$pf`对象

   - 注意需要考虑插件加载优先级，本插件可能在 js 脚本加载之后才加载，所以需要在`onServerStart`事件或任意事件中使用
     ```js
     mc.listen("onServerStarted", () => {
       $pf.next.onLandCreate.subscribe((info) => {
         info.DisplayName = "测试领地";
         info.TeleportPos = {
           X: 0,
           Y: 233,
           Z: 0,
         };
       });
       $pf.next.onLandCalcPrice.subscribe((player, info) => {
         $pf.log("land calc: " + info);
         $pf.log("land calc info json: " + JSON.stringify(info));
         info.SetPrice(info.OriginalPrice / 2, "打折描述");
       });
     });
     ```
