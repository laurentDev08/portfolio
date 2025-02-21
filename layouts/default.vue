<template>
    <div class="p-5 flex justify-between mx-auto pb-1 dark:text-white">
        <div class="flex">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/ramen-iconset-linear-icon-set/playstation-6.png" alt="">
            <NuxtLink to="/" class="mx-2 text-black text-xl capitalize">game time</NuxtLink>
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