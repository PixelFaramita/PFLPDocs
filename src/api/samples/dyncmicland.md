---
title: 创建领地接口
order: 2
---

```js
/// <reference path="PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  $pf.event.onLandCalcPrice.subscribe((player, info) => {
    $pf.log("land calc: " + info);
    $pf.log("land calc info json: " + JSON.stringify(info));
    info.OriginalPrice; //原价
    info.SetPrice(1000, "打折描述");
  });
});
```

![效果](../../../images/effect.png)
