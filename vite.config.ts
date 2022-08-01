import { defineConfig, normalizePath } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import vutJSX from "@vitejs/plugin-vue-jsx"
import viteEslint from "vite-plugin-eslint" // 使 ESLint 的错误够及时显示到命令行窗口中。
import autoprefixer from "autoprefixer"
const getPath = (src: string) => {
  return normalizePath(path.resolve(src))
}

const variablePath = getPath("./src/style/variable.scss")
const variable2Path = getPath("./src/style/variable2.scss")

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"]
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}"; @import "${variable2Path}";`
      }
    }
  },
  resolve: {
    // 别名配置
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "src/assets")
    }
  },
  plugins: [vue(), vutJSX(), viteEslint()]
})
