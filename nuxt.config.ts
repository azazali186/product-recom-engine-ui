// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  css: ["./assets/css/main.css"],
  modules: ["@nuxt/ui", "nuxt-icon", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
});
