---
title: 扩展WebUI功能
icon: laptop-code
order: 4
---

### 修改玩家的显示昵称（主要在聊天界面）

- 可以实现自定义称号显示等

```js
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetName, (xuid, name) => {
    return `<a href="https://baidu.com">${name}</a>`;
    //写html以显示玩家名称
  });
});
```
