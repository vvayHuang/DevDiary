<template>
  <div v-if="post && post.data" class="w-full py-12 px-0">
    <!-- 主圖 -->
    <img
      :src="post.data.cover_image?.url || ''"
      alt=""
      class="w-full h-96 object-cover rounded-none shadow mb-10"
    />

    <!-- 標題 -->
    <h1 class="text-5xl font-extrabold mb-4 leading-tight text-center w-full">
      {{ getTitle() }}
    </h1>
    <div class="h-1 w-24 bg-gray-200 rounded mb-10 mx-auto"></div>

    <!-- 文章資訊 -->
    <div class="text-base text-gray-500 mb-12 text-center w-full">
      發佈日期：{{ formatDate() }}
    </div>

    <!-- 內文 -->
    <div class="prose prose-lg max-w-none leading-relaxed space-y-8 px-8 md:px-32 lg:px-64 mx-auto whitespace-pre-line">
      {{ post.data.content }}
    </div>
  </div>
  <div v-else class="w-full py-8 text-center">
    <h2 class="text-2xl font-bold mb-4">找不到文章</h2>
    <p>您要找的文章不存在或已被刪除。</p>
  </div>
</template>

<script setup lang="ts">
import { asText } from '@prismicio/helpers'
import { computed } from 'vue'

const route = useRoute()
const { client } = usePrismic()
const { data: posts } = await useAsyncData('posts', () => client.getAllByType('post', { lang: '*' }))

const post = computed(() => {
  return (posts.value || []).find(p => p.uid === route.params.uid)
})

function formatDate() {
  return new Date(post.value?.first_publication_date || '').toLocaleDateString('zh-TW')
}

function getTitle() {
  const title = post.value?.data?.title
  return Array.isArray(title) ? asText(title) : ''
}
</script> 