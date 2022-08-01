module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // 有些全局变量是业务代码引入的第三方库所生命，这里需要在 globals 配置中申明全局变量。每个全局变量的配置有三种情况
  // 1. "writable" 或者 true, 表示变量可重写。
  // 2. "readonly" 或者 false， 表示变量不可重写。
  // 3. "off", 表示警用该全局变量。
  globals: {
    $: false
  },
  // extends 继承配置。 相当于继承另一份 ESLint的配置，可以配置成一个字符串，也可以是字符串数组。 有三种情况
  // 1. 从 ESLint 本身继承；
  // 2. 从类似 eslint-config-xx 的 npm 包继承；
  // 从 ESLint 插件继承。
  extends: [
    "google", // 1
    "prettier", // 2 eslint-config-prettier 用来覆盖 ESLint 本身的规则。
    "plugin:vue/vue3-essential" // 3
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module", //默认为 script 如果使用 ES Module 则应该设置为 module
    ecmaFeatures: {
      // ecmaFeatures: 为一个对象，表示想使用的额外语言特性，如开启 jsx。
      jsx: true
    }
  },
  // 添加插件后只是拓展了  ESLint 本身的规则集，但 ESLint 默认并没有开启这些规则校验。如需要开启或者调整这些规则需要在 rules 中配置。
  plugins: [
    "vue",
    "@typescript-eslint",
    "prettier" // eslint-plugin-prettier 让Prettier 来接管 eslint --fix 修复代码的能力。
  ],
  // 具体代码规则。 rules 中 key 一般为 规则名， value 为具体的配置内容，数组的第一项为规则的，第二项为规则的配置。
  // off 或者 0: 表示关闭规则
  // warn 或 1: 表示开启规则，不过违背规则后只会抛出 warning， 而不会导致程序退出。
  // error 或 2: 表示开启规则，不过违背规则后会抛出 error，程序会退出。
  // ESLint 官方文档 https://cn.eslint.org/docs/rules/
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "double"], // 字符串 双引号
    semi: ["error", "never"] //末尾不加分号
  }
}
