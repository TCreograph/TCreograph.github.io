export const categoryMap = {"category":{"/":{"path":"/category/","map":{"blog":{"path":"/category/blog/","keys":["v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]},"diary":{"path":"/category/diary/","keys":["v-2a34530e","v-6039d65e"]}}}},"tag":{"/":{"path":"/tag/","map":{"blog":{"path":"/tag/blog/","keys":["v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]},"diary":{"path":"/tag/diary/","keys":["v-2a34530e","v-6039d65e"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


