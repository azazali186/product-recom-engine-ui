import en from './i18n/translations/en.json'
import km from './i18n/translations/km.json'
import zh from './i18n/translations/zh.json'
import hn from './i18n/translations/hn.json'
import i18n from './i18n';
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: [
    "./assets/css/main.css",
  ],

  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
  ],
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://127.0.0.1:4500/api/v1",
    },
  },
});
