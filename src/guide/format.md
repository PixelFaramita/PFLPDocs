---
title: 变量与格式化选项
icon: laptop-code
order: 7
---

## 内置变量

- 内置变量可在诸多模块使用，如侧边栏、菜单等

- ### 全局变量

  - 在任意位置使用

    | 名称              | 别名                                                                                            | 功能                                                                                             |                                                                                示例                                                                                 |
    | ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    | %time%            | %date%%now%                                                                                     | 当前时间                                                                                         |                                                                     %time:yyyy-MM-dd-HH-mm-ss%                                                                      |
    | %tps%             | %server_tps%<br>%servertps%                                                                     | 服务器 TPS                                                                                       |
    | %mspt%            | %server_mspt%<br>%servermspt%                                                                   | 服务器 MSPT                                                                                      |
    | %playercount%     | %server_online%<br>%serveronline%                                                               | 在线玩家数量                                                                                     |
    | %version%         | %server_version%<br>%serverversion%                                                             | 服务器版本                                                                                       |
    | %protocol%        | %protocol_version%<br>%server_protocol_version%<br>%protocolversion%<br>%serverprotocolversion% | 服务器协议版本                                                                                   |
    | %entitycount%     | %total_entities%<br>%server_total_entities%<br>%totalentities%<br>%servertotalentities%         | 服务器实体数量                                                                                   | 掉落物数量`%entitycount:item%`<br>非掉落物数量`%entitycount:!item%`<br>玩家和 🐶 的数量`%entitycount:player+wolf%`<br>目前就`+`分割<br>更复杂的判断建议使用脚本接入 |
    | %ram_bds_used%    | %server_ram_bds_used%<br>%rambdsused%<br>%serverrambdsused%                                     | BDS 内存使用量                                                                                   |
    | %ram_used%        | %server_ram_used%<br>%ramused%<br>%serverramused%                                               | 主机内存使用量                                                                                   |
    | %ram_total%       | %server_ram_total%<br>%ramtotal%<br>%serverramtotal%                                            | 服务器总内存                                                                                     |
    | %ram_free%        | %server_ram_free%<br>%ramfree%<br>%serverramfree%                                               | 服务器空闲内存                                                                                   |
    | %ram_load%        | %server_ram_load%<br>%ramload%<br>%serverramload%                                               | 服务器内存占用率                                                                                 |                                                                返回一个 0 到 100 的整数<br>无百分号                                                                 |
    | %papi%            | %placeholder%<br>%placeholderapi%                                                               | [#PAPI 变量](#使用-beplaceholderapi-的变量)<br>建议直接使用%xxx%<br>除非同名时需要指定 papi 变量 |                                                                             %papi:xxx%                                                                              |
    | %server_received% | %server_receive%<br>%serverreceived%<br>%serverreceive%                                         | 服务器收到的总字节数                                                                             |
    | %server_sent%     | %server_send%<br>%serversent%<br>%serversend%                                                   | 服务器发送的总字节数                                                                             |

- ### 玩家变量

  - 在玩家相关的上下文中使用

    | 名称             | 别名                                                 | 功能                                                         |                                                                                                                                        示例                                                                                                                                         |
    | ---------------- | ---------------------------------------------------- | ------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    | %name%           |                                                      | 玩家名字                                                     |
    | %xuid%           |
    | %money%          |                                                      | 玩家 Xuid                                                    |
    | %scoreboard%     | %sb%                                                 | 计分板                                                       |                                                                                                                                 %scoreboard:money%                                                                                                                                  |
    | %world%          | %dimension%                                          | 维度                                                         |
    | %ping%           |                                                      | 最近一次延迟                                                 |
    | %avgping%        |                                                      | (最近 5 次的)平均延迟                                        |
    | %lowestping%     |                                                      | 最低延迟                                                     |
    | %health%         |                                                      | 玩家当前血量                                                 |
    | %hunger%         |                                                      | 玩家当前饥饿值                                               |
    | %level%          |                                                      | 玩家当前等级                                                 |
    | %saturation%     |                                                      | 玩家当前饱食度                                               |
    | %experience%     | %xp%                                                 | 玩家当前经验                                                 |
    | %pos%            | %position%                                           | 玩家当前坐标                                                 |
    | %os%             | %devicetype%                                         | 玩家当前设备类型<br>翻译可在[语言文件](../guide/i18n.md)更改 |
    | %devicename%     | %device%                                             | 玩家当前设备名称                                             |
    | %serverip%       | %serveraddress%                                      | 玩家进入服务器使用的 IP                                      |
    | %ip%             | %address%                                            | 玩家当前 IP                                                  |
    | %location%       |                                                      | （通过 IP 获取的）完整地理位置                               |
    | %country%        |                                                      | 国家                                                         |
    | %province%       |                                                      | 省份                                                         |
    | %city%           |                                                      | 城市                                                         |
    | %isp%            |                                                      | 网络运营商                                                   |
    | %total_received% | %total_receive%<br>%totalreceived%<br>%totalreceive% | （本次连接）玩家收到的总字节数                               |
    | %total_sent%     | %total_send%<br>%totalsent%<br>%totalsend%           | （本次连接）玩家发送的总字节数                               |
    | %received%       | %receive%                                            | 每秒收到的字节数                                             |
    | %sent%           | %send%                                               | 每秒发送的字节数                                             |
    | %land%           |                                                      | 玩家当前领地                                                 | 类型%land:type%<br>所有者%land:owner%<br> 共享玩家%land:sharedplayers%<br>领地名称%land:displayname% <br>消息留言%land:message% <br>欢迎语%land:welcome%<br>%land:x1%<br>%land:y1%<br>%land:z1%<br>%land:x2%<br>%land:y2%<br>%land:z2%<br>长%land:dx%<br>宽%land:dy%<br>高%land:dz% |
    | %biome%          |                                                      | 生物群系                                                     |
    | %biome_name%     |                                                      | 生物群系名称（目前仅中文）                                   |
    | %brightness%     |                                                      | 当前位置的亮度                                               |
    | %temperature%    |                                                      | 当前位置的温度                                               |

- ### 其他模块变量(需要开启指定模块)

  - #### [Statistics | 统计变量](../usage/statistics.md)
    | 名称          | 别名         | 功能     |                示例                 |
    | ------------- | ------------ | -------- | :---------------------------------: |
    | %online_time% | %onlinetime% | 在线时长 |
    | %destroy%     |              | 破坏方块 |
    | %place%       |              | 放置方块 |
    | %death%       |              | 死亡次数 |
    | %respawn%     |              | 重生次数 |
    | %join%        |              | 进服次数 |
    | %kill%        |              | 击杀次数 | %kill:player%玩家<br>%kill:sheep%羊 |

## 使用 BEPlaceholderAPI 的变量

支持[BEPlaceholderAPI](https://github.com/LiteLDev/BEPlaceholderAPI)的所有变量，安装 BEPlaceholderAPI 后即可直接使用

如因变量重名需要指定使用 BEPlaceholderAPI 的变量，可使用`%papi:xxx%`的格式

## 在其他插件使用

其他插件仅需引入`BEPlaceholderAPI`,pflp 的所有变量均可在 BEPlaceholderAPI 使用

本插件也通过接口导出的获取变量的 API，可供其他插件使用，参考[接口 - 注册变量](../api/format.md)

## 格式化选项

格式化选项继承与`.NET`的字符串格式化，百分号对于前后大括号，`:`、`,`等控制符参考文档

示例：

- 时间格式：`%time:yyyy-MM-dd-HH-mm-ss%`
- 数字格式：`%mspt:F1%`表示保留小数点后一位

参考[String.Format 方法](https://learn.microsoft.com/zh-cn/dotnet/api/system.string.format)

## 增加自定义变量

参考[接口 - 注册变量](../api/format.md)
