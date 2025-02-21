<template>
    <div >
        <div class="flex justify-center cursor-pointer pb-10 hover:scale-105 ">
            <img @click="shenron = !shenron" src="/images/dbz pic/7 boules.png" class="w-1/6" alt="">
        </div>
        
        <div v-show="shenron" class=" flex justify-center p-4">
            <img src="/images/dbz pic/shenron.png" class="w-3/5" alt="">  
        </div>
    </div>
</template>

<script setup>

    const shenron = ref(false)

</script>

<style scoped>

</style>