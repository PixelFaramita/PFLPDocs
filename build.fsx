#r "nuget: Octokit, 7.1.0"
#r "nuget: Downloader, 3.0.6"
#r "nuget: Newtonsoft.Json, 13.0.1"
open System.Diagnostics
//open Octokit
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
let appendRelease dist content=
    async{
    if Directory.Exists(dist)|>not then Directory.CreateDirectory(dist)|>ignore
    //let github = new GitHubClient(new ProductHeaderValue("octokit"))
    //let! latestRelease=
    //    async{
    //        let! releases = github.Repository.Release.GetAll("LazuliKao","PixelFaramitaLuminousPolymerizationRes")|>Async.AwaitTask
    //        return releases
    //                    |>Seq.sortBy(fun release->release.PublishedAt.Value)
    //                    |>Seq.last
    //    }
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
            do! downloader.DownloadFileTaskAsync(url, Path.Combine(dist,filename))|>Async.AwaitTask
            printfn "%s -> %s" filename (Path.Combine(dist,filename))
            }
    let downloadUrsAndFileName=
        JsonConvert.DeserializeObject<ReleaseInfo>(content).files
    do! 
        [
            for item in downloadUrsAndFileName do
                downloadFile item.download item.name
        ]
        |>Async.Parallel
        |>Async.Ignore
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
buildDocs()|>Async.RunSynchronously
let dist = Path.Combine(baseDir, "src",".vuepress","dist")
let mergeDist(source:string)(name:string)=
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
printfn "dist directory: %s" dist
"download"|>(buildDownloadPage()|>Async.RunSynchronously|>mergeDist)
appendRelease (Path.Combine(dist,"release")) (File.ReadAllText(Path.Combine(dist,"update","latest.json")))|>Async.RunSynchronously 