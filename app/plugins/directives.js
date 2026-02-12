// plugins/directives.js
export default defineNuxtPlugin((nuxtApp) => {
  // --- 1. v-focus 自動對焦 ---
  nuxtApp.vueApp.directive("focus", {
    mounted(el, binding) {
      // 如果傳入 v-focus="false" 則不執行
      if (binding.value === false) return;

      // 判斷是直接綁在 input 上，還是綁在組件(如 el-input)上
      const target =
        el.tagName === "INPUT" || el.tagName === "TEXTAREA"
          ? el
          : el.querySelector("input, textarea");

      if (target) {
        // 設定 100ms 延遲，確保 DOM 已經渲染完成
        setTimeout(() => {
          target.focus();
        }, 100);
      }
    },
    updated(el, binding) {
      // 當數據更新且變為 true 時，再次對焦
      if (binding.value && binding.value !== binding.oldValue) {
        const target = el.querySelector("input, textarea") || el;
        if (target) target.focus();
      }
    },
  });

  // --- 2. v-scroll 滾動動畫 ---
  nuxtApp.vueApp.directive("scroll", {
    mounted(el, binding) {
      // 如果有傳入參數 (例如 v-scroll:500)，設定 CSS 變數
      if (binding.arg) {
        el.style.setProperty("--delay", `${binding.arg}ms`);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 進入畫面：加上顯示 class
              el.classList.add("v-show");

              // 如果沒有 .repeat 修飾符，觸發一次後就停止觀察 (節省效能)
              if (!binding.modifiers.repeat) {
                observer.unobserve(el);
              }
            } else {
              // 離開畫面：如果有 .repeat 則移除 class，讓下次進來還能跑動畫
              if (binding.modifiers.repeat) {
                el.classList.remove("v-show");
              }
            }
          });
        },
        {
          threshold: 0.1, // 只要出現 10% 就觸發
          rootMargin: "0px",
        },
      );

      // 把 observer 掛在元素上，方便銷毀時取用
      el._observer = observer;
      observer.observe(el);
    },
    unmounted(el) {
      // 銷毀組件時停止觀察，防止記憶體洩漏
      if (el._observer) {
        el._observer.disconnect();
        delete el._observer;
      }
    },
  });

  // --- 3. v-animate 循環動畫 ---
  nuxtApp.vueApp.directive("animate", {
    mounted(el, binding) {
      // 1. 加上啟動 Class
      el.classList.add("v-anim-active");

      // 2. 決定動畫類型 (從參數拿，預設 float-y)
      // 例如 v-animate:swing -> type = swing
      const type = binding.arg || "float-y";
      el.style.setProperty("--a-name", `anim-${type}`);

      // 為了 CSS 選取器方便 (針對 spin 做特殊處理用)
      el.setAttribute("data-anim", type);

      // 3. 處理傳入的值 (Value)
      const val = binding.value;

      // 情況 A: 如果沒傳值 v-animate:float-x -> 用 CSS 預設值
      if (!val) return;

      // 情況 B: 如果傳的是純數字/字串 -> 當作「時間 (Duration)」
      // 例如 v-animate:float-x="2000" (2秒)
      if (typeof val === "number" || typeof val === "string") {
        const duration = isNaN(Number(val)) ? val : `${val}ms`;
        el.style.setProperty("--a-dur", duration);
        return;
      }

      // 情況 C: 如果傳的是物件 -> 詳細設定
      // 例如 v-animate:swing="{ time: '2s', deg: '10deg', delay: '0.5s' }"
      if (typeof val === "object") {
        if (val.time)
          el.style.setProperty(
            "--a-dur",
            typeof val.time === "number" ? `${val.time}ms` : val.time,
          );
        if (val.delay)
          el.style.setProperty(
            "--a-delay",
            typeof val.delay === "number" ? `${val.delay}ms` : val.delay,
          );

        // 設定距離 (給 float 用)
        if (val.dist)
          el.style.setProperty(
            "--a-dist",
            typeof val.dist === "number" ? `${val.dist}px` : val.dist,
          );

        // 設定角度 (給 swing 用)
        if (val.deg)
          el.style.setProperty(
            "--a-deg",
            typeof val.deg === "number" ? `${val.deg}deg` : val.deg,
          );

        // 設定縮放 (給 pulse 用)
        if (val.scale) el.style.setProperty("--a-scale", val.scale);
      }
    },
  });
});
