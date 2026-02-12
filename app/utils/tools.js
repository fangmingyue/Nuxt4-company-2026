/**
 * 提示彈窗
 * @param {string} msg 要顯示的訊息
 * @param {string} type 型態 success / warning / info / error / primary
 */
export const message = (msg, type, showClose = false) => {
  ElMessage({
    message: msg,
    type: type,
    showClose: showClose,
  });
};
