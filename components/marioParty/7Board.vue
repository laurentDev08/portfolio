<template>
    <div class="board grid grid-cols-2 pt-20 pb-20">
        <div class="p-9">
            <Carousel class="slider bg-white rounded-lg cursor-grab active:cursor-grabbing" :autoplay="5000" :wrap-around="true" :transition="2000">
                <Slide v-for="pic in pics" :key="pic">
                    <div class="text-green-700 font-bold text-2xl">
                        <img :src="pic.mag" alt="" class="h-96 rounded-t-lg ">
                        <p class="text-lg text-justify p-4">{{ pic.content }}</p>
                    </div>        
                </Slide>  
            </Carousel>
        </div>
        <div>
            <h1 class="text-center text-6xl p-4 pt-6 font-bold uppercase">tous les 7 plateaux </h1>
            <p class=" seven rounded  bg-gradient-to-b from-blue-500 to-cyan-400 text-white text-xl text-justify p-4">
                Montez à bord de la montgolfière et envolez-vous vers des îles où sept plateaux pleins de surprises vous attendent !
            </p>
            <img class="kamek p-2 ml-56 pt-5" src="/images/mario pic/kamek.png" alt="" >
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
      Carousel,
      Slide    
    },
    data(){
        return{
            pics: [
            { mag:"https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/10/mega-wiggler-s-tree-party.JPG", 
            content:"Essayer de ne pas faire de bruit, donc Ssssshhhh! Mega Wiggler dort à poings fermés... S'il se fait réveiller, il risque d'être grogon... et de transformer le plateau de manière surprenante ! " },
            { mag:"https://dotesports.com/wp-content/uploads/2024/10/How-to-unlock-all-boards-in-Super-Mario-Party-Jamboree-2.jpg", content:"Cette île a l'air paradisiaque, mais elle est pas sans danger! Chaque mouvement de marée modifie les chemins qu'il est possible de suivre, et le volcan qui surplombe l'île a l'air de pouvoir se réveiller a tout instant..." },
            { mag:"https://i.ytimg.com/vi/y8ys8qfn218/maxresdefault.jpg",
            content:"Avis aux fans de shopping: ce ne sont pas les occassions de faire des bonnes affaires qui manque ici! Collectez des tampons pour obtenir des récompenses et tâchez de ne pas manquer les soldes"
             },
            { mag:"https://i.ytimg.com/vi/334bxQaZhoA/maxresdefault.jpg",
            content:"Grimpez dans votre bolide et faites brûler la gomme! Echaînez les tours de circuits a toute allure pour récupérer des étoiles... et prenez garde aux véhicules hors de contrôle!"
             },
            { mag:"https://i.ytimg.com/vi/3n3V9psp_Vo/maxresdefault.jpg", 
            content: "Tout le monde à bord ! Empochez votre ticket, traversez le plateau à toute vapeur, et surtout n'oubliez pas de faire une escale au saloon de Wiggler! Ce plateau est disponible une fois que vous avez atteint le rang argent." },
            { mag:"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/10/marios-rainbow-castle-in-super-mario-party-jamboree.jpg",
            content:"Envolez-vous parmi les nuages où vous attend ce château volant! Atteignez sa tour la plus haute pour recevoir une étoile, mais attention... il arrive que la tour tourne sur elle-même! "
             },
            { mag:"https://i.ytimg.com/vi/PlwyfthNl5Y/maxresdefault.jpg",
            content:"Des piéges à ne plus savoir qu'en faire et de la lave comme s'il en pleuvait? Pas de doute, on est bien sur le territoire du faux Bowser! Ce plateau est disponible un efois que vous avez atteint le rang diamant."
             },
        ],
    }
}
})


</script>

<style scoped>
    .board{
        background-image: url("https://images5.alphacoders.com/137/1371415.png");
        background-attachment: fixed;
    }
    .slider,.seven{
        width: 80%;
        margin: 0 auto;
    }
    img{
        width: 100%;
    }
    .kamek{
        width: 50%;
    }
   
    
</style>
