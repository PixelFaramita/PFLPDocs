import { SidebarObjectOptions, navbar, sidebar } from "vuepress-theme-hope";
const items = [
  "/",
  "/installation/",
  "/guide/",
  "/usage/",
  "/api/",
  "/faq/",
  "/changelog/",
  "/about/",
];
export const zhNavbar = navbar(items);
let itemsMap = {} as SidebarObjectOptions;
items.forEach((element) => {
  itemsMap[element] = "structure";
});
export const zhSidebar = sidebar(itemsMap);
