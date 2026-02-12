import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  future: {
    compatibilityVersion: 4,
  },
  // 設定簡易路徑
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    images: fileURLToPath(new URL("./app/assets/images", import.meta.url)), // 可自訂義路徑
  },
  // 引入全域 CSS 檔案
  css: ["~/assets/css/index.css"],
  // 引入外掛插件
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/index.scss" as *;`,
        },
      },
    },
  },
  // pinia路徑
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_and_default", // 強制所有網址都有前綴
    lazy: true,
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-us.json",
      },
      {
        code: "tw",
        iso: "zh-TW",
        file: "zh-tw.json",
      },
    ],
    defaultLocale: "zh-TW",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root", // 關鍵：只在根目錄轉址
    },
  },
  googleFonts: {
    // 自動下載字體 (效能關鍵)
    download: true,
    // 自動注入 CSS
    inject: true,
    families: {
      // 指定字體名稱與字重
      "Noto+Sans+TC": [400, 500, 700], // 中文思源黑體
      Inter: [400, 700], // 英文常用字體
      Oswald: [500], // 標題字體
    },

    // 設定預設 display 屬性 (避免文字閃爍)
    display: "swap",
  },
  // 1. 設定你的網站正式網址 (必填！否則 sitemap 會報錯或無法產生)
  site: {
    url: "https://www.example.com",
    name: "我的網站名稱",
  },

  // 2. Sitemap 細部設定
  sitemap: {
    // 預設會自動掃描 pages 資料夾
    // 若要排除某些頁面 (例如登入後的會員頁)
    exclude: ["/admin/**", "/member/**", "/secret-page"],
    // sources 接受一個陣列，裡面可以是 API 網址
    sources: [
      // 假設你後端有一支 API 會回傳所有文章的網址列表
      // 格式需為 JSON 陣列: ['/news/1', '/news/2', ...]
      "https://api.example.com/all-article-urls",
    ],
  },
  // 設定 robots 規則
  robots: {
    // 預設 User-Agent
    UserAgent: "*",

    // 允許的路徑
    Allow: "/",

    // 禁止的路徑
    Disallow: ["/admin", "/api", "/_nuxt"],

    // Sitemap 網址
    Sitemap: "https://www.example.com/sitemap.xml",

    // 如果是開發環境，就禁止所有爬蟲， Google不會收錄
    disallowAll: process.env.NODE_ENV !== "production",
  },
  runtimeConfig: {
    // 1. 私密變數 (Private)
    // 這些變數只能在伺服器端 (SSR / API Routes) 讀取
    // 這裡的值是「預設值」，如果 .env 有 NUXT_API_SECRET 會自動覆蓋這裡
    apiSecret: process.env.API_SECRET,

    // 2. 公開變數 (Public)
    public: {
      apiBase: process.env.API_BASE_URL || "/api", // 支援預設值
    },
  },
  // 2. 設定代理 (只在 npm run dev 有效)
  nitro: {
    devProxy: {
      "/api": {
        // target: "你的真實後端 API 網址",
        target: "https://sandbox.web.ad-design.tw/",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  // 全站預設head
  app: {
    head: {
      title: "Nuxt4-base-2026",
      // 2. Title 模板
      // %s 會被單頁的 title 替換。例如首頁 title 是 "首頁"，顯示出來會是 "首頁 - 我的 Nuxt 網站"
      titleTemplate: "%s | Nuxt4-base-2026",

      // 3. 全站共用的 meta
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "這是 Nuxt4-base-2026 模板。",
        },
      ],

      // 4. 引入外部資源 (字體、CSS)
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
