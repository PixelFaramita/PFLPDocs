---
title: 命令接口
icon: laptop-code
order: 2
---

### 使用 LLJS 重写和替换自带命令

```js
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
/// <reference path="A:/Documents/GitHub/HelperLib/src/index.d.ts" />
mc.listen("onServerStarted", () => {
  //添加监听，在服务器启动后，保证$pf变量正确获取
  $pf.Api.Command.RenameCommand("land", ""); //隐藏PFLP默认的land命令
  const cmd = mc.newCommand("land", "测试"); //创建新的命令
  cmd.overload();
  cmd.setCallback((cmd, origin, output, result) => {
    output.addMessage("§a执行land");
    //执行真land命令（执行PFLP内置的land命令）
    $pf.Api.Command.ExecuteInternalCommand(
      origin.player.xuid,
      "/land create 3d"
    );
    log(origin.player.name + "执行了land命令");
  });
  cmd.setup(); //注册命令
});
```
