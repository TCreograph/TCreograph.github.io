import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
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
