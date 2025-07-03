<template>
  <section class="bg-gradient-to-br from-blue-50 to-white py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center px-4 gap-10">
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">用程式打造你的知識影響力</h1>
        <p class="text-lg md:text-xl text-gray-700 mb-6">分享前端、後端、雲端與現代網頁技術，讓每一位開發者都能成為內容創作者。</p>
        <NuxtLink to="/blog" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">開始閱讀</NuxtLink>
      </div>
      <div class="flex-1 flex justify-center">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Coding Hero" class="rounded-2xl shadow-lg w-full max-w-md object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script> 