# 注册玩家个人设置

```js
/// <reference path="PXBANALuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
mc.listen("onServerStarted", () => {
  const settings = $pf.next.PlayerSettings.register("test", "测试模块");
  const instance = settings.string("test", "默认", "描述", "水印");
  /** 获取当前的值 @type boolean */
  const value = instance.getByXuid("...");
});
```
