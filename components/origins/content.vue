<template>
    <div class="board">
        <h1 class="text-center uppercase text-white text-4xl p-4 my-10">aperçu du jeu</h1>
        <div v-for="mode in modes" class="content grid grid-cols-2">
            <img :src="mode.img" :alt="mode.description" class="rounded-lg m-4 shadow-2xl">
            <div class=" text-justify text-white px-10" >
                <h2 class="text-3xl uppercase font-extrabold p-4">{{ mode.title }}</h2>
                <p class="p-4">{{ mode.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    const modes = [
        { img: "https://wallpaper.forfun.com/fetch/24/249dd16667d521207ba66aa3475f9df7.jpeg",title:"UN PAYS TOUT ENTIER.", text: " Des déserts arides aux oasis luxuriantes, de la mer Méditerranée aux tombeaux de Gizeh, battez-vous contre d'anciennes et dangereuses factions ainsi que contre des bêtes sauvages en explorant ce pays gigantesque et imprévisible. Découvrez les grandes pyramides et l'Égypte ptolémaïque à l'époque de Cléopâtre !", description:"Beau paysage égyptien"},
        { img: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2017/10/Assassins-Creed-Origins-Combat.jpg",title:"Système de combat remanié.", text: "Découvrez des façons nouvelles de vous battre en pillant et en utilisant des centaines d'armes ayant chacune des caractéristiques et un niveau de rareté propres. Explorer les grandes pyramides et les tombeaux cachés de l'Égypte ancienne, rencontrez de nombreux personnages aux histoires mémorables au cours de votre périple, et découvrez l'histoire des origines de la Confrérie des Assassins.", description:"Combat nocturne"},
        { img: "https://global-img.gamergen.com/assassin-creed-origins-season-pass-dlc-calendrier-10-10-2017_0900875598.jpg",title:"Season Pass", text:"Le Season Pass offre l'accès à des contenus supplémentaires d'Assassin's Creed: Origins, et donc à d'autres possibilités d'aventure. Les détenteurs du Season Pass auront accès à : 500 crédits Helix Pack Horus (comprenant une nouvelle tenue, des armes, un bouclier et une monture)Pack Centurion romain (comprenant une nouvelle tenue, des armes, un bouclier etune monture)Contenu téléchargeable (DLC) The Curse of the PharaohsL'arme Lame CalamitéDLC The Hidden Ones. Sur console, les DLC, packs d'objets et la Lame Calamité peuvent être partagés avec tout autre compte actif sur le système.", description:"DLC Pass Season"}
    ]

</script>

<style scoped>
.board{

    background-image: url("https://images8.alphacoders.com/987/987028.jpg");
    background-attachment: fixed;
}
    .content{
        width: 70%;
        margin: 0 auto;
    }

</style>