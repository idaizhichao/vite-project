import { defineComponent } from "vue"
import "./index.scss"
// Vite 中内置了解析 JSON 文件功能。底层使用@rollup/pluginutils 的 dataToEsm 方法将 JSON 对象转换为一个包含各种具名导出的 ES 模块。
import { devDependencies } from "../../package.json"
console.log(devDependencies, "devdeppendencies")
export default defineComponent({
  setup() {
    return () => (
      <div>
        <button className="bg-red-400">
          vite version: {devDependencies.vite}
        </button>
        <p className="header">This is Header</p>
      </div>
    )
  }
})
