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

    <!-- 內文（對話式） -->
    <div
      v-if="post && post.data && post.data.dialog"
      class="flex flex-col gap-6 px-8 md:px-32 lg:px-64 mx-auto"
    >
      <div
        v-for="(item, idx) in post.data.dialog"
        :key="idx"
        :class="[
          'flex w-full',
          item.role === 'left' ? 'justify-start' : 'justify-end'
        ]"
      >
        <div
          :class="[
            'max-w-[70%] px-6 py-4 border border-black text-base whitespace-pre-line',
            item.role === 'left' ? 'bg-white text-black' : 'bg-black text-white',
            'rounded-none'
          ]"
          v-html="getMessage(item)"
        ></div>
      </div>
    </div>
    <div v-else class="w-full py-8 text-center">
      <h2 class="text-2xl font-bold mb-4">找不到文章</h2>
      <p>您要找的文章不存在或已被刪除。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asText, asHTML } from '@prismicio/helpers'
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

function getMessage(item: any) {
  if (Array.isArray(item.message)) {
    return asHTML(item.message)
  }
  return item.message
}
</script> 