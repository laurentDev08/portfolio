// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt"],
  carousel: {
    prefix: 'Slide'
  },

  app:{
    head: {
      title:"GAME TIME" ,
      meta: [
        { name: "description" , content:"PLAY THE GAME"  }
      ],
      link:[
        {href:"https://fonts.googleapis.com"},
        {href:"https://fonts.gstatic.com"},
        {href:"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap", rel: "stylesheet"},
        {href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap", rel: "stylesheet"},
      ],
      script:[ 
        {src:"https://kit.fontawesome.com/5f49add210.js", crossorigin:"anonymous"}
      ] 
    },
    pageTransition: { name: "page", mode: "out-in"}
  },

  css: ['~/assets/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})