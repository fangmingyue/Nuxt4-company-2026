// composables/useApi.js
import { defu } from "defu";

// 1. 定義共用的攔截器與設定 (FetchOptions)
function createFetchOptions(options = {}) {
  const config = useRuntimeConfig();
  const token = useCookie("auth_token");

  const defaults = {
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      options.headers = options.headers || {};
      if (token.value) {
        options.headers.Authorization = `Bearer ${token.value}`;
      }
    },
    onResponseError({ response }) {
      // 統一錯誤處理
      if (response.status === 401) {
        navigateTo("/login");
      }
    },
  };

  return defu(options, defaults);
}

// 2. 匯出給「頁面初始化」用的 (SSR/Setup) -> 維持原狀
export const useApi = (url, options = {}) => {
  const params = createFetchOptions(options);
  return useFetch(url, params);
};

// 3. 匯出給「互動事件」用的 (OnClick/Submit) -> 新增這個！
export const $api = (url, options = {}) => {
  const params = createFetchOptions(options);
  // 注意：這裡直接使用 $fetch，它是一個 Promise
  return $fetch(url, params);
};
