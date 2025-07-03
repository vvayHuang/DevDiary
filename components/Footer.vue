<template>
  <footer class="bg-gradient-to-tr from-blue-700 to-blue-400 text-white py-10 mt-16">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-lg font-bold tracking-wide mb-2 md:mb-0">Vibe Coding Blog</div>
      <div class="flex space-x-6 mb-2 md:mb-0">
        <a href="https://github.com/" target="_blank" class="hover:text-gray-200 transition"><span class="text-2xl">🐙</span> GitHub</a>
        <a href="https://twitter.com/" target="_blank" class="hover:text-gray-200 transition"><span class="text-2xl">🐦</span> Twitter</a>
      </div>
      <div class="text-sm opacity-80">&copy; {{ new Date().getFullYear() }} Vibe Coding Blog. Powered by Nuxt & Prismic.</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script> 