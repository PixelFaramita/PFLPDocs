import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/PFLPDocs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Luminous Polymerization 文档",
      description: "一个基于LiteLoader.NET的全新的基础性插件",
    },
    "/en/": {
      lang: "en-US",
      title: "Luminous Polymerization Docs",
      description: "brand new Essential Plugin Base on LiteLoader.NET",
    },
  },
  theme,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      autoSuggestions: true,
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string[],
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string[],
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
