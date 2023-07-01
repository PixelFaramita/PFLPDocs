---
title: 扩展WebUI功能
icon: laptop-code
order: 4
---

- lljs

```js
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetName, (xuid, name) => {
    return `<a href="https://baidu.com">${name}</a>`;
    //写html以显示玩家名称
  });
});
```
