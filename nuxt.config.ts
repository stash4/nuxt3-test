// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/style.css'],
  app: {
    head: {
      title: 'Nuxt3 test',
      meta: [{name: 'description', content: 'Nuxt3 for biginners'}],
      // link: [{rel: 'icon', href: ''}]
    },
  },
  typescript: {
    strict: true
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
