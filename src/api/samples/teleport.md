---
title: 可取消延迟传送接口
icon: laptop-code
order: 6
---
```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
/// <reference path="A:/Documents/GitHub/HelperLib/src/index.d.ts" />
mc.regPlayerCmd("test", "测试", (player, args) => {
  const taskId = $pf.Api.Teleport.StartNew(player.xuid, 0, 200, 0, 0);
  player.sendText(`传送任务ID: ${taskId}`);
});
mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.teleportCanceled, (xuid, id) => {
    mc.getPlayer(xuid)?.sendText(`传送任务${id} 已取消`);
  });
});

```