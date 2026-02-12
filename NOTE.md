# Nuxt4-base-2026

## 架構說明

- public : 靜態資源(不會被編譯)
- app : 主要編輯區
- api : 放置api設定
- assets : 資源資料(會被編譯)
- components : 組件資料
- composable : 組合式文件資料
- router : 路由資料
- stores : pinia資料
- utils : 自定義功能函式
- views : 主要頁面資料
- App : 主入口(vue)
- .env : 環境設定
- nuxt.config.js : 系統架構的（編譯、模組、伺服器環境）
- app.config.js : 應用邏輯的（UI 主題、公開變數、執行時配置）
- error.vue : 通用錯誤頁面
- middleware : 導航守衛

## 使用方法

1. 不會變動的資源或文件都放在public資料夾內,不要放在assets裡
2. components
   |- common (全站共用的組件)
   |- layout (header,footer,sidebar...偏向框架)
   |- pages (放pages裡組件)
   |- demo (放dmoe相關的頁面)
   |- about (放about相關的頁面)
   |- ... (其餘雷同)
3. pages裡檔案以文件夾命名,進入的頁面以index.vue命名,其餘動態頁面[xxx]命名
4. components裡.vue檔案文件命名使用大駝峰寫法
5. 資料夾命名都使用小寫寫法
6. .js檔案使用小駝峰命名寫法
