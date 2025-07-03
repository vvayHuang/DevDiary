import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
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
    endpoint: apiEndpoint || repositoryName,
  },
})