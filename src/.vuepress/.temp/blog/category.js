export const categoryMap = {"category":{"/":{"path":"/category/","map":{"blog":{"path":"/category/blog/","keys":["v-60e77b39","v-5bc8f15c","v-5a1418bd","v-585f401e","v-56aa677f","v-54f58ee0","v-5340b641","v-518bdda2","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}}},"tag":{"/":{"path":"/tag/","map":{"blog":{"path":"/tag/blog/","keys":["v-60e77b39","v-5bc8f15c","v-5a1418bd","v-585f401e","v-56aa677f","v-54f58ee0","v-5340b641","v-518bdda2","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


