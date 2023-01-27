import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  plugins: [
    searchPlugin({
      //...

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],

  base: "/",

  locales: {
 
    "/": {
      lang: "zh-CN",
      title: "TCreograph's Blog",
      description: "TCreograph的生活记录",
    },
  },

  theme,

  shouldPrefetch: false,
});
