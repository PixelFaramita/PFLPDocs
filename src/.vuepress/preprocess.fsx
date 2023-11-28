open System.IO
let cd = Directory.GetCurrentDirectory()
printfn "current directory: %s" cd
let node_modules = Path.Combine(cd, "node_modules")
let processGiscus()=
    let giscus = Path.Combine(node_modules,"giscus","dist","giscus.mjs")
    let data=File.ReadAllText(giscus)
    //printfn "%s" data
    let original="""location.pathname.substring(1).replace(/\.\w+$/, "")"""
    printfn "replacing %s" original
    printfn "containing %b" (data.Contains(original))
    let result=data.Replace(original,
        """location.pathname.substring(1).replace(/\.\w+$/, "").replace(/\.\w+$/, "").replace(/^(PFLPDocs)\//g, "")""")
    File.WriteAllText(giscus,result)
    printfn "processed %s" giscus
    printfn "content: %s" result
let processPath()=
    let doTarget(args: string list)=
        File.WriteAllText(Path.Combine(cd,args|>List.toArray|>Path.Combine),"""export const prefix = "/PFLPDocs/";""")
        printfn "processed %s" (args|>List.toArray|>Path.Combine)
    doTarget ["src";".vuepress";"path.ts"]
    doTarget ["pages";"download";"path.ts"]
processGiscus()
processPath()