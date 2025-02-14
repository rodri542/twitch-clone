// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint', 
  ],
  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/main.scss' 
  ], 
})
