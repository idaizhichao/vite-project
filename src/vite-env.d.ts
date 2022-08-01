// / <reference types="vite/client" />
// / <reference types="vite-svg-loader" />
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 处理模块找不到问题 scss
declare module "*.scss" {
  const content: any
  export default content
}
//
// interface ImportMeateEnv {
//   readonly VITE_APP_TITLE: string
//   readonly VITE_IMG_BASE_URL: string
// }
// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }
