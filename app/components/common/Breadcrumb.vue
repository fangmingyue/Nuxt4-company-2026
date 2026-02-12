<script setup>
/* 麵包屑 組件 **/
// 方法

// 組件

// !實例化 --------------------------------------------------------------------------------------------
const route = useRoute();

// !資料 --------------------------------------------------------------------------------------------
// 定義路徑英文對應的中文名稱
const pathMap = {
  maintain: "維護頁",
  news: "新聞中心",
  product: "產品列表",
  about: "關於我們",
  contact: "聯絡我們",
  member: "會員中心",
  detail: "詳細內容",
};

// !computed ---------------------------------------------------------------------------------------
const breadcrumbList = computed(() => {
  const fullPath = route.path;
  // 去除頭尾斜線並分割
  const pathArray = fullPath.split("/").filter((item) => item);

  // 1. 先放入首頁
  const crumbs = [
    {
      name: "首頁",
      path: "/",
    },
  ];

  // 2. 迴圈處理每一層路徑
  pathArray.forEach((item, index) => {
    // 組合出當前的累積路徑 (例如: /news, /news/detail)
    const toPath = "/" + pathArray.slice(0, index + 1).join("/");

    // 決定顯示名稱優先順序：
    // 1. 如果是最後一層且該頁面有設定 meta.title (在 definePageMeta 裡)，優先使用
    // 2. 查 pathMap 字典
    // 3. 都沒有就直接顯示英文路徑
    let displayName = pathMap[item] || item;

    // 如果是最後一層 (當前頁面)，嘗試讀取 route.meta.title
    if (index === pathArray.length - 1 && route.meta.title) {
      displayName = route.meta.title;
    }

    crumbs.push({
      name: displayName,
      path: toPath,
    });
  });

  return crumbs;
});

// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template lang="pug">
.breadcrumb
  Icon(name="mdi:home" size="18" style="margin-right: 4px; color:#aaa" )
  el-breadcrumb(separator="/")
    //- v-for 渲染麵包屑
    el-breadcrumb-item(
      v-for="(item, index) in breadcrumbList"
      :key="item.path"
      :to="index < breadcrumbList.length - 1 ? { path: item.path } : undefined"
    ) {{ item.name }}
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  // 可以在這裡調整字體大小或顏色
  :deep(.el-breadcrumb__item) {
    font-size: 14px;
  }
}
</style>
