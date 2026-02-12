import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore(
  "useCounterStore",
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

    return { count, doubleCount, increment };
  },
  {
    persist: {
      // 1. 移除 storage: localStorage (使用預設值避免 SSR 報錯)
      pick: ["count"],
    },
  },
);
