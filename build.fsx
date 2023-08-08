#r "nuget: Octokit, 7.1.0"
#r "nuget: Downloader, 3.0.6"
#r "nuget: Newtonsoft.Json, 13.0.1"
open System.Diagnostics
open System.IO
open System
open Newtonsoft.Json
let baseDir = __SOURCE_DIRECTORY__
let mutable currentDir = baseDir
let isWindows=
    System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows)
let cd(v:string)=
    currentDir<-Path.Combine(currentDir,v)
    |>Path.GetFullPath
    printfn "cd %s" currentDir
let resetCd()=
    currentDir <- baseDir
    printfn "cd %s" currentDir
let run(cmd:string)=
    async{
    let p=Process.Start(
        if isWindows then
            ProcessStartInfo("cmd",Arguments="/C "+cmd,WorkingDirectory=currentDir)
        else
            ProcessStartInfo("sh",Arguments= $"-c \"{cmd}\"",WorkingDirectory=currentDir)
            )
    do! p.WaitForExitAsync()|>Async.AwaitTask
    if p.ExitCode<>0 then failwithf "run %s failed" cmd
    }
type ReleaseFile= {
        download:string;
        name:string;
        ``type``:string;
        size:int64;
        update:DateTimeOffset;
        mutable path:string list;
}
type ReleaseInfo= {
        date:DateTimeOffset;
        version:string;
        versionNumber:int;
        bds:string;
        ll:string;
        llnet:string;
        url:string;
        files:ReleaseFile list;
}
let appendRelease dist releasePath path=
    async{
    let release=Path.Combine(dist,releasePath|>List.toArray|>Path.Combine)
    printfn "release: %s" release
    let distPath=dist::path|>List.toArray|>Path.Combine
    let content=distPath|>File.ReadAllText
    printfn "data: %s" content
    if Directory.Exists(release)|>not then Directory.CreateDirectory(release)|>ignore
    let downloadFile(url:string)(filename:string)=
          async{
            let downloadOpt = new Downloader.DownloadConfiguration(
                                        ChunkCount = 1,
                                        ParallelDownload = true) 
            let downloader = new Downloader.DownloadService(downloadOpt)
            downloader.DownloadStarted.Add (fun e->
                let size=e.TotalBytesToReceive / (int64)1024 / (int64)1024
                printfn "%s : %dMB" e.FileName size
                )
            let mutable lastTime=DateTime.Now
            downloader.DownloadProgressChanged.Add (fun e->
                let size=e.ReceivedBytesSize / (int64)1024
                let sizeall=e.TotalBytesToReceive / (int64)1024
                let now=DateTime.Now
                let span=now-lastTime
                if span.TotalMilliseconds>5000.0 then
                    lastTime<-now
                    printfn "%f KB/s : %d/%dKB" (e.AverageBytesPerSecondSpeed/(float)1024) size sizeall
                )
            downloader.DownloadFileCompleted.Add (fun _->printfn "Download Success %s." filename)
            let downloaded=Path.Combine(release,filename)
            do! downloader.DownloadFileTaskAsync(url,downloaded)|>Async.AwaitTask
            printfn "%s -> %s" filename downloaded
            return downloaded
            }
    let data=
        JsonConvert.DeserializeObject<ReleaseInfo>(content)
    do!
        [
            for item in data.files do
                async{
                    let! downloaded=downloadFile item.download item.name
                    item.path<-releasePath@[downloaded]
                }
        ] 
        |>Async.Parallel
        |>Async.Ignore
    let newContent=JsonConvert.SerializeObject(data)
    File.WriteAllText(distPath,newContent)
    }
let buildDocs()=
    async{
    do! run"npm ci"
    do! run"npm run docs:build"
    File.WriteAllText(Path.Combine(baseDir,"src",".vuepress","dist",".nojekyll"),"")
    }
let buildDownloadPage()=
    async{
    cd "pages"
    cd "download"
    do! run"npm ci"
    do! run"npm run build"
    return Path.Combine(currentDir,"dist")
    }
let mergeDistWithDist(source:string)(name:string)(dist:string)=
    let rec copyDir(source:string)(target:string)= 
        if target|>Directory.Exists|>not then target|>Directory.CreateDirectory|>ignore
        for file in source|>Directory.GetFiles do
            let filename=file|>Path.GetFileName
            let targetFile=Path.Combine(target,filename)
            File.Copy(file,targetFile,true)
        for dir in source|>Directory.GetDirectories do
            let dirname=dir|>Path.GetFileName
            let targetDir=Path.Combine(target,dirname)
            copyDir dir targetDir
    copyDir source (Path.Combine(dist,name))
buildDocs()|>Async.RunSynchronously
let dist = Path.Combine(baseDir, "src",".vuepress","dist")
printfn "dist directory: %s" dist
let mergeDist=dist|>mergeDistWithDist
"download"|>(buildDownloadPage()|>Async.RunSynchronously|>mergeDist)
appendRelease dist ["release"] ["update";"latest.json"]|>Async.RunSynchronously 