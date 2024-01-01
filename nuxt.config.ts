  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt-alt/http',
    ],
    http:{
      baseURL: 'http://localhost:5000/api',
      credentials: "omit",
      browserBaseURL:"http://localhost:5000/api",
    },
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
        src:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
      },
    ],
      },
    }
  });
