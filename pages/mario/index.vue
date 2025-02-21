<template>
    <div>
        <div class="star h-screen flex justify-center items-center">
           <<nuxt-link to="/mario/marioJamboree">
               <img src="/images/mario pic/star.png" alt="">           
           </nuxt-link>           
        </div>
       
    </div>
</template>

<script setup>

    definePageMeta({
        layout:"mario"
    })

    useSeoMeta({
        title: "Mario Party",
        description: "mario bros"
    })

</script>

<style scoped>
   
.star{
    background-image: url("https://images3.alphacoders.com/235/thumb-1920-235967.jpg");
}

</style>