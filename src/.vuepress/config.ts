import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/PFLPDocs/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "LuminousPolymerization文档",
      description: "一个基于LiteLoader.NET的全新的基础性插件",
    },
    "/en/": {
      lang: "en-US",
      title: "LuminousPolymerization Docs",
      description: "brand new Essential Plugin Base on LiteLoader.NET",
    },
  },
  theme,
});
