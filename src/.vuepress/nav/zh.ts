import { SidebarArrayOptions, navbar, sidebar } from "vuepress-theme-hope";
const items = {
  "/": "主页",
  "/installation/": "安装教程",
  "/guide/": "入门指南",
  "/usage/": "使用方法",
  "/api/": "接口文档",
  "/faq/": "常见问题",
  "/changelog/": "更新日志",
  "/about/": "关于",
} as Record<string, string>;
export const zhNavbar = navbar(Object.keys(items));
const data = [] as SidebarArrayOptions;
for (const key in items) {
  const value = items[key];
  data.push({
    link: key,
    text: value,
    children: "structure",
  });
}
export const zhSidebar = sidebar(data);
