<script setup>
/*  ImageLazy 使用方法 **/
// 方法
import { ref } from "vue";
// 組件
import ImageLazy from "@/components/ImageLazy.vue";
// !實例化 --------------------------------------------------------------------------------------------

// !資料 --------------------------------------------------------------------------------------------
// 模擬多張圖片的資料
const photoList = ref([
  { id: 1, url: "https://picsum.photos/id/10/800/800", title: "森林" },
  { id: 2, url: "https://picsum.photos/id/20/800/800", title: "筆記本" },
  { id: 3, url: "https://picsum.photos/id/30/800/800", title: "咖啡" },
  // ... 假設這裡有 50 張圖片
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: i + 10,
    url: `https://picsum.photos/id/${i + 50}/800/800`,
    title: `商品 ${i + 1}`,
  })),
]);
// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template>
  <div class="gallery-container">
    <div class="grid-layout">
      <div v-for="item in photoList" :key="item.id" class="card">
        <ImageLazy :src="item.url" bg-color="#fff" aspect-ratio="1/1" radius="10px">
          <template #loading>
            <div class="loading-content">
              <div class="spinner"></div>
              <span style="color: black">讀取中...</span>
            </div>
          </template>
        </ImageLazy>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-layout {
  display: grid;
  // RWD 設定：手機 1 欄，平板 3 欄，桌機 4 欄
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.2s;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-info {
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 8px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
