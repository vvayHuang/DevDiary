<template>
  <header class="bg-gray-50 w-full px-8 py-6 flex justify-between items-start">
    <!-- LOGO -->
    <div class="flex items-center">
      <NuxtLink to="/" aria-label="首頁">
        <div class="oasis-logo-outer">
          <div class="oasis-logo-inner">Vibe Coding Blog</div>
        </div>
      </NuxtLink>
    </div>
    <!-- 右上角語言與選單 -->
    <div class="flex items-center space-x-6 text-sm font-medium text-gray-700">
      
      <button class="hover:underline tracking-widest">MENU <span aria-hidden="true">↗</span></button>
    </div>
  </header>
</template>

<script setup lang="ts">
// 無需額外邏輯
</script>

<style scoped>
.oasis-logo-outer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 5px solid #000;
  padding: 2px;
  box-sizing: border-box;
}
.oasis-logo-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 56px;
  background: #000;
  color: #fff;
  font-family: 'Arial Black', Impact, Arial, sans-serif;
  font-weight: bold;
  font-size: 2.1rem;
  text-transform: lowercase;
  border: 3px solid #fff;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  border-radius: 0;
  padding: 12px 12px;
  font-style: italic;
 

}
</style> 