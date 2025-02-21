<template>
    <div class="p-5 flex justify-between mx-auto pb-1 text-white fixed top-0 left-0 right-0">
        <div class="flex">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/ramen-iconset-linear-icon-set/playstation-6.png" alt="">
            <NuxtLink to="/" class="mx-2 capitalize">
                <span class="text-red-400 text-2xl font-extrabold">g</span>
                <span class="text-green-400  text-2xl font-extrabold">a</span>
                <span class="text-yellow-400  text-2xl font-extrabold">m</span>
                <span class="text-cyan-300  text-2xl font-extrabold">e</span>
                <span class="text-yellow-400  text-2xl font-extrabold"> t</span>
                <span class="text-cyan-300  text-2xl font-extrabold">i</span>
                <span class="text-red-400  text-2xl font-extrabold">m</span>
                <span class="text-green-400  text-2xl font-extrabold">e</span>
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/mario" class="m-4 capitalize">home</NuxtLink>         
        </div>
        
    </div>
        <div>
            <slot />
        </div>
</template>

<script setup>
   
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>