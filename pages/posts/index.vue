<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">部落格文章</h1>
    <!-- 分類按鈕區塊 -->
    <div class="mb-6 flex gap-2">
      <button
        :class="['px-4 py-2 rounded', selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200']"
        @click="selectedCategory = 'all'"
      >全部</button>
      <button
        v-for="cat in categories"
        :key="cat.id"
        :class="['px-4 py-2 rounded', selectedCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-gray-200']"
        @click="selectedCategory = cat.id"
      >{{ cat.data.name[0]?.text || cat.data.name }}</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="post in filteredPosts"
        :key="post.uid"
        :to="`/posts/${post.uid}`"
        class="block bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      >
        <img :src="post.data.cover_image.url" alt="" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ post.data.title[0]?.text }}</h2>
          <p class="text-gray-500 text-sm">{{ formatDate(post.first_publication_date) }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const { client } = usePrismic()

// 取得所有分類
const { data: categories }: { data: any } = await useAsyncData('categories', () => client.getAllByType('category'))
// 取得所有文章，帶出 category 關聯，並依照發佈日期由新到舊排序
const { data: posts }: { data: any } = await useAsyncData('posts', () => client.getAllByType('post', {
  fetchLinks: ['category.name'],
  orderings: '[document.first_publication_date desc]'
}))

console.log('categories:', categories.value)
console.log('posts:', posts.value)
if (posts.value) {
  posts.value.forEach((post: any) => {
    console.log('post', post.uid, 'category:', post.data.category)
  })
}

const selectedCategory = ref('all')

const filteredPosts = computed(() => {
  let arr = posts.value || []
  // 依照 last_publication_date 由新到舊排序
  arr = arr.slice().sort((a: any, b: any) => {
    return new Date(b.last_publication_date).getTime() - new Date(a.last_publication_date).getTime()
  })
  if (selectedCategory.value === 'all') return arr
  return arr.filter((post: any) => post.data.category?.id === selectedCategory.value)
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-TW')
}
</script> 