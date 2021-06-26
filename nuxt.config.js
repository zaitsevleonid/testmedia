export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testmedia',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://kit.fontawesome.com/a076d05399.js',
        body: true,
      },
    ],
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://60d4458361160900173cabb0.mockapi.io',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/main.css', lang: 'css' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'portal-vue/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
