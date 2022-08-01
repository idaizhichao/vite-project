import { defineConfig, normalizePath } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import vutJSX from "@vitejs/plugin-vue-jsx"
import viteEslint from "vite-plugin-eslint" // 使 ESLint 的错误够及时显示到命令行窗口中。
import svgLoader from "vite-svg-loader" // 使得 svg 可以作为 vue 组件。
import viteImagemin from "vite-plugin-imagemin" // 图片压缩
import autoprefixer from "autoprefixer"

const getPath = (src: string) => {
  return normalizePath(path.resolve(src))
}
const variablePath = getPath("./src/style/variable.scss")
const variable2Path = getPath("./src/style/variable2.scss")

// const isProduction = process.env.NODE_ENV === "production"

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
  build: {
    target: "es2020",
    assetsInlineLimit: 8 * 1024
  },
  // 预构建相关配置
  optimizeDeps: {
    entries: ["./src/components/HelloWorld.vue"]
  },
  resolve: {
    // 别名配置
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "src/assets")
    }
  },
  plugins: [
    vue(),
    vutJSX(),
    viteEslint(),
    svgLoader({ defaultImport: "url" }),
    viteImagemin({
      // 无损压缩配置，图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差。
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
})
