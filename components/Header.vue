<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center px-4 py-3">
      <NuxtLink to="/" class="text-2xl font-extrabold text-blue-600 tracking-tight">Vibe Coding Blog</NuxtLink>
      <nav class="space-x-6">
        <NuxtLink to="/blog" class="text-gray-700 hover:text-blue-600 font-medium transition">部落格</NuxtLink>
        <NuxtLink to="#features" class="text-gray-700 hover:text-blue-600 font-medium transition">技術特色</NuxtLink>
        <NuxtLink to="#about" class="text-gray-700 hover:text-blue-600 font-medium transition">關於本站</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script> 