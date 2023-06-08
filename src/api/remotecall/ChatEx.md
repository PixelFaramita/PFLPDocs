---
title: ChatEx
icon: laptop-code
---

> <details>
> <summary><b>SetNickName  - 设置玩家昵称</b></summary>
>
>## ChatEx::SetNickName
>### 设置玩家昵称
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| nickName | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家昵称 */
>const ChatEx_SetNickName = ll.import("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - C++
>```C++
>// 设置玩家昵称
>auto ChatEx_SetNickName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& nickName)>("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - C#
>```C#
>// 设置玩家昵称
>var ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName");
>ChatEx_SetNickName(playerXuid,nickName);
>```
> - Visual Basic .NET
>```vb
>' 设置玩家昵称
>Dim ChatEx_SetNickName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetNickName")
>ChatEx_SetNickName(playerXuid,nickName)
>```
> - F#
>```F#
>// 设置玩家昵称
>let ChatEx_SetNickName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetNickName")
>(playerXuid,nickName)
>	|>ChatEx_SetNickName.Invoke
>```
>
> </details>
> <details>
> <summary><b>SetFakeName  - 设置玩家聊天时的名字</b></summary>
>
>## ChatEx::SetFakeName
>### 设置玩家聊天时的名字
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| fakeName | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天时的名字 */
>const ChatEx_SetFakeName = ll.import("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - C++
>```C++
>// 设置玩家聊天时的名字
>auto ChatEx_SetFakeName = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& fakeName)>("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - C#
>```C#
>// 设置玩家聊天时的名字
>var ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName");
>ChatEx_SetFakeName(playerXuid,fakeName);
>```
> - Visual Basic .NET
>```vb
>' 设置玩家聊天时的名字
>Dim ChatEx_SetFakeName = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetFakeName")
>ChatEx_SetFakeName(playerXuid,fakeName)
>```
> - F#
>```F#
>// 设置玩家聊天时的名字
>let ChatEx_SetFakeName = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetFakeName")
>(playerXuid,fakeName)
>	|>ChatEx_SetFakeName.Invoke
>```
>
> </details>
> <details>
> <summary><b>SetEnd  - 设置玩家聊天消息后缀</b></summary>
>
>## ChatEx::SetEnd
>### 设置玩家聊天消息后缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| endStr | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天消息后缀 */
>const ChatEx_SetEnd = ll.import("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - C++
>```C++
>// 设置玩家聊天消息后缀
>auto ChatEx_SetEnd = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& endStr)>("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - C#
>```C#
>// 设置玩家聊天消息后缀
>var ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd");
>ChatEx_SetEnd(playerXuid,endStr);
>```
> - Visual Basic .NET
>```vb
>' 设置玩家聊天消息后缀
>Dim ChatEx_SetEnd = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetEnd")
>ChatEx_SetEnd(playerXuid,endStr)
>```
> - F#
>```F#
>// 设置玩家聊天消息后缀
>let ChatEx_SetEnd = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetEnd")
>(playerXuid,endStr)
>	|>ChatEx_SetEnd.Invoke
>```
>
> </details>
> <details>
> <summary><b>SetStart  - 设置玩家聊天消息前缀</b></summary>
>
>## ChatEx::SetStart
>### 设置玩家聊天消息前缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| startStr | string |
>无返回值;
> - JavaScript
>```js
>/** 设置玩家聊天消息前缀 */
>const ChatEx_SetStart = ll.import("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - C++
>```C++
>// 设置玩家聊天消息前缀
>auto ChatEx_SetStart = RemoteCall::importAs<void(std::string const& playerXuid,std::string const& startStr)>("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - C#
>```C#
>// 设置玩家聊天消息前缀
>var ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart");
>ChatEx_SetStart(playerXuid,startStr);
>```
> - Visual Basic .NET
>```vb
>' 设置玩家聊天消息前缀
>Dim ChatEx_SetStart = RemoteCallAPI.Import_As(Of String,String)("PFLP", "ChatEx::SetStart")
>ChatEx_SetStart(playerXuid,startStr)
>```
> - F#
>```F#
>// 设置玩家聊天消息前缀
>let ChatEx_SetStart = RemoteCallAPI.Import_As<string,string>("PFLP", "ChatEx::SetStart")
>(playerXuid,startStr)
>	|>ChatEx_SetStart.Invoke
>```
>
> </details>
> <details>
> <summary><b>GetNickName  - 获取玩家昵称</b></summary>
>
>## ChatEx::GetNickName
>### 获取玩家昵称
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家昵称 返回值类型：string */
>const ChatEx_GetNickName = ll.import("PFLP", "ChatEx::GetNickName");
>let result = ChatEx_GetNickName(playerXuid);
>```
> - C++
>```C++
>// 获取玩家昵称 返回值类型：string
>auto ChatEx_GetNickName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetNickName");
>auto result = ChatEx_GetNickName(playerXuid);
>```
> - C#
>```C#
>// 获取玩家昵称 返回值类型：string
>var ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName");
>var result = ChatEx_GetNickName(playerXuid);
>```
> - Visual Basic .NET
>```vb
>' 获取玩家昵称 返回值类型：string
>Dim ChatEx_GetNickName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetNickName")
>Dim result = ChatEx_GetNickName(playerXuid)
>```
> - F#
>```F#
>// 获取玩家昵称 返回值类型：string
>let ChatEx_GetNickName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetNickName")
>playerXuid
>	|>ChatEx_GetNickName.Invoke
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>GetFakeName  - 获取玩家聊天时的名字</b></summary>
>
>## ChatEx::GetFakeName
>### 获取玩家聊天时的名字
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天时的名字 返回值类型：string */
>const ChatEx_GetFakeName = ll.import("PFLP", "ChatEx::GetFakeName");
>let result = ChatEx_GetFakeName(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天时的名字 返回值类型：string
>auto ChatEx_GetFakeName = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetFakeName");
>auto result = ChatEx_GetFakeName(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天时的名字 返回值类型：string
>var ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName");
>var result = ChatEx_GetFakeName(playerXuid);
>```
> - Visual Basic .NET
>```vb
>' 获取玩家聊天时的名字 返回值类型：string
>Dim ChatEx_GetFakeName = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetFakeName")
>Dim result = ChatEx_GetFakeName(playerXuid)
>```
> - F#
>```F#
>// 获取玩家聊天时的名字 返回值类型：string
>let ChatEx_GetFakeName = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetFakeName")
>playerXuid
>	|>ChatEx_GetFakeName.Invoke
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>GetEnd  - 获取玩家聊天消息后缀</b></summary>
>
>## ChatEx::GetEnd
>### 获取玩家聊天消息后缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天消息后缀 返回值类型：string */
>const ChatEx_GetEnd = ll.import("PFLP", "ChatEx::GetEnd");
>let result = ChatEx_GetEnd(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天消息后缀 返回值类型：string
>auto ChatEx_GetEnd = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetEnd");
>auto result = ChatEx_GetEnd(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天消息后缀 返回值类型：string
>var ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd");
>var result = ChatEx_GetEnd(playerXuid);
>```
> - Visual Basic .NET
>```vb
>' 获取玩家聊天消息后缀 返回值类型：string
>Dim ChatEx_GetEnd = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetEnd")
>Dim result = ChatEx_GetEnd(playerXuid)
>```
> - F#
>```F#
>// 获取玩家聊天消息后缀 返回值类型：string
>let ChatEx_GetEnd = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetEnd")
>playerXuid
>	|>ChatEx_GetEnd.Invoke
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>GetStart  - 获取玩家聊天消息前缀</b></summary>
>
>## ChatEx::GetStart
>### 获取玩家聊天消息前缀
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>返回值类型：string;
> - JavaScript
>```js
>/** 获取玩家聊天消息前缀 返回值类型：string */
>const ChatEx_GetStart = ll.import("PFLP", "ChatEx::GetStart");
>let result = ChatEx_GetStart(playerXuid);
>```
> - C++
>```C++
>// 获取玩家聊天消息前缀 返回值类型：string
>auto ChatEx_GetStart = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "ChatEx::GetStart");
>auto result = ChatEx_GetStart(playerXuid);
>```
> - C#
>```C#
>// 获取玩家聊天消息前缀 返回值类型：string
>var ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart");
>var result = ChatEx_GetStart(playerXuid);
>```
> - Visual Basic .NET
>```vb
>' 获取玩家聊天消息前缀 返回值类型：string
>Dim ChatEx_GetStart = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "ChatEx::GetStart")
>Dim result = ChatEx_GetStart(playerXuid)
>```
> - F#
>```F#
>// 获取玩家聊天消息前缀 返回值类型：string
>let ChatEx_GetStart = RemoteCallAPI.ImportAs<string,string>("PFLP", "ChatEx::GetStart")
>playerXuid
>	|>ChatEx_GetStart.Invoke
>	|>ignore
>```
>
> </details>
