//https://gist.github.com/LGM-AdrianHum/260bc9ab3c4cd49bc8617a2abe84ca74
#r "junction.dll"
open System.IO
let cd = __SOURCE_DIRECTORY__
let sdk = Path.Combine(cd, "sdk")
let remotecall = Path.Combine(cd, "remotecall")
let pflp=Path.GetFullPath("..\..\..\PixelFaramitaLuminousPolymerization\src\PixelFaramitaLuminousPolymerization\Modules\BuildIn\RemoteCall\docs")
printfn "cd: %s" cd
printfn "sdk: %s" sdk
printfn "RemoteCall: %s" remotecall
printfn "pflp: %s" pflp
if pflp|>Directory.Exists|>not then
    failwithf "pflp: not exists %s" pflp
if sdk|>Directory.Exists then 
    Directory.Delete(sdk,true)
CreateMaps.JunctionPoint.Create(sdk,Path.Combine(pflp,"SDK"),true)
if remotecall|>Directory.Exists then
    Directory.Delete(remotecall,true)
CreateMaps.JunctionPoint.Create(remotecall,Path.Combine(pflp,"RemoteCall"),true)
