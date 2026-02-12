<script setup>
/* 滾動和動畫 使用方法 **/
// 方法

// 組件

// !實例化 --------------------------------------------------------------------------------------------

// !資料 --------------------------------------------------------------------------------------------
const tableData = [
  {
    instruction: "v-scroll",
    function: "向上浮出",
    action: "delay 0s",
    key: "",
    note: "div(v-scroll data-scroll='fade-up')",
  },
  {
    instruction: "v-scroll",
    function: "向下浮出",
    action: "delay 0s",
    key: "",
    note: "div(v-scroll data-scroll='fade-down')",
  },
  {
    instruction: "v-scroll",
    function: "向左浮出",
    action: "delay 0s",
    key: "",
    note: "div(v-scroll data-scroll='fade-left')",
  },
  {
    instruction: "v-scroll",
    function: "向右浮出",
    action: "delay 0s",
    key: "",
    note: "div(v-scroll data-scroll='fade-right')",
  },
  {
    instruction: "v-scroll",
    function: "縮放浮出",
    action: "delay 0s",
    key: "",
    note: "div(v-scroll data-scroll='zoom-in')",
  },
  {
    instruction: "v-animate",
    function: "上下浮動",
    action: "3s, -20px, 0s",
    key: "time(時間), dist(距離), delay(延遲)",
    note: "div(v-animate data-animate:float-y) div(v-animate data-animate:float-y={ time: '3s', dist: '-20px', delay: '.5s'})",
  },
  {
    instruction: "v-animate",
    function: "左右浮動",
    action: "3s, 20px, 0s",
    key: "time(時間), dist(距離), delay(延遲)",
    note: "div(v-animate data-animate:float-y) div(v-animate data-animate:float-y={ time: '3s', dist: '20px', delay: '.5s'})",
  },
  {
    instruction: "v-animate",
    function: "左右搖擺",
    action: "3s, 5deg, 0s",
    key: "time(時間), deg(角度), delay(延遲)",
    note: "div(v-animate data-animate:swing) div(v-animate data-animate:swing={ time: '2s', deg: '15deg', delay: '.5s'})",
  },
  {
    instruction: "v-animate",
    function: "大小縮放",
    action: "3s, 1.05, 0s",
    key: "time(時間), scale(縮放), delay(延遲)",
    note: "div(v-animate data-animate:pulse) div(v-animate data-animate:pulse={ time: '2s', scale: '1.05', delay: '.5s'})",
  },
  {
    instruction: "v-animate",
    function: "自轉",
    action: "3s, 360deg, 0s",
    key: "time(時間), scale(縮放), delay(延遲)",
    note: "div(v-animate data-animate:spin) div(v-animate data-animate:spin={ time: '2s', deg: '360deg', delay: '.5s'})",
  },
];
// !computed ---------------------------------------------------------------------------------------

// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template lang="pug">
  el-table(:data="tableData" border style="width:100%")
    el-table-column(prop="instruction" label="指令" width="180")
    el-table-column(prop="function" label="效果" width="180")
    el-table-column(prop="action" label="預設行為" width="140")
    el-table-column(prop="key" label="可選參數" width="260")
    el-table-column(prop="note" label="使用方法")
</template>

<style lang="scss" scoped>
//-
</style>
