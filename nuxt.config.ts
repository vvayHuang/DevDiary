import slicemachineConfig from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2025-07-03',
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
  ],
  prismic: {
    endpoint: `https://${slicemachineConfig.repositoryName}.cdn.prismic.io/api/v2`,
  },
  app: {
    head: {
      title: 'DevDiary',
      meta: [
        { name: 'description', content: 'DevDiary - 現代網頁開發、技術分享、工程師成長心得的最佳部落格平台。' },
        { property: 'og:title', content: 'DevDiary' },
        { property: 'og:description', content: 'DevDiary - 現代網頁開發、技術分享、工程師成長心得的最佳部落格平台。' },
        { property: 'og:image', content: '/favicon.ico' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'DevDiary' },
        { name: 'twitter:description', content: 'DevDiary - 現代網頁開發、技術分享、工程師成長心得的最佳部落格平台。' },
        { name: 'twitter:image', content: '/favicon.ico' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules/**', '**/.git/**']
      }
    }
  }
})