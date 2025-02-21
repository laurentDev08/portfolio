<template>
    <div class="dark47 p-5 flex justify-between mx-auto pb-1 text-white fixed top-0 left-0 right-0">
        <div class="flex ">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/ramen-iconset-linear-icon-set/playstation-6.png" alt="">
            <NuxtLink to="/" class="mx-2 text-xl capitalize">game time</NuxtLink>
        </div>
        <button @click="toggleDark()">
            <i v-if="isDark" class="fa-solid fa-moon "></i>         
            <i v-else class="fa-solid fa-sun"></i>
        </button>
        
    </div>
        <div>
            <slot />
        </div>
</template>

<script setup>
    import { useDark, useToggle } from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<style scoped>
    img{
        width: 40px;
    }
</style>