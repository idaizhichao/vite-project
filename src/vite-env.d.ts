// / <reference types="vite/client" />

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
