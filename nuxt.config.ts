// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/strapi',
  ],
  strapi: {
    url: 'http://localhost:1337',
    token: 'e61bfcbbe6a2422b39c94f56eb4dd144cf15d4b06df221babe6ee0ec89f0cd5d9af86cc6e3af715d621c5707179a1abe1877aac1980c80127b4820a51c66b6612568ec9ed02beeccc132e70f5482fa5aee0fe7e80dd96c0cac4532a157a93a1434f8cbf94e1d6ba1e6ca45c1068cd78c9146c7a9ccdbffe3cfa21d3c7284985a',
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
// Trigger rebuild