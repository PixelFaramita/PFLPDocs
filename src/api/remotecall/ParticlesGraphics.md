---
title: ParticlesGraphics
icon: laptop-code
---

> <details>
> <summary><b>DrawBlock  - 给指定方块描框</b></summary>
>
>## ParticlesGraphics::DrawBlock
>### 给指定方块描框
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| x | int |
>| y | int |
>| z | int |
>| r | float |
>| g | float |
>| b | float |
>| thickness | float |
>| time | float |
>| alpha | float |
>无返回值;
> - JavaScript
>```js
>/** 给指定方块描框 */
>const ParticlesGraphics_DrawBlock = ll.import("PFLP", "ParticlesGraphics::DrawBlock");
>ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
>```
> - C++
>```C++
>// 给指定方块描框
>auto ParticlesGraphics_DrawBlock = RemoteCall::importAs<void(std::string const& playerXuid,int const& x,int const& y,int const& z,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBlock");
>ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
>```
> - C#
>```C#
>// 给指定方块描框
>var ParticlesGraphics_DrawBlock = RemoteCallAPI.Import_As<string,int,int,int,float,float,float,float,float,float>("PFLP", "ParticlesGraphics::DrawBlock");
>ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha);
>```
> - Visual Basic .NET
>```vb
>' 给指定方块描框
>Dim ParticlesGraphics_DrawBlock = RemoteCallAPI.Import_As(Of String,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single)("PFLP", "ParticlesGraphics::DrawBlock")
>ParticlesGraphics_DrawBlock(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
>```
> - F#
>```F#
>// 给指定方块描框
>let ParticlesGraphics_DrawBlock = RemoteCallAPI.Import_As<string,int,int,int,float,float,float,float,float,float>("PFLP", "ParticlesGraphics::DrawBlock")
>(playerXuid,x,y,z,r,g,b,thickness,time,alpha)
>	|>ParticlesGraphics_DrawBlock.Invoke
>```
>
> </details>
> <details>
> <summary><b>DrawBorder  - 给指定区域描框</b></summary>
>
>## ParticlesGraphics::DrawBorder
>### 给指定区域描框
>|  形参   | 类型  |
>|  ----  | ----  |
>| playerXuid | string |
>| x1 | int |
>| y1 | int |
>| z1 | int |
>| x2 | int |
>| y2 | int |
>| z2 | int |
>| r | float |
>| g | float |
>| b | float |
>| thickness | float |
>| time | float |
>| alpha | float |
>无返回值;
> - JavaScript
>```js
>/** 给指定区域描框 */
>const ParticlesGraphics_DrawBorder = ll.import("PFLP", "ParticlesGraphics::DrawBorder");
>ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
>```
> - C++
>```C++
>// 给指定区域描框
>auto ParticlesGraphics_DrawBorder = RemoteCall::importAs<void(std::string const& playerXuid,int const& x1,int const& y1,int const& z1,int const& x2,int const& y2,int const& z2,float const& r,float const& g,float const& b,float const& thickness,float const& time,float const& alpha)>("PFLP", "ParticlesGraphics::DrawBorder");
>ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
>```
> - C#
>```C#
>// 给指定区域描框
>var ParticlesGraphics_DrawBorder = RemoteCallAPI.Import_As<string,int,int,int,int,int,int,float,float,float,float,float,float>("PFLP", "ParticlesGraphics::DrawBorder");
>ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha);
>```
> - Visual Basic .NET
>```vb
>' 给指定区域描框
>Dim ParticlesGraphics_DrawBorder = RemoteCallAPI.Import_As(Of String,Integer,Integer,Integer,Integer,Integer,Integer,Single,Single,Single,Single,Single,Single)("PFLP", "ParticlesGraphics::DrawBorder")
>ParticlesGraphics_DrawBorder(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
>```
> - F#
>```F#
>// 给指定区域描框
>let ParticlesGraphics_DrawBorder = RemoteCallAPI.Import_As<string,int,int,int,int,int,int,float,float,float,float,float,float>("PFLP", "ParticlesGraphics::DrawBorder")
>(playerXuid,x1,y1,z1,x2,y2,z2,r,g,b,thickness,time,alpha)
>	|>ParticlesGraphics_DrawBorder.Invoke
>```
>
> </details>
