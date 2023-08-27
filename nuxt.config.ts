// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // alias:{assets: '/<rootDir>/assets'},
  // css:['~/assets/main.css'],
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  devtools: {
    enabled: true, // Show devtools in the browser
  },


  app: {
    // Global title and meta config 
    head: {
      title: 'A Nuxt 3 Project',
      meta: [{ name: 'description', content: 'A Nuxt 3 Project' }],

    // Example of loading a global stylesheet 
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      // ]
    }
  }
})