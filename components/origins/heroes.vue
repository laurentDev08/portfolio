<template>
    <div>
        <h1 class="text-center uppercase text-4xl p-4 my-14">la premiere confrerie des assassins</h1>
        <div class="body grid grid-cols-2 border-b-2">
            <div v-for="character in characters" class="mx-10">
                <img :src="character.img" alt="" class="rounded-lg shadow-2xl shadow-orange-300">
                <h3 class="text-3xl font-bold py-2 tracking-widest">{{ character.name }}</h3>
                <p class="text-justify pt-2">{{ character.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

    const characters = [
    { name: "Bayek", img:"https://images3.alphacoders.com/865/865789.jpg", content:"Bayek de Siwa (85 ou 86 av. J.-C. – NC) fut le dernier Medjaÿ d'Égypte et fondateur avec sa femme Aya de Ceux qu'on ne voit pas, future Confrérie des Assassins. Il hérita du titre de medjaÿ de son père, et consacra sa vie à protéger son peuple.  "},
    { name: "Aya", img:"https://i.pinimg.com/originals/b3/0e/40/b30e407503eb38a3105589d79dd88bbf.jpg", content:"Amunet (v. 85 AEC - NC) née Aya d'Alexandrie, était une agent de Cléopâtre VII sous la dynastie des Lagides et fondatrice de Ceux qu'on ne voit pas avec son époux Bayek de Siwa, au sein duquel elle en devint l'un des Mentors."}
    ]
</script>

<style scoped>
    .body{
        width: 80%;
        margin: 0 auto;
    }
    img{
        width: 100%;
        height: 70%;
        object-fit: cover; 
    }
</style>