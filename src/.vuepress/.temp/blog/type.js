export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-2a34530e","v-6039d65e","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88","v-184f4da6","v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2a34530e","v-6039d65e","v-a5a47890","v-a90e29ce","v-ac77db0c","v-afe18c4a","v-b34b3d88"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

