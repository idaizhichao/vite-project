import { defineComponent } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
import "./app.scss"

import style from "./app.module.scss"
import vueSvg from "@assets/vue.svg"
console.log(import.meta.env.VITE_APP_TITLE)
export default defineComponent({
  setup() {
    return () => (
      <div>
        <div className="grid justify-items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
            <img src={vueSvg} className="logo" alt="Vue logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank"></a>
        </div>
        <HelloWorld msg="🐮"></HelloWorld>
        <span className={style.bold}>hello world</span>
      </div>
    )
  }
})
