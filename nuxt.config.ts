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
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
  ],

  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || "http://127.0.0.1:4500",
    },
  },
});
