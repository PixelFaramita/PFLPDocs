#r "nuget: Octokit, 7.1.0"
#r "nuget: Downloader, 3.0.6"
open Octokit
open System.IO
open System
let cd = Directory.GetCurrentDirectory()
printfn "current directory: %s" cd
let dist = Path.Combine(cd, "src",".vuepress","dist","release")
printfn "dist directory: %s" dist
if Directory.Exists(dist)|>not then Directory.CreateDirectory(dist)|>ignore
let github = new GitHubClient(new ProductHeaderValue("octokit"))
let latestRelease=
    async{
        let! releases = github.Repository.Release.GetAll("LazuliKao","PixelFaramitaLuminousPolymerizationRes")|>Async.AwaitTask
        return releases.[0]
    }|>Async.RunSynchronously
let downloadFile(url:string)(filename:string)=
        let downloadOpt = new Downloader.DownloadConfiguration(
                                    ChunkCount = 8,
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
        downloader.DownloadFileCompleted.Add (fun e->
            printfn "Download Success" 
            )
        downloader.DownloadFileTaskAsync(url, Path.Combine(dist,filename))|>Async.AwaitTask|>Async.RunSynchronously
let downloadUrsAndFileName=
    latestRelease.Assets
    |>Seq.map(fun asset->asset.BrowserDownloadUrl,asset.Name)
for (url,filename) in downloadUrsAndFileName do
    downloadFile url filename
