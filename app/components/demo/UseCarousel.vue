<script setup>
/* 輪播圖 使用方法 **/
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

// !資料 --------------------------------------------------------------------------------------------
const carouselConfig = {
  itemsToShow: 1, // 全螢幕通常一次只看一張
  wrapAround: true, // 無限循環
  snapAlign: "center",
};
</script>

<template>
  <div class="fullscreen-wrapper">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="i in 5" :key="i">
        <div class="slide-content">
          <h1>SLIDE {{ i }}</h1>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
// 1. 設定外層佔滿視窗
.fullscreen-wrapper {
  width: 100vw; // 視窗寬度
  height: 100vh; // 視窗高度 (建議用 100dvh 支援手機瀏覽器網址列伸縮)
  height: 100dvh;
  overflow: hidden; // 防止出現捲軸
  position: relative;
}

// 2. 內容區域樣式 (這裡放你的圖片 img)
.slide-content {
  width: 100%;
  height: 100%;
  background-color: #333; // 預設背景
  color: #fff;
  display: flex; // 讓文字置中用
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 如果是放 <img> 標籤，請加上這段
  // img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover; // 關鍵：讓圖片自動裁切填滿，不變形
  // }
}

// 3. 【關鍵】強制覆蓋 vue3-carousel 的內部高度
// 預設 carousel 是根據內容撐開高度的，我們必須強制它繼承 100%
:deep(.carousel),
:deep(.carousel__viewport),
:deep(.carousel__track),
:deep(.carousel__slide) {
  height: 100%;
  margin: 0; // 清除預設間距
  padding: 0; // 清除預設內距
}

// 4. (選填) 優化導航按鈕位置，避免貼邊太近
:deep(.carousel__prev) {
  left: 20px;
}
:deep(.carousel__next) {
  right: 20px;
}
</style>
