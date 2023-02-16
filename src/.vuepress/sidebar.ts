import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/blog/":[
        {   
            text: "Blog",
            icon: "context",
            children: [
                "notes-class5",
                "notes-class6",
                "notes-class7",
                "notes-class8"
            ]
        }
    ],
});
