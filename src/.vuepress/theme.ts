import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, zhSidebar } from "./nav/index";
export default hopeTheme({
  hostname: "https://docs.mcpf.live",
  sidebar: "structure",
  author: {
    name: "LazuliKao",
    url: "https://www.mcpf.live",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "LazuliKao/PFLPDocs",
  docsRepo: "LazuliKao/PFLPDocs",
  docsBranch: "💥",
  docsDir: "src",
  lastUpdated: true,
  // pure: true,
  // repoDisplay: true,
  // repoLabel: "GitHub",
  themeColor: true,
  sidebarSorter: ["readme", "order", "filename"],
  fullscreen: true,
  editLink: true,
  titleIcon: undefined,
  locales: {
    "/i18n/en/": {
      sidebar: "structure",
      navbar: enNavbar,
      copyright: "Copyright © 2023 Pixel Faramita",
      footer:
        'Powered by <a href="https://theme-hope.vuejs.press/" target="_blank"> VuePress Theme Hope </a> ',
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/": {
      sidebar: zhSidebar,
      navbar: zhNavbar,
      copyright: "Copyright © 2023 Pixel Faramita",
      footer:
        '主题使用了 <a href="https://theme-hope.vuejs.press/" target="_blank"> VuePress Theme Hope </a> 我墙裂推荐你也用一手真的非常好用不论写博客还是写文档都非常方便',
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //     "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },
  plugins: {
    copyCode: {
      showInMobile: true,
    },
    pwa: true,
    comment: {
      provider: "Giscus",
      repo: "LazuliKao/PFLPDocs",
      repoId: "R_kgDOJrGxPQ",
      category: "docs",
      categoryId: "DIC_kwDOJrGxPc4CW8zd",
      mapping: "pathname",
    },
    git: {
      contributors: true,
      updatedTime: true,
      createdTime: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
