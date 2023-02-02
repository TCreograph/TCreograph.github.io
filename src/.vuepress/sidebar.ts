import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/blog/":[
        {   
            text: "blog",
            icon: "context",
            children: [
                "notes-class5",
                "notes-class6",
                "notes-class7",
            ]
        }
    ],
});
