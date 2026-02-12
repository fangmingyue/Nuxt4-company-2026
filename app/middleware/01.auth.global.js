// 全站導航守衛
export default defineNuxtRouteMiddleware((to, from) => {
  // const token = useCookie("token");
  // 定義「白名單」：不需要登入就能訪問的頁面
  //
  // const publicRoutes = ["/login", "/register", "/forgot-password"];
  // 如果目標頁面不在白名單內，且沒有 Token
  // if (!publicRoutes.includes(to.path) && !token.value) {
  //   return navigateTo("/login");
  // }
  //
  // 如果已經登入了，還想去訪問 login 頁，把它踢回首頁
  // if (token.value && to.path === "/login") {
  //   return navigateTo("/");
  // }
});
