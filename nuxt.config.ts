// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      link:[
        {rel:"stylesheet",
        href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    },
    {
      rel:"stylesheet",
      href:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
    },
  ],
  script:[
    {
      src:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
    },
  ],
    }
  }
});
