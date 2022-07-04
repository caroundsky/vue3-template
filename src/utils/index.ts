// 获取静态图片
export const getAssetsImages = (fileName: string) =>
  new URL(`/src/assets/${fileName}`, import.meta.url).href
