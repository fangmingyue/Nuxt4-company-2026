<script setup>
/* i18n 和多語系動態跳轉 使用方法 **/
/**
 * 檔案路徑	自動產生的路由名稱 (name)
 * pages/demo/index.vue	demo
 * pages/demo/[id].vue	demo-id
 * pages/product/[cat]/[id].vue	product-cat-id
 */
// 方法

// 組件

// !實例化 --------------------------------------------------------------------------------------------
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
// !資料 --------------------------------------------------------------------------------------------
const id = ref(1);
// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------
const changeLang = (lang) => {
  setLocale(lang);
};
// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template lang="pug">
.i18n
  el-button(type="primary" @click.prevent="changeLang('en')") 切換英文
  el-button(type="primary" @click.prevent="changeLang('tw')") 切換繁體
  div(class="my-4") {{$t('hello')}}
  div(class="mb-2") 動態頁面跳轉
  NuxtLink(:to="localePath({ name: 'demo-id', params: { id: id } })")
    el-button(type="info") 動態跳轉
</template>

<style lang="scss" scoped>
//-
</style>
