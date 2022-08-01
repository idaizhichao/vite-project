import { defineComponent } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
import "./app.scss"

import style from "./app.module.scss"
export default defineComponent({
  setup() {
    return () => (
      <div>
        <div className="grid justify-items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img
              src="./src/assets/vue.svg"
              className="logo vue"
              alt="Vue logo"
            />
          </a>
        </div>
        <HelloWorld msg="🐮"></HelloWorld>
        <span className={style.bold}>hello world</span>
      </div>
    )
  }
})
