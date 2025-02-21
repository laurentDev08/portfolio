<template>
    <div class="grid grid-cols-2  mx-auto p-4">
        <div class="p-2">
            <NuxtLink to="/luigi">
                <img class="mb-4 rounded" src="https://wallpapers.com/images/featured/luigis-mansion-3-hcxkhgztcuqwv01n.jpg" alt="">            
            </NuxtLink>
            <NuxtLink to="/hitman">
                <img class="rounded " src="https://cms.ioi.dk/media/wdbdt1jk/woa_product_trailer_endslate-1024x576.jpg?width=2560" alt="">                
            </NuxtLink>
        </div>
        <div class="p-2">
            <NuxtLink to="/batman">
                <img class="bat rounded" src="https://img.hype.games/cdn/e419710a-cd65-4567-8168-b5f814968ce8bao-cover.jpg" alt="">               
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.bat{
        height: 100%;   
        object-fit: cover;   
    }


</style>