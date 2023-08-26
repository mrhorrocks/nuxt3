// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Site name TBC',
      meta: [
        { name: 'description', content: 'Nuxt 3' }
      ],
      // link: [
      //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      // ]
    }
  }
})
