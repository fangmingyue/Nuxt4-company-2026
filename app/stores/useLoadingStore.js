import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore(
  "useLoadingStore",
  () => {
    const isLoading = ref(false);
    const loadingCount = ref(0); // 記錄正在進行中的請求數量

    const showLoading = () => {
      loadingCount.value++;
      isLoading.value = true;
    };

    const hideLoading = () => {
      loadingCount.value--;
      if (loadingCount.value <= 0) {
        loadingCount.value = 0;
        // 延遲0.5s,讓畫面滑順
        setTimeout(() => {
          isLoading.value = false;
        }, 500);
      }
    };

    return { isLoading, showLoading, hideLoading };
  },
  {
    persist: false, // 不啟用持久化
  },
);
