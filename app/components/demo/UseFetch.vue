<script setup>
/* api 使用方法 **/
// 方法
import { ElMessage } from "element-plus";
// 組件

// !實例化 --------------------------------------------------------------------------------------------
const repo = useRepo();
// !資料 --------------------------------------------------------------------------------------------
//const { data, error, pending } = await repo.news.newsList(); // 不要放在onMonted裡,seo會有問題
const categoryData = useState("categoryData", () => []);
// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------
const handNewsCategory = async () => {
  try {
    // 這裡使用的是 $api，回傳的是 Promise，直接 await 拿到結果
    const res = await repo.news.newsCategory();

    // 將結果賦值給 ref
    categoryData.value = res;

    message("送出成功", "success");
  } catch (error) {
    console.error("API 錯誤", error);
  }
};
// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template>
  <el-button @click="handNewsCategory">add</el-button>

  <div v-for="item in categoryData?.data?.payload" :key="item.url">
    <span class="mr-4">{{ item.title }}</span>
    <span class="mr-4">{{ item.url }}</span>
    <span class="mr-4">{{ item.has_children }}</span>
  </div>
</template>

<style lang="scss" scoped>
//-
</style>
