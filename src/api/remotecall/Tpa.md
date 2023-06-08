---
title: Tpa
---


---
 <details>
 <summary><b>GetTemp  - 获取指定玩家的Tpa缓存（JSON字符串）</b></summary>

## Tpa::GetTemp
### 获取指定玩家的Tpa缓存（JSON字符串）
|  形参   | 类型  |
|  ----  | ----  |
| playerXuid | string |
返回值类型：string;
 - JavaScript
```js
/** 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string */
const Tpa_GetTemp = ll.import("PFLP", "Tpa::GetTemp");
let result = Tpa_GetTemp(playerXuid);
```
 - C++
```cpp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
auto Tpa_GetTemp = RemoteCall::importAs<std::string(std::string const& playerXuid)>("PFLP", "Tpa::GetTemp");
auto result = Tpa_GetTemp(playerXuid);
```
 - C#
```csharp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
var Tpa_GetTemp = RemoteCallAPI.ImportAs<string,string>("PFLP", "Tpa::GetTemp");
var result = Tpa_GetTemp(playerXuid);
```
 - Visual Basic .NET
```vb
' 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
Dim Tpa_GetTemp = RemoteCallAPI.ImportAs(Of String,String)("PFLP", "Tpa::GetTemp")
Dim result = Tpa_GetTemp(playerXuid)
```
 - F#
```fsharp
// 获取指定玩家的Tpa缓存（JSON字符串） 返回值类型：string
let Tpa_GetTemp = RemoteCallAPI.ImportAs<string,string>("PFLP", "Tpa::GetTemp")
playerXuid
	|>Tpa_GetTemp.Invoke
	|>ignore
```

 </details>

