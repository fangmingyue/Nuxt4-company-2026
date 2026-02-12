// !composables/useRepo.js

// ->引入api資料夾裡的api
import { news } from "@/api/news";

export const useRepo = () => {
  return {
    news: news,
  };
};
