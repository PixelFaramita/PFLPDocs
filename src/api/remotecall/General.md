---
title: General
icon: laptop-code
---

> <details>
> <summary><b>SetConfig  - 设置全局配置文件（要求JSON字符串）</b></summary>
>
>## General::SetConfig
>### 设置全局配置文件（要求JSON字符串）
>|  形参   | 类型  |
>|  ----  | ----  |
>| jsonStr | string |
>返回值类型：bool;
> - JavaScript
>```js
>/** 设置全局配置文件（要求JSON字符串） 返回值类型：bool */
>const General_SetConfig = ll.import("PFLP", "General::SetConfig");
>let result = General_SetConfig(jsonStr);
>```
> - C++
>```C++
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>auto General_SetConfig = RemoteCall::importAs<bool(std::string const& jsonStr)>("PFLP", "General::SetConfig");
>auto result = General_SetConfig(jsonStr);
>```
> - C#
>```C#
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>var General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig");
>var result = General_SetConfig(jsonStr);
>```
> - Visual Basic .NET
>```vb
>' 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>Dim General_SetConfig = RemoteCallAPI.ImportAs(Of Boolean,String)("PFLP", "General::SetConfig")
>Dim result = General_SetConfig(jsonStr)
>```
> - F#
>```F#
>// 设置全局配置文件（要求JSON字符串） 返回值类型：bool
>let General_SetConfig = RemoteCallAPI.ImportAs<bool,string>("PFLP", "General::SetConfig")
>jsonStr
>	|>General_SetConfig.Invoke
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>GetConfig  - 获取全局配置文件（JSON字符串）</b></summary>
>
>## General::GetConfig
>### 获取全局配置文件（JSON字符串）
>无参数;
>返回值类型：string;
> - JavaScript
>```js
>/** 获取全局配置文件（JSON字符串） 返回值类型：string */
>const General_GetConfig = ll.import("PFLP", "General::GetConfig");
>let result = General_GetConfig();
>```
> - C++
>```C++
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>auto General_GetConfig = RemoteCall::importAs<std::string()>("PFLP", "General::GetConfig");
>auto result = General_GetConfig();
>```
> - C#
>```C#
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>var General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig");
>var result = General_GetConfig();
>```
> - Visual Basic .NET
>```vb
>' 获取全局配置文件（JSON字符串） 返回值类型：string
>Dim General_GetConfig = RemoteCallAPI.ImportAs(Of String)("PFLP", "General::GetConfig")
>Dim result = General_GetConfig()
>```
> - F#
>```F#
>// 获取全局配置文件（JSON字符串） 返回值类型：string
>let General_GetConfig = RemoteCallAPI.ImportAs<string>("PFLP", "General::GetConfig")
>General_GetConfig()
>	|>ignore
>```
>
> </details>
> <details>
> <summary><b>Reload  - 重新加载所有功能的配置文件</b></summary>
>
>## General::Reload
>### 重新加载所有功能的配置文件
>无参数;
>无返回值;
> - JavaScript
>```js
>/** 重新加载所有功能的配置文件 */
>const General_Reload = ll.import("PFLP", "General::Reload");
>General_Reload();
>```
> - C++
>```C++
>// 重新加载所有功能的配置文件
>auto General_Reload = RemoteCall::importAs<void()>("PFLP", "General::Reload");
>General_Reload();
>```
> - C#
>```C#
>// 重新加载所有功能的配置文件
>var General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload");
>General_Reload();
>```
> - Visual Basic .NET
>```vb
>' 重新加载所有功能的配置文件
>Dim General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
>General_Reload()
>```
> - F#
>```F#
>// 重新加载所有功能的配置文件
>let General_Reload = RemoteCallAPI.Import_As("PFLP", "General::Reload")
>General_Reload()
>```
>
> </details>
