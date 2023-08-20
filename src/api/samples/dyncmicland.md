---
title: 动态领地价格
order: 2
---

```js
/// <reference path="PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  $pf.event.onLandCalcPrice.subscribe((info) => {
    $pf.log("land calc: " + info);
    $pf.log("land calc info json: " + JSON.stringify(info));
    const originalPrice = info.OriginalPrice; //原价
    info.SetPrice(1000);
  });
});
```

![效果](../../../images/effect.png)
