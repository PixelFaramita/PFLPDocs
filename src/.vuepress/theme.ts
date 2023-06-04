import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  sidebar: "structure",
  author: {
    name: "LazuliKao",
    url: "https://www.mcpf.live",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "LazuliKao/PFLPDocs",
  docsDir: "src",
  editLink: true,
  titleIcon: undefined,
  locales: {
    "/en/": {
      navbar: enNavbar,
      sidebar: "structure",
      footer:
        'Powered by <a href="https://theme-hope.vuejs.press/" target="_blank"> VuePress Theme Hope </a> ',
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/": {
      navbar: zhNavbar,
      footer:
        '主题使用了 <a href="https://theme-hope.vuejs.press/" target="_blank"> VuePress Theme Hope </a> ',
      sidebar: "structure",
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
    comment: {
      provider: "Giscus",
      repo: "LazuliKao/PFLPDocs",
      repoId: "R_kgDOJrGxPQ",
      category: "docs",
      categoryId: "DIC_kwDOJrGxPc4CW8zd",
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
