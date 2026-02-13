<script setup>
/* demo 頁面 **/
// 方法

// 組件
// import UseGsap from "@/components/demo/UseGsap.vue";
import UseFetch from "@/components/demo/UseFetch.vue";
import UseIcon from "@/components/demo/UseIcon.vue";
import UseCarousel from "@/components/demo/UseCarousel.vue";
import UseYoutube from "@/components/demo/UseYoutube.vue";
import UseImageLazy from "@/components/demo/UseImageLazy.vue";
import UseI18n from "@/components/demo/UseI18n.vue";
import UseAnimate from "@/components/demo/UseAnimate.vue";
// !實例化 --------------------------------------------------------------------------------------------
const localePath = useLocalePath();
// !資料 --------------------------------------------------------------------------------------------
// seo
useSeoMeta({
  title: () => "Demo",
  ogTitle: () => "Demo",
  description: () => "Nuxt4 base 2026",
  ogDescription: () => "Nuxt4 base 2026",
  ogImage: () => "",
  twitterCard: "",
});

// meta
definePageMeta({
  layout: "blank",
  path: "/demo",
  name: "demo",
});

const tabData = [
  // {
  //   id: 1,
  //   label: "useGsap",
  //   name: "first",
  //   components: UseGsap,
  // },
  {
    id: 2,
    label: "useFetch",
    name: "second",
    components: UseFetch,
  },
  {
    id: 3,
    label: "useIcon",
    name: "third",
    components: UseIcon,
  },
  {
    id: 4,
    label: "useCarousel",
    name: "fourth",
    components: UseCarousel,
  },
  {
    id: 5,
    label: "useYoutube",
    name: "fifth",
    components: UseYoutube,
  },
  {
    id: 6,
    label: "useImageLazy",
    name: "sixth",
    components: UseImageLazy,
  },
  {
    id: 7,
    label: "useI18n",
    name: "seventh",
    components: UseI18n,
  },
  {
    id: 8,
    label: "useAnimate",
    name: "eighth",
    components: UseAnimate,
  },
];

const activeName = useState("activeName", () => "second");

const titleMap = {
  first: "Gsap動畫",
  second: "串接Api",
  third: "Icon使用",
  fourth: "輪播圖使用",
  fifth: "Youtube彈出",
  sixth: "圖片懶加載",
  seventh: "多國語系使用",
  eighth: "滾動與動畫",
};

// !computed ---------------------------------------------------------------------------------------
const titleMapComputed = computed(() => titleMap[activeName.value] ?? "None");
// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template>
  <div id="Demo">
    <div class="">
      <div class="">封裝組件說明 - {{ titleMapComputed }}</div>
      <NuxtLink :to="localePath('index')">
        <el-button type="primary">退回首頁</el-button>
      </NuxtLink>
    </div>

    <el-tabs v-model="activeName">
      <el-tab-pane v-for="item in tabData" :key="item.id" :label="item.label" :name="item.name">
        <component :is="item.components" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
#DEMO {
  padding: 20px;
}
</style>
