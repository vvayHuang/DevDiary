<template>
  <section ref="heroSection" class="bg-gray-50 w-full flex items-start pt-20 pb-10">
    <div class="w-full max-w-2xl px-6 flex flex-col items-start">
      <h1 ref="titleRef" class="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6">MAGAZINE</h1>
      <p ref="subtitleRef" class="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
        用程式與設計，打造屬於你的靈感日誌。
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroSection = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (titleRef.value && subtitleRef.value) {
    gsap.from(titleRef.value, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.from(subtitleRef.value, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    })
  }
})
</script>

<style scoped>
/* 可根據需要再加其他視覺效果 */
</style> 