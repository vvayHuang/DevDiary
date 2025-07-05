<template>
  <section class="bg-gray-50 w-full  flex items-start pt-20 pb-10">
    <div class="w-full max-w-2xl px-6 flex flex-col items-start">
      <h1 class="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6">MAGAZINE</h1>
      <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">歡迎來到 Vibe Coding Blog，這裡是你探索程式、設計與生活靈感的起點。分享故事、技巧與洞見，陪你一起突破自我、開創新局！</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
}
.delay-150 {
  animation-delay: 0.15s;
}
</style> 