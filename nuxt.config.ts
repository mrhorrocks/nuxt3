// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // This solves a vue bug when calling <ModalFull /> 
    vue: {  
        compilerOptions: {
          isCustomElement: (tag) => ['Placeholder'].includes(tag),
        },
      },
    app: {
        // Global title and meta config 
        head: {
            title: 'Mr.Horrocks',
            meta: [{ name: 'description', content: 'Front-End Web Developer' }],
            // Example of loading a global stylesheet 
            // link: [
            //   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            // ]
        }
    },
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
        // '@nuxtjs/tailwindcss',
        '@nuxt/ui',
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
        // Add sub folders to the component direcory 
        { path: '~/components/chartjs', pathPrefix: false },
        { path: '~/components/googlecharts', pathPrefix: false },
        { path: '~/components/nuxtui', pathPrefix: false },

        // It's important that this comes last if you have overrides you wish to apply
        // to sub-directories of `~/components`.
        //
        // ~/components/Btn.vue => <Btn />
        // ~/components/base/Btn.vue => <BaseBtn />
        '~/components'
    ]
})