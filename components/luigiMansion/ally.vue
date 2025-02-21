<template>
    <div class="friends grid grid-cols-2  pt-20 pb-20">
        <h3 class="p-20 font-semibold capitalize text-4xl">les fidéles compagnons de luigi :</h3>
        <div class=" grid grid-cols-3 ">
            <div v-for="support in supports">
                <img :src="support.pic" class="p-2 rounded-full">
                <h3 class="text-2xl text-center font-semibold capitalize">{{ support.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>

    const supports = [
        { pic: "https://i.pinimg.com/originals/3e/46/c7/3e46c7981eb2085f875bd5ef84c324af.jpg", name:"le professor" },
        { pic: "https://pm1.aminoapps.com/7228/6fe45b20043140d2757285730d4e7bbfb74545dcr1-960-960v2_hq.jpg", name:"gluigi" },
        { pic: "https://i.pinimg.com/736x/b3/fb/cb/b3fbcbb91cefc4a5453f98d5337848b7.jpg", name:"PolterPup" }
    ]

</script>

<style scoped>
    .friends{
        width: 80%;
        margin: 0 auto;
    }
</style>