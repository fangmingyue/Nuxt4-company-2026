<script setup>
// 方法

// 組件
import GoTop from "~/components/common/GoTop.vue";
import { useCounterStore } from "@/stores/useCounterStore";
// !實例化 --------------------------------------------------------------------------------------------
const counterStore = useCounterStore();
const localePath = useLocalePath();
// !資料 --------------------------------------------------------------------------------------------
// seo
useSeoMeta({
  title: () => "首頁",
  ogTitle: () => "首頁",
  description: () => "Nuxt4 base 2026",
  ogDescription: () => "Nuxt4 base 2026",
  ogImage: () => "",
  twitterCard: "",
});
// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template lang="pug">
  #Home.container
    div(class="text-trim-end text-clamp-h1 font-inter") 首頁
    div(class="mt-4") 456
    NuxtLink(:to="localePath('demo')" class="mt-4")
      el-button(type="primary" class="text-4xl") to demo
    //- div(v-animate v-animate:float-y="{ time: '0.1s', dist: '20px', delay: '.5s'}") 123
</template>

<style lang="scss" scoped>
//-
</style>
