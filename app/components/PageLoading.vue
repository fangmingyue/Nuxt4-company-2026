<script setup>
/* Page Loading 組件**/
// 方法

// 組件
import { useLoadingStore } from "~/stores/useLoadingStore";

// !實例化 --------------------------------------------------------------------------------------------
const loadingStore = useLoadingStore();

// !資料 --------------------------------------------------------------------------------------------

// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template>
  <div class="PageLoading">
    <Transition name="fade">
      <div v-if="loadingStore.isLoading" class="loading-overlay">
        <div class="loading-content">
          <p>資料載入中...</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 確保在最上層 */
  color: white;
}

/* Transition 動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
