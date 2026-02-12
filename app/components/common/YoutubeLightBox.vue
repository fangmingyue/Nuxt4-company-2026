<script setup>
/* youtube影片燈箱 **/
// 方法
import { ref, computed } from "vue";
// 組件

// !實例化 --------------------------------------------------------------------------------------------
const props = defineProps({
  url: {
    type: String,
    required: true,
    default: "",
  },
});
// !資料 --------------------------------------------------------------------------------------------
const isModalOpen = ref(false);
// !computed ---------------------------------------------------------------------------------------
// 解析 Video ID 的工具邏輯
const videoId = computed(() => {
  if (!props.url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = props.url.match(regExp);
  return match && match[2]?.length === 11 ? match[2] : null;
});

const thumbnailUrl = computed(() =>
  videoId.value
    ? `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg`
    : "",
);

const embedUrl = computed(() =>
  videoId.value
    ? `https://www.youtube.com/embed/${videoId.value}?autoplay=1`
    : "",
);

const toggleModal = () => (isModalOpen.value = !isModalOpen.value);
// !事件函數 -----------------------------------------------------------------------------------------

// !功能函數 -----------------------------------------------------------------------------------------

// !Api ---------------------------------------------------------------------------------------------

// !生命週期 -----------------------------------------------------------------------------------------

// !watch -------------------------------------------------------------------------------------------
</script>

<template lang="pug">
.yt-lightbox-container(v-if="videoId")
  //- 預覽卡片
  .video-card(@click="toggleModal")
    img.thumb-img(:src="thumbnailUrl", alt="Youtube Thumbnail")
    .play-overlay
      .play-button

  //- 燈箱彈窗
  Teleport(to="body")
    Transition(name="fade")
      .modal-backdrop(v-if="isModalOpen", @click.self="toggleModal")
        .modal-body
          button.close-x(@click="toggleModal") &times;
          .iframe-container
            iframe(
              :src="embedUrl",
              frameborder="0",
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen
            )
</template>

<style lang="scss" scoped>
/* 預覽卡片樣式 */
.video-card {
  position: relative;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #000;
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-card:hover .thumb-img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
}

.play-button {
  width: 60px;
  height: 60px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  position: relative;
}

.play-button::after {
  content: "";
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: 10px 0 10px 18px;
  border-color: transparent transparent transparent white;
}

/* 燈箱樣式 */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-body {
  width: 100%;
  max-width: 1000px;
  position: relative;
}

.iframe-container {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
}

.close-x {
  position: absolute;
  top: -45px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;
}

/* 過渡動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
