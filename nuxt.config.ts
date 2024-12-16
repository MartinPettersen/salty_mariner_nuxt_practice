// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, ".")
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Italianno&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Italianno&family=Jacques+Francois&display=swap' },
      ]
    }
  },

  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: process.env.VITE_PROJECT_ID,
    dataset: "production",
  },
})