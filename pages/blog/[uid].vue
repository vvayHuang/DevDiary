<template>
  <div v-if="post?.value && post.value.data" class="container mx-auto py-8">
    <img :src="post.value.data.cover_image.url" alt="" class="w-full h-64 object-cover rounded-lg mb-6" />
    <h1 class="text-3xl font-bold mb-4">{{ post.value.data.title[0]?.text }}</h1>
    <p class="text-gray-500 mb-6">{{ formatDate() }}</p>
    <div class="prose max-w-none" v-html="contentHtml"></div>
  </div>
  <div v-else class="container mx-auto py-8 text-center">
    <h2 class="text-2xl font-bold mb-4">找不到文章</h2>
    <p>您要找的文章不存在或已被刪除。</p>
  </div>
</template>

<script setup lang="ts">
import { asHTML } from '@prismicio/helpers'
import { computed } from 'vue'

const route = useRoute()
const { client } = usePrismic()
const { data: post } = await useAsyncData('post', () =>
  client.getByUID('post', route.params.uid as string).catch(() => null)
) as { data: any }

const contentHtml = computed(() =>
  post.value && post.value.data && post.value.data.content ? asHTML(post.value.data.content) : ''
)

function formatDate() {
  return new Date(post.value?.first_publication_date || '').toLocaleDateString('zh-TW')
}
</script> 