<template>
    <div class="board">
        <div class="grid grid-cols-2 pb-20">
            <div v-for="mode in modes" class="m-4">
                <img :src="mode.pic" alt="" class="rounded-lg shadow-xl  shadow-gray-800">
                <div class="m-2 pt-2">
                    <h2 class="uppercase font-extrabold">{{ mode.name }}</h2>
                    <p class="capitalize">{{ mode.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const modes = [
        { pic:"https://e1.pxfuel.com/desktop-wallpaper/409/984/desktop-wallpaper-batman-arkham-knight-gotham-city.jpg", name:"bat signal", content:"le signal qui déchire le ciel."},
        { pic:"https://static.psthc.fr/imgT/2_1436205695.jpg", name:"carte de gotham city", content:"parcourez la ville pour éliminer la menace."},
        { pic:"https://i.ytimg.com/vi/zzWjKN66grc/maxresdefault.jpg", name:"costumes de batman", content:"débloquez-les en accomplissant des missions."},
        { pic:"https://cdnb.artstation.com/p/assets/images/images/001/733/303/large/ronan-mahon-rmahongcpd-7.jpg?1451941261", name:"gotham city police départment", content:"le commissaire gordon vous traquera avec sa brigade."},
    ]

</script>

<style scoped>
    .board{
        width: 60%;
        margin: 0 auto;
    }
    img{
        width: 100%;
    }
</style>