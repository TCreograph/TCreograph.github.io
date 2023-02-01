export const searchIndex = [
  {
    "title": "Intro Page",
    "headers": [],
    "path": "/intro.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Blog Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Slide page",
    "headers": [],
    "path": "/slides.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "05-课堂笔记",
    "headers": [
      {
        "level": 2,
        "title": "第五课",
        "slug": "第五课",
        "link": "#第五课",
        "children": []
      }
    ],
    "path": "/blog/notes-class5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "06-课堂笔记",
    "headers": [
      {
        "level": 2,
        "title": "第六课",
        "slug": "第六课",
        "link": "#第六课",
        "children": []
      }
    ],
    "path": "/blog/notes-class6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Blog",
    "headers": [],
    "path": "/blog/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分类",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "标签",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文章",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "收藏",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "时间轴",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "blog 分类",
    "headers": [],
    "path": "/category/blog/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "blog 标签",
    "headers": [],
    "path": "/tag/blog/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}