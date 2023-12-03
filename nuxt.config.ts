export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  css: ["./assets/css/main.css"],

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
});
