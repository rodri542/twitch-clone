// https://nuxt.com/docs/api/configuration/nuxt-config
// import { cssImports } from './config/css'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: ['~/assets/styles/reset.css', '~/assets/styles/main.scss'],
  // css: cssImports,
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "sass:map"; @import "assets/styles/main.scss";',
  //       },
  //     },
  //   },
  // },
  runtimeConfig: {
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,

    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
  },
})
