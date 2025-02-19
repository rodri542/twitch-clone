// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages', // Configuración correcta para Cloudflare Pages
    output: {
      dir: '.output',
      publicDir: '.output/public',
    },
  },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: ['~/assets/styles/reset.css', '~/assets/styles/main.scss'],
  runtimeConfig: {
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,

    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
  },
})
