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
                text:"Genshin Impact (原神)",
                icon:"context",
                link:"#"
            },
            {
                text:"Minecraft (我的世界)",
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
    {
        text:"编程",
        icon:"share",
        children:[
            {
                text:"05-课堂笔记",
                icon:"context",
                link:"/blog/notes-class5"
            },
            {
                text:"06-课堂笔记",
                icon:"context",
                link:"/blog/notes-class6"
            },
            {
                text:"07-课堂笔记",
                icon:"context",
                link:"/blog/notes-class7"
            },
            {
                text:"08-课堂笔记",
                icon:"context",
                link:"/blog/notes-class8"
            },
        ]
    },
]);
