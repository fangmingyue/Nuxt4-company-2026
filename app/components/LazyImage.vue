<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  errorImg: { type: String, default: "/img/error-fallback.png" },
  aspectRatio: { type: String, default: "" },
  radius: { type: String, default: "0px" },
  bgColor: { type: String, default: "#000" }, // 黑底
});

const containerRef = ref(null);
const imgRef = ref(null);
const currentSrc = ref("");
const isLoaded = ref(false);
const isError = ref(false);

let observer = null;

const styleProps = computed(() => ({
  aspectRatio: props.aspectRatio,
  borderRadius: props.radius,
  backgroundColor: props.bgColor,
}));

// !事件函數 -----------------------------------------------------------------------------------------
const initObserver = () => {
  if (!("IntersectionObserver" in window)) {
    currentSrc.value = props.src;
    return;
  }
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry?.isIntersecting) {
      currentSrc.value = props.src;
      if (containerRef.value && observer) {
        observer.unobserve(containerRef.value);
        observer.disconnect();
      }
    }
  });
  if (containerRef.value) observer.observe(containerRef.value);
};

// !功能函數 -----------------------------------------------------------------------------------------
const handleLoad = () => {
  // 圖片載好後，改變狀態 -> 觸發 CSS Opacity 變化
  isLoaded.value = true;
};

const handleError = () => {
  isError.value = true;
  // 發生錯誤時，我們保持 isLoaded 為 false，這樣 Loading 層可以被 Error 層蓋住或替換
  // 這裡策略是：錯誤時隱藏 Loading，顯示 Error
  isLoaded.value = true;
  currentSrc.value = props.errorImg;
};

onMounted(() => initObserver());
onUnmounted(() => observer?.disconnect());

watch(
  () => props.src,
  (newVal) => {
    isLoaded.value = false; // 重置狀態，Loading 層會立刻變回不透明 (顯示)
    isError.value = false;
    if (currentSrc.value) currentSrc.value = newVal;
  },
);
</script>

<template>
  <div ref="containerRef" class="lazy-image-container" :style="styleProps">
    <div class="loading-layer" :class="{ 'is-hidden': isLoaded || isError }">
      <slot name="loading">
        <div class="default-spinner"></div>
      </slot>
    </div>

    <img
      v-if="currentSrc"
      ref="imgRef"
      :src="currentSrc"
      :alt="alt"
      class="lazy-img"
      :class="{ visible: isLoaded }"
      @load="handleLoad"
      @error="handleError"
    />

    <div v-if="isError" class="error-overlay">
      <slot name="error"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-image-container {
  position: relative;
  width: 100%;
  min-height: 50px;
  overflow: hidden;
  /* 確保圓角對內部元素生效 */
  z-index: 0;
}

// Loading 層樣式
.loading-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // 預設狀態：完全顯示
  opacity: 1;
  z-index: 10; // 層級最高
  background-color: inherit; // 繼承黑底

  display: flex;
  justify-content: center;
  align-items: center;

  // 當狀態改變時，執行淡出動畫
  transition: opacity 0.5s ease;

  // 當變成隱藏狀態時
  &.is-hidden {
    opacity: 0;
    pointer-events: none; // 隱藏後不阻擋滑鼠點擊圖片
  }
}

// Image 層樣式
.lazy-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  // 圖片預設透明，載入後變實體
  opacity: 0;
  transition: opacity 0.5s ease;
  position: relative;
  z-index: 1;

  &.visible {
    opacity: 1;
  }
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #333; // 錯誤時的底色
}

.default-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
