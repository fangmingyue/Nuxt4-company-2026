<script setup>
// 方法

// 組件
import GoTop from "~/components/GoTop.vue";
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

<template>
  <div id="Home">
    <NuxtLink :to="localePath('demo')">
      <el-button type="primary">to demo</el-button>
    </NuxtLink>
    <div class="test">test</div>
    <div class="test2"></div>
  </div>
</template>
<style lang="scss" scoped>
.test {
  @include fontClamp($color: red, $min: 10, $max: 200);
  @extend %useBoxTrimBoth;
}
.test2 {
  @include shape(100, 20, red, 5);
}
</style>
