import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    // "/",
    {
        text:"主页",
        icon:"home",
        link:"/"
    },
    {
        text:"日记",
        icon:"creative",
        link:"#"
    },
    {
        text:"游戏攻略",
        icon:"read",
        children:[
            {
                text:"原神",
                icon:"context",
                link:"#"
            },
            {
                text:"MC",
                icon:"context",
                link:"#"
            },
            {
                text:"Phigros",
                icon:"context",
                link:"#"
            },
        ]
    },
]);
