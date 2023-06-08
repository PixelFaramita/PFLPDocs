---
title: Money
icon: laptop-code
---

> <details>
> <summary><b>Get  - 获取玩家(指定玩家名)金钱</b></summary>
>
>## Money::Get
>### 获取玩家(指定玩家名)金钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：long;
> - JavaScript
>```js
>/** 获取玩家(指定玩家名)金钱 返回值类型：long */
>const Money_Get = ll.import("PFLP", "Money::Get");
>let result = Money_Get(playerXuid);
>```
> - C++
>```C++
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>auto Money_Get = RemoteCall::importAs<long long(std::string const& playerXuid)>("PFLP", "Money::Get");
>auto result = Money_Get(playerXuid);
>```
> - C#
>```C#
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>var Money_Get = RemoteCallAPI.ImportAs<long,string>("PFLP", "Money::Get");
>var result = Money_Get(playerXuid);
>```
> - Visual Basic .NET
>```vb
>' 获取玩家(指定玩家名)金钱 返回值类型：long
>Dim Money_Get = RemoteCallAPI.ImportAs(Of Long,String)("PFLP", "Money::Get")
>Dim result = Money_Get(playerXuid)
>```
> - F#
>```F#
>// 获取玩家(指定玩家名)金钱 返回值类型：long
>let Money_Get = RemoteCallAPI.ImportAs<int64,string>("PFLP", "Money::Get")
>playerXuid
>	|>Money_Get.Invoke
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>Add  - 给玩家(指定玩家名)加钱</b></summary>
>
>## Money::Add
>### 给玩家(指定玩家名)加钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| count | long |
>| info | string |
>无返回值;
> - JavaScript
>```js
>/** 给玩家(指定玩家名)加钱 */
>const Money_Add = ll.import("PFLP", "Money::Add");
>Money_Add(playerXuid,count,info);
>```
> - C++
>```C++
>// 给玩家(指定玩家名)加钱
>auto Money_Add = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Add");
>Money_Add(playerXuid,count,info);
>```
> - C#
>```C#
>// 给玩家(指定玩家名)加钱
>var Money_Add = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Add");
>Money_Add(playerXuid,count,info);
>```
> - Visual Basic .NET
>```vb
>' 给玩家(指定玩家名)加钱
>Dim Money_Add = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Add")
>Money_Add(playerXuid,count,info)
>```
> - F#
>```F#
>// 给玩家(指定玩家名)加钱
>let Money_Add = RemoteCallAPI.Import_As<string,int64,string>("PFLP", "Money::Add")
>(playerXuid,count,info)
>	|>Money_Add.Invoke
>```
>
> </details>
> <details>
> <summary><b>Remove  - 给玩家(指定玩家名)减钱</b></summary>
>
>## Money::Remove
>### 给玩家(指定玩家名)减钱
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| count | long |
>| info | string |
>无返回值;
> - JavaScript
>```js
>/** 给玩家(指定玩家名)减钱 */
>const Money_Remove = ll.import("PFLP", "Money::Remove");
>Money_Remove(playerXuid,count,info);
>```
> - C++
>```C++
>// 给玩家(指定玩家名)减钱
>auto Money_Remove = RemoteCall::importAs<void(std::string const& playerXuid,long long const& count,std::string const& info)>("PFLP", "Money::Remove");
>Money_Remove(playerXuid,count,info);
>```
> - C#
>```C#
>// 给玩家(指定玩家名)减钱
>var Money_Remove = RemoteCallAPI.Import_As<string,long,string>("PFLP", "Money::Remove");
>Money_Remove(playerXuid,count,info);
>```
> - Visual Basic .NET
>```vb
>' 给玩家(指定玩家名)减钱
>Dim Money_Remove = RemoteCallAPI.Import_As(Of String,Long,String)("PFLP", "Money::Remove")
>Money_Remove(playerXuid,count,info)
>```
> - F#
>```F#
>// 给玩家(指定玩家名)减钱
>let Money_Remove = RemoteCallAPI.Import_As<string,int64,string>("PFLP", "Money::Remove")
>(playerXuid,count,info)
>	|>Money_Remove.Invoke
>```
>
> </details>
