<script setup>
// 方法

// 組件

// !實例化 --------------------------------------------------------------------------------------------
// Nuxt 會自動傳入 error 物件，包含 statusCode 和 message
const props = defineProps({
  error: Object,
});

// !資料 --------------------------------------------------------------------------------------------

// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------
const handleError = () => {
  // !重要：在錯誤頁面，不能只用 navigateTo 或 router.push
  // 必須使用 clearError 來清除 Nuxt 內部的錯誤狀態，否則錯誤會卡住
  clearError({ redirect: "/" });
};

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template>
  <div id="ErrorPage" class="error-page">
    <div class="content">
      <h1>404</h1>
      <p>哎呀！您要找的頁面不存在。</p>
      <p v-if="error">(錯誤代碼: {{ error.statusCode }})</p>
      <el-button type="primary" @click="handleError">回到首頁</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  // 讓錯誤頁面全螢幕置中
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f7fa;
  text-align: center;

  .content {
    h1 {
      font-size: 8rem;
      color: #909399;
      margin: 0;
      line-height: 1.2;
    }

    p {
      font-size: 1.2rem;
      color: #606266;
      margin-bottom: 2rem;
    }
  }
}
</style>
