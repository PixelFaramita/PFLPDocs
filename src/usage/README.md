---
title: 用方
icon: laptop-code
order: 3
---

### 各模块使用方法

- 此栏列举了各模块的使用方法，以及摆放各模块的图骗。
- 请点击左侧的菜单切换到具体模块的使用。

### 功能简介

[Tpa | 请求传送](tpa.md)

[Warp | 全局传送点](warp.md)

[Home ｜个人传送点 (by @voyage27)](home.md)

[TPR | 随机传送](tpr.md)

[WebUI | 网页扩展](webui.md)

[MapService | 在线地图](map.md)

[PictureLoader | 图片加载器](picture.md)

[Land | 领地](land.md)

[Sidebar | 侧边栏](sidebar.md)

[Popup | 弹出信息](popup.md)

[PlayerList | 玩家列表（记分板）信息](playerlist.md)

[JoinLocation | 进服 IP 归属地显示](location.md)

[DynamicMotd | 动态 Motd](motd.md)

[BelowName | 玩家名下方信息显示](belowname.md)

[Helper | 辅助功能](helper.md)

ForceDownloadWithoutCovering：强制下载材质包但不覆盖
FakeSeed：假种子
LevelName：存档名（显示在暂停界面）
EditRedstoneTPS：修改红石速率（支持三个维度分开修改）

[HeightEdit | 编辑世界高度](heightedit.md)

暂时只支持修改主世界高度，范围-512 到 512(最低点设置过低可能会导致世界生成的比较奇怪)
如果存档是虚空或者超平坦请千万不要开启次功能

[FriendlyDisconnect | 修改掉线提示](disconnect.md)

如玩家不在白名单、未通过 XboxLive 验证、版本不合规等踢出提示

[WebsocketAPI | 远程控制 API](ws.md)

主要支持 PFBridge 的消息联动
也支持较早的基于 BDXWebSocket 协议的对接插件https://github.com/WangYneos/BDXWebSocket

[Menu | 自定义菜单](menu.md)

示例文件请在群里找群友要，我这不提供

[GiftCode | 礼品码(by @voyage27)](giftcode.md)

[Death | 死亡反馈/返回](death.md)

[ChatTranslation | 聊天实时翻译](translation.md)

玩家语言分离设置，可翻译自己发出的消息等
命令/translation

[ChatEnhancement ｜聊天增强](chat.md)

修改聊天格式
不与其他监听聊天消息的插件冲突

[WorldLimit | 世界边界](worldlimit.md)

可自定义多个边界
[Notice | 进服公告](notice.md)

[AttackEcho | 攻击反馈](attackecho.md)

目前只做了弹射物击中的反馈

[MoneyExtensions | 金钱 UI 管理](money.md)
[MoneyApi| 金钱接口](money.md)

[BehaviorLog | 行为日志](log.md)
(SQLIte 数据库，只记录必要数据，无任何多余文字，保证记录文件最小)

[Backup | 自动备份](backup.md)

[TransferServerOnClose | 关服传送](closetransfer.md)

[KickToolbox | 踢部分 toolbox 玩家](kicktoolbox.md)
老功能，不保证 100%有效，无法过部分改版 toolbox，如需反作弊推荐使用 LLAntiCheat

[Shop | 商店](shop.md)

远古功能，兼容 3 年前的 PFShop，shopdata.json 放到插件配置目录会自动转换

[FakeMotd | 伪造 Motd 信息](fakemotd.md)

支持动态最大玩家数量
伪造 motd 的在线玩家数量
motd 的存档名称
motd 的端口
可以配合这个功能来修复 frp 内网穿透后服务器 motd 显示在局域网的 bug
伪造 motd 的存档名称（不过通常没啥用

[PvPManager | 个人 PvP 状态管理](pvp.md)

[frpc | 内网穿透 IP 获取](frpc.md)

### 尚未完成但在计划中的

[ServerTransfer | 跨服传送还没做](transfer.md)

可设置在服务器关闭后传送玩家到其他服务器

[LLACHelper | 接管 LLAC 的作弊惩罚暂时没做](llachelper.md)

[Hunter | 赏金猎人还没做](hunter.md)

[Blacklist | 黑名单 @voyage27 做了一半](blacklist.md)
