export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5340b641","v-518bdda2","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88","v-184f4da6","v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5340b641","v-518bdda2","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

