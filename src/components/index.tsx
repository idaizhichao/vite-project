import { defineComponent } from "vue"
import "./index.scss"
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
