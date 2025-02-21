<template>
    <div class="board text-white">
        <img src="/images/assassin origins/dieux.png" alt="">
        <h1 class="text-center uppercase text-5xl pt-10 my-10 ">affrontez les dieux égyptiens</h1>
        <div class="contain p-10 pt-2">
            <div v-for="god in gods" class="p-6 m-10 ">
               <img class="mag rounded-lg shadow-2xl shadow-orange-300" :src="god.img" alt="">
               <h2 class="text-4xl font-bold capitalize pt-4">{{ god.name }}</h2>
               <p class="pt-4 text-justify text-xl">{{ god.content }}</p>
            </div>

        </div>       
    </div>
</template>

<script setup>

    const gods = [
        {name:"anubis", img:"https://img.goodfon.com/original/1920x1080/4/45/origins-ubisoft-assassin-s-creed-origins-assassin-s-creed-1.jpg", content:"Anubis (prononcé [a.ny.bis] Écouter) est un dieu funéraire de l'Égypte antique, maître des nécropoles et protecteur des embaumeurs, représenté comme un grand canidé noir couché sur le ventre, sans doute un chacal ou un chien sauvage, ou comme un homme à tête de canidé. La signification du mot Anubis, inpou en égyptien ancien, Anoub en copte, Ἄνουβις / Anoubis en grec ancien, demeure obscure : de nombreuses explications ont été avancées, mais il peut s'agir simplement d'une onomatopée traduisant le hurlement du chacal. La forme canine du dieu a peut-être été inspirée aux Anciens Égyptiens par le comportement des canidés, souvent charognards opportunistes errant la nuit dans les nécropoles à la recherche de cadavres." },
        { name: "sekhmet", img:"https://sm.ign.com/ign_in/gallery/a/assassins-/assassins-creed-origins-december-update_c2j7.jpg",  content: "Déesse guerrière personnifiant la puissance destructrice du Soleil, elle est l'instrument de la vengeance de Rê. Elle aurait été spécialement créée par lui pour réprimer les hommes révoltés contre lui, comme l'indique le Livre de la vache du ciel, dont le texte est gravé sur les parois de plusieurs tombeaux de la vallée des Rois. Son corps brûlant et ses flèches incandescentes détruisent les ennemis du roi, déchaînant la fureur de Rê sur les avatars d'Isfet et les ennemis du pharaon. Elle était celle qui conseillait et guidait les pharaons au combat. Mais, épouse de Ptah et mère de Néfertoum dans la triade memphite, elle est aussi, dans ce rôle maternel, la déesse de la guérison et du foyer."},
        { name: "sobek", img:"https://media.moddb.com/images/games/1/62/61480/Assassins_Creed_Origins_Trials_of_the_Gods_Sobek.jpg",  content: "Dans la mythologie égyptienne, Sobek (en grec : Suchos ou Sucos) « Crocodile », est le fils de la déesse aquatique Neith et d'un des dieux jumeaux3. Son statut de dieu de l’eau et de la fertilité le fait adorer partout dans le delta du Nil, la région du Fayoum et à Kôm Ombo. Dans le temple de Kôm Ombo, il est adoré sur un pied d'égalité avec Haroëris, Horus l'Aîné (le temple de Sobek et Haroëris, avec deux dieux principaux, présente un fait unique en Égypte). La présence de crocodiles dans le Nil était pour les Égyptiens l’annonce d'une crue favorable aux récoltes : les crocodiles étaient donc des animaux sacrés à cette époque. Maître des eaux, il est le dieu qui irrigue les champs."}
    ]

</script>

<style scoped>
    .contain{
        width: 70%;
        margin: 0 auto;
    }
    .mag{
        width: 100%;
    }

    .board{
        background-image: url("https://thatgreendude.com/wp-content/uploads/2018/01/assassins-creedc2ae-origins__30.jpeg");
        background-attachment: fixed;
    }
</style>