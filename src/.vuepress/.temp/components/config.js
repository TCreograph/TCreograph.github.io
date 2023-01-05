import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_2410206_s76eeqysx0t.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
