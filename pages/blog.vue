<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">部落格文章</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="post in posts || []"
        :key="post.uid"
        :to="`/blog/${post.uid}`"
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
const { client } = usePrismic()
const { data: posts } = await useAsyncData('posts', () => client.getAllByType('post')) as { data: any }

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-TW')
}
</script> 