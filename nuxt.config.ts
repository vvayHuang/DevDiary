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
    }
  }
})