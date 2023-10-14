// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // This solves a vue bug when calling <ModalFull /> 
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['Placeholder'].includes(tag),
        },
    },
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Mr.Horrocks - Front-End Web Developer',
            meta: [{ name: 'description', content: 'Front-End Web Developer' }],
            link: [
                { 
                    rel: 'stylesheet', 
                    href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Yanone+Kaffeesatz:wght@300;400;500;600;700&display=swap',
                }
            ],
        }
    },
    css: [
        "@/assets/css/global.css",
        '@/assets/fonts/googlefonts.css'
    ],
    modules: [
        // '@nuxt/content',
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@dargmuesli/nuxt-cookie-control',
        
    ],
    // colorMode: {
    //     preference: 'light'
    // },
    // content: {
    //     // https://content.nuxtjs.org/api/configuration
    // },
    devtools: {
        enabled: false, // Show devtools in the browser
    },
    components: [
        // Add sub folders to the component direcory 
        { path: '~/components/chartjs', pathPrefix: false },
        // { path: '~/components/nuxtui', pathPrefix: false },

        // It's important that this comes last if you have overrides you wish to apply
        // to sub-directories of `~/components`.
        //
        // ~/components/Btn.vue => <Btn />
        // ~/components/base/Btn.vue => <BaseBtn />
        '~/components'
    ],
    cookieControl: {
        // typed module options
        // Position of cookie bar.
        // 'top-left', 'top-right', 'top-full', 'bottom-left', 'bottom-right', 'bottom-full'
        barPosition: 'bottom-full',

        // Switch to toggle if clicking the overlay outside the configuration modal closes the modal.
        closeModalOnClickOutside: true,

        // Component colors.
        // If you want to disable colors set colors property to false.
        colors: {
            // Cookie Banner
            barBackground: '#000000ba',
            barButtonBackground: 'white',
            barButtonColor: 'black',
            barButtonHoverBackground: 'gold',
            barButtonHoverColor: 'black',
            barTextColor: 'white',

            checkboxActiveBackground: 'blue',
            checkboxActiveCircleBackground: '#fff',
            checkboxDisabledBackground: '#ddd',
            checkboxDisabledCircleBackground: '#fff',
            checkboxInactiveBackground: '#000',
            checkboxInactiveCircleBackground: '#fff',
            controlButtonBackground: '#fff',
            controlButtonHoverBackground: '#000',
            controlButtonIconColor: '#000',
            controlButtonIconHoverColor: '#fff',
            focusRingColor: '#808080',
            // Popup
            modalBackground: '#fff',
            modalButtonBackground: '#000',
            modalButtonColor: '#fff',
            modalButtonHoverBackground: '#333',
            modalButtonHoverColor: '#fff',
            modalOverlay: '#000',
            modalOverlayOpacity: 0.5,
            modalTextColor: '#000',
            modalUnsavedColor: '#fff',
        },

        // The cookies that are to be controlled.
        // See detailed explanation further down below!
        cookies: {
            necessary: [],
            optional: [],
        },

        // The milliseconds from now until expiry of the cookies that are being set by this module.
        cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year

        // Names for the cookies that are being set by this module.
        cookieNameIsConsentGiven: 'ncc_c',
        cookieNameCookiesEnabledIds: 'ncc_e',

        // Options to pass to nuxt's useCookie
        cookieOptions: {
            path: '/',
        },

        // Switch to toggle the "accept necessary" button.
        isAcceptNecessaryButtonEnabled: true,

            // Switch to toggle the button that opens the configuration modal. (Cookie options icon)
            isControlButtonEnabled: true,

        // Switch to toggle the concatenation of target cookie ids to the cookie description.
        isCookieIdVisible: false,

        // Switch to toggle the inclusion of this module's css.
        // If css is set to false, you will still be able to access your color variables.
        // Disable css if you want to write your own.
        isCssEnabled: false,

        // Switch to toggle the css variables ponyfill.
        isCssPonyfillEnabled: false,

        // Switch to toggle the separation of cookie name and description in the configuration modal by a dash.
        isDashInDescriptionEnabled: true,

        // Switch to toggle the blocking of iframes.
        // This can be used to prevent iframes from adding additional cookies.
        isIframeBlocked: false,

        // Switch to toggle the modal being shown right away, requiring a user's decision.
        isModalForced: false,

        // The locales to include.
        locales: ['en'],

        // Translations to override.
        localeTexts: {
            en: {
                save: 'Remember',
            }
        }
    },
})