// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  runtimeConfig: { API_URL: process.env.API_URL || "http://penapisan-be.localhost/api", },
  devtools: { enabled: true },
  mode: 'SPA',
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})