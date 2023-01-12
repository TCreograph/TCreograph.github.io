export const data = JSON.parse("{\"key\":\"v-e52c881c\",\"path\":\"/article/\",\"title\":\"文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章\",\"blog\":{\"type\":\"type\",\"key\":\"article\"},\"layout\":\"BlogType\",\"description\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://tcreograph.com/article/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"TCreograph's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
