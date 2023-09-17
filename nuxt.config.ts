// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        // Global title and meta config 
        head: {
            title: 'A Nuxt 3 Project',
            meta: [{ name: 'description', content: 'A Nuxt 3 Project Destiption' }],
            // Example of loading a global stylesheet 
            // link: [
            //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            // ]
        }
    },
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],

    // Add a global css file
    css: [
        "@/assets/css/global.css"
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    devtools: {
        enabled: true, // Show devtools in the browser
    },
  
    components: [
        // ~/components/charts/BarChart.vue => <BarChart />
        { path: '~/components/chartjs', pathPrefix: false },

        // It's important that this comes last if you have overrides you wish to apply
        // to sub-directories of `~/components`.
        //
        // ~/components/Btn.vue => <Btn />
        // ~/components/base/Btn.vue => <BaseBtn />
        '~/components'
    ]
})