<template>
    <div class="king">
        <div class="size">
            <h1 class="text-center text-6xl p-4 pt-10 pb-10 font-bold uppercase">multiplayer</h1>
            <div class="grid grid-cols-2 pb-20 pt-20">
                <img src="/images/mario pic/bowser.png" alt="">
                <div class="grid grid-cols-2">
                    <div v-for="multi in multis">
                        <img :src="multi.mag" alt="">
                    </div>
                    <p class="text-white">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const multis = [
        { mag:"https://www.spiritgamer.fr/wp-content/uploads/2024/06/Super-Mario-Party-Jamboree-40.png" },
        { mag:"https://www.switch-actu.fr/wp-content/uploads/2024/06/SuperMarioPartyJamboree_scrn_17.png"},
        { mag:"https://thegamehaus.com/wp-content/uploads/2024/06/How-Many-Players-in-Super-Mario-Party-Jamboree.png"},
        { mag: "https://i.ytimg.com/vi/5nELfXUcPb8/maxresdefault.jpg"}
    ]
</script>

<style scoped>
    .king{
        background-image: url("https://wallpapercave.com/wp/wp2241769.png");
        background-attachment: fixed;
    }
    .size{
        width: 80%;
        margin: 0 auto;
    }
</style>