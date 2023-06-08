---
title: Internal
icon: laptop-code
---

> <details>
> <summary><b>CheatPunish  - 作弊反馈（LLAntiCheat用）</b></summary>
>
>## Internal::CheatPunish
>### 作弊反馈（LLAntiCheat用）
>|  形参   | 类型  |
>|  ----  | ----  |
>| PunishLevel | int |
>| PunishReason | int |
>| playerXuid | Player |
>| CheatCount | int |
>返回值类型：bool;
> - JavaScript
>```js
>/** 作弊反馈（LLAntiCheat用） 返回值类型：bool */
>const Internal_CheatPunish = ll.import("PFLP", "Internal::CheatPunish");
>let result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
>```
> - C++
>```C++
>// 作弊反馈（LLAntiCheat用） 返回值类型：bool
>auto Internal_CheatPunish = RemoteCall::importAs<bool(int const& PunishLevel,int const& PunishReason,Player& const& playerXuid,int const& CheatCount)>("PFLP", "Internal::CheatPunish");
>auto result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
>```
> - C#
>```C#
>// 作弊反馈（LLAntiCheat用） 返回值类型：bool
>var Internal_CheatPunish = RemoteCallAPI.ImportAs<bool,int,int,Player,int>("PFLP", "Internal::CheatPunish");
>var result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount);
>```
> - Visual Basic .NET
>```vb
>' 作弊反馈（LLAntiCheat用） 返回值类型：bool
>Dim Internal_CheatPunish = RemoteCallAPI.ImportAs(Of Boolean,Integer,Integer,IntPtr,Integer)("PFLP", "Internal::CheatPunish")
>Dim result = Internal_CheatPunish(PunishLevel,PunishReason,playerXuid,CheatCount)
>```
> - F#
>```F#
>// 作弊反馈（LLAntiCheat用） 返回值类型：bool
>let Internal_CheatPunish = RemoteCallAPI.ImportAs<bool,int,int,nativeint,int>("PFLP", "Internal::CheatPunish")
>(PunishLevel,PunishReason,playerXuid,CheatCount)
>	|>Internal_CheatPunish.Invoke
>	|>ignore
>```
>
> </details>
