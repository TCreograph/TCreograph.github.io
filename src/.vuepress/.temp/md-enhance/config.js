import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Mermaid from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/TCreograph/TCreograph/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
