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
            'px-5 py-2 font-semibold text-sm border border-black transition duration-150',
            selectedCategory === cat
              ? 'bg-black text-white font-bold'
              : 'bg-white text-black hover:bg-black hover:text-white',
          ]"
        >
          {{ cat }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <div
          v-for="post in filteredPosts"
          :key="post.uid"
          class="border border-black bg-white overflow-hidden flex flex-col h-full group"
        >
          <NuxtLink :to="`/posts/${post.uid}`" class="block">
            <div class="w-full aspect-[4/3] bg-gray-200 overflow-hidden">
              <img
                :src="post.cover_image"
                :alt="post.title"
                class="w-full h-full object-cover transition duration-300"
                style="border-radius:0; filter: grayscale(100%);"
                @mouseover="(e: MouseEvent) => { (e.target as HTMLImageElement).style.filter = 'none'; }"
                @mouseleave="(e: MouseEvent) => { (e.target as HTMLImageElement).style.filter = 'grayscale(100%)'; }"
              />
            </div>
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-lg md:text-xl font-extrabold uppercase tracking-tight text-gray-900 mb-2">{{ post.title }}</h3>
              <p class="text-gray-700 text-sm mb-4 flex-1">{{ post.content.slice(0, 80) }}{{ post.content.length > 80 ? '...' : '' }}</p>
              <button
                class="px-5 py-2 border border-black bg-white text-black font-semibold text-sm transition w-max"
                style="border-radius:0;"
                @mouseover="(e: MouseEvent) => { (e.target as HTMLButtonElement).style.backgroundColor = '#000'; (e.target as HTMLButtonElement).style.color = '#fff'; }"
                @mouseleave="(e: MouseEvent) => { (e.target as HTMLButtonElement).style.backgroundColor = '#fff'; (e.target as HTMLButtonElement).style.color = '#000'; }"
              >Lees Meer</button>
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

const selectedCategory = ref('全部')

const { client } = usePrismic()
// 取得所有分類
const { data: categoriesData } = await useAsyncData('categories', () => client.getAllByType('field'))
// 取得所有文章，帶出 category 關聯
const { data: prismicPosts } = await useAsyncData('posts', () => client.getAllByType('post', { fetchLinks: ['field.name'], lang: '*' }))

// 轉換 Prismic 資料格式
const posts = computed(() => {
  if (!prismicPosts.value) return []
  return prismicPosts.value.map(doc => {
    // 取得分類名稱（Prismic 關聯型欄位）
    let categoryName = ''
    const cat = doc.data.category
    if (cat && typeof cat === 'object' && 'data' in cat && cat.data && typeof cat.data.name === 'string') {
      categoryName = cat.data.name
    }
    // 拼接 dialog 內容
    let contentText = ''
    if (Array.isArray(doc.data.dialog)) {
      contentText = doc.data.dialog.map(d => asText(d.message || [])).join('\n')
    }
    return {
      uid: doc.uid,
      title: asText(doc.data.title) || '',
      cover_image: doc.data.cover_image?.url || '',
      content: contentText,
      category: categoryName,
      created_at: doc.data.created_at || doc.first_publication_date,
    }
  })
})

// 自動產生分類清單
const categories = computed(() => {
  if (!categoriesData.value) return ['全部']
  const catNames = categoriesData.value.map(cat => cat.data.name).filter(Boolean)
  return ['全部', ...Array.from(new Set(catNames))]
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === '全部') return posts.value
  return posts.value.filter(post => post.category === selectedCategory.value)
})

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' })
}
</script> 