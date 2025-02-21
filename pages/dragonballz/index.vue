<template>
    <div>
        <div class="h-screen flex justify-center items-center bg-black">
           <<nuxt-link to="/dragonballz/dragongame">
               <img src="/images/dbz pic/boule 4.png" alt="">           
           </nuxt-link>           
        </div>
       
    </div>
</template>

<script setup>

    definePageMeta({
        layout:"dbfighter"
    })

    useSeoMeta({
        title: "Dragonball Fighter Z",
        description: "La legende des guerriers Z"
    })

</script>

<style scoped>
   
</style>