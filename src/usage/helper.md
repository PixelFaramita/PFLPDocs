---
title: Helper | 辅助功能
order: 150
---

## 配置文件

```json
"Helper": {
    //总开关
    "ModuleEnabled": true,
    //强制下载材质包（且允许玩家使用材质包）
    "ForceDownloadWithoutCovering": true,
    //开启假种子功能，（客户端区块生成的选项可选不关闭，具体自行测试）
    "EnableFakeSeed": true,
    //种子
    "FakeSeed": 114514,
    //开启修改存档显示名称的功能
    "EnableLevelName": true,
    //存档名称（通常显示在暂停界面）
    "LevelName": "Bedrock Level",
    //开启修改红石速度的功能（单位：tick/s）
    "EditRedstoneTPS": true,
    //主世界红石速度（TPS是单位）
    "OverworldRedstoneTPS": 10,
    //地狱
    "NetherRedstoneTPS": 10,
    //末地
    "TheEndRedstoneTPS": 10
}
```

## 提示

- 开启修改客户端种子后无需手动关闭`client-chunk-generation`选项，不过关闭后玩家可视的新区块更多
