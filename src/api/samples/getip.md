---
title: 扩展WebUI功能
icon: laptop-code
order: 4
---

- lljs

```js
//使用方法：
//  放在LL的plugins文件夹下面
//  PFLP在获取IP位置的时候会调用这个事件，然后可以通过自定义API获取IP位并设置到PFLP的缓存里面，下次会通过缓存获取IP位置
//  也可以通过$pf.Api.Location.GetAllCacheData();获取全部缓存数据
/// <reference path="./PixelFaramitaLuminousPolymerization/scripts/node_modules/@pf/index.d.ts" />
/// <reference path="A:/Documents/GitHub/HelperLib/src/index.d.ts" />
//服务器启动，保证$pf注册成功
mc.listen("onServerStarted", () => {
  //监听获取IP位置事件
  $pf.listen($pf.EventKey.tryGetIpLocation, (ip) => {
    //使用network模块获取IP位置
    network.httpGet("http://ip-api.com/json/" + ip, (stateCode, result) => {
      $pf.log(result);
      let data = JSON.parse(result);
      let country = data.country;
      let province = data.regionName;
      let city = data.city;
      let isp = data.isp;
      //设置IP位置缓存
      $pf.Api.Location.SetIpLocation(ip, country, province, city, "", isp, "");
    });
  });
  throw new Error("测试");
});

mc.listen("onServerStarted", () => {
  $pf.listen($pf.EventKey.webUIGetName, (xuid, name) => {
    return `<a href="https://baidu.com">${name}</a>`; //写html以显示玩家名称
  });
});
```
