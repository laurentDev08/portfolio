<template>
    <div class="p-5 ">
        <div class="grid grid-cols-3 mx-auto">
            <NuxtLink to="/dragonballz">
                <img class="rounded p-2" src="https://global-img.gamergen.com/dragon-ball-fighterz-goku-ultra-instinct-image_0900944331.jpg" alt="">
            </NuxtLink>
            <NuxtLink to="/assassin">
                <img class="creed rounded p-2" src="https://i.pinimg.com/originals/52/e7/65/52e765144dfd68260558ab81f0f8d588.jpg" alt="">
            </NuxtLink>
            <NuxtLink to="/mario">
                <img class="marioBros rounded p-2" src="https://generation-nintendo.com/images/game/hq1ptbd9.jpg" alt="">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
    img{
        height: 100%;
    }
    .marioBros,.creed{
        object-fit: cover;
    }
</style>