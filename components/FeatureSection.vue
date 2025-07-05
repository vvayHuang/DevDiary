<template>
  <section id="blog-list" class="py-20 bg-gray-50 w-full">
    <div class="w-full px-6 md:px-8 lg:px-8">
      <!-- 分類按鈕 -->
      <div class="flex space-x-3 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-5 py-2 rounded-full border font-semibold text-sm shadow-sm focus:outline-none transition',
            selectedCategory === cat
              ? 'bg-blue-200 border-blue-400 text-blue-900'
              : 'bg-white border-gray-400 text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ cat }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <div
          v-for="post in filteredPosts"
          :key="post.uid"
          class="rounded-2xl border border-gray-300 bg-white shadow-sm overflow-hidden flex flex-col h-full"
          style="box-shadow:0 2px 8px 0 rgba(0,0,0,0.03);"
        >
          <NuxtLink :to="`/posts/${post.uid}`" class="block">
            <div class="w-full aspect-[4/3] bg-gray-200 overflow-hidden">
              <img :src="post.cover_image" :alt="post.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-lg md:text-xl font-extrabold uppercase tracking-tight text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-700 text-sm mb-4 flex-1">{{ post.content.slice(0, 80) }}{{ post.content.length > 80 ? '...' : '' }}</p>
              <button class="px-5 py-2 rounded-full border border-gray-400 bg-white text-gray-900 font-semibold text-sm shadow-sm hover:bg-gray-100 transition w-max">Lees Meer</button>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { usePrismic } from '@prismicio/vue'
import { asText } from '@prismicio/helpers'

const categories = ['全部', '科技', '生活', '設計']
const selectedCategory = ref('全部')

const { client } = usePrismic()
const { data: prismicPosts } = await useAsyncData('posts', () => client.getAllByType('post', { lang: '*' }))

// 轉換 Prismic 資料格式
const posts = computed(() => {
  if (!prismicPosts.value) return []
  return prismicPosts.value.map(doc => ({
    uid: doc.uid,
    title: asText(doc.data.title) || '',
    cover_image: doc.data.cover_image?.url || '',
    content: doc.data.content || '',
    created_at: doc.data.created_at || doc.first_publication_date,
  }))
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === '全部') return posts.value
  // 這裡如需分類，需根據內容自訂分類規則
  return posts.value.filter(post => post.title.includes(selectedCategory.value) || post.content.includes(selectedCategory.value))
})

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
}
</script> 