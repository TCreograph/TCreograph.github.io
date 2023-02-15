export const categoryMap = {"category":{"/":{"path":"/category/","map":{"blog":{"path":"/category/blog/","keys":["v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}}},"tag":{"/":{"path":"/tag/","map":{"blog":{"path":"/tag/blog/","keys":["v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


