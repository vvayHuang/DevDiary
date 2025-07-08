<template>
  <header class="bg-gray-50 w-full px-8 py-6 flex justify-between items-start">
    <!-- LOGO -->
    <div class="flex items-center">
      <NuxtLink to="/" aria-label="首頁">
        <div class="oasis-logo-outer">
          <div class="oasis-logo-inner">DevDiary</div>
        </div>
      </NuxtLink>
    </div>
    <!-- 右側：MENU 按鈕及其他內容 -->
    <div class="flex items-center space-x-6 text-sm font-medium text-gray-700">
      <!-- 你可在這裡加入其他右側內容 -->
      <button class="menu-btn" @click="showMenu = true">MENU</button>
    </div>
    <!-- 彈窗 -->
    <div v-if="showMenu" class="menu-modal" @click.self="showMenu = false">
      <div class="menu-modal-content">
        <button class="close-btn" @click="showMenu = false">×</button>
        <h3 class="modal-title">社群連結</h3>
        <ul class="modal-links">
          <li><a href="https://github.com/" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
          <!-- 你可以自行新增其他連結 -->
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMenu = ref(false)
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
.menu-btn {
  background: #000;
  color: #fff;
  border: 2.5px solid #fff;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 10px 22px;
  font-family: 'Arial Black', Impact, Arial, sans-serif;
  letter-spacing: 1px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.menu-btn:hover {
  background: #222;
  color: #ffd700;
}
.menu-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.menu-modal-content {
  background: #fff;
  border-radius: 16px;
  padding: 32px 28px 24px 28px;
  min-width: 280px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  position: relative;
  text-align: center;
}
.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
}
.modal-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 18px;
  color: #222;
}
.modal-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.modal-links li {
  margin: 12px 0;
}
.modal-links a {
  color: #000;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.modal-links a:hover {
  color: #0070f3;
}
</style> 