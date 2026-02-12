// !news api
// ->useApi 適用一開始就需載入的呼叫
// ->$api 適用使用者觸發的行為
export const news = {
  newsList: (query) => useApi("api/news/list", { method: "GET", query }),
  newsCategory: (query) => $api("api/news/category", { method: "GET", query }),
  addNews: (body) => $api("api/news/add", { method: "POST", body }),
};
