<template>
    <div>
        <img class="pb-20" src="https://wallpapercave.com/wp/wp14144903.jpg" alt="">
        <h1 class="text-center text-5xl uppercase font-bold">main actors</h1>
        <div class="profil grid grid-cols-5 p-8">
            <div class="p-5" v-for="profil in profils">
                <NuxtLink :to="`/hitman/${profil.id}`">
                    <img class="rounded" :src="profil.pic" alt="">
                </NuxtLink>
                <p class="text-center text-2xl font-bold mt-4">{{ profil.id }}</p>
                
            </div>
        </div>
    </div>
</template>

<script setup>

    const profils = [
    { id: "The Agent-47" , pic: "https://wallpapers.com/images/featured/hitman-sasuhf7pfuuh2yrz.jpg"},
    { id: "Diana Bunrwood", pic: "https://www.giantbomb.com/a/uploads/original/105/1056167/3414506-dianaburnwood.jpg"},
    { id: "The Shadow Client" , pic: "https://w0.peakpx.com/wallpaper/280/631/HD-wallpaper-the-shadow-client-hitman-3.jpg"},
    { id: "Olivia Hall" , pic: "https://steamuserimages-a.akamaihd.net/ugc/2298586614129315394/8C7CBD38C07B48D36D0A061005841F53CAF5F11C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"},
    { id: "The Constant" , pic: "https://m.media-amazon.com/images/M/MV5BMWZlZDQxNDUtYjA4MC00OTU5LWFlZGItNDdjMWZhY2IyOTFjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"}
]

// const profil = await useFetch("@/data/db.js")
</script>

<style scoped>
    .profil{
        width: 90%;
        margin: 0 auto;
        padding-bottom: 15%;
    }
    img{
        height: 150%;
        object-fit: cover;

    }
</style>