<template>
    <div class="dark:darkLuigi dark:text-white">
        <div class="pos p-4 pb-20">
            <img class="mb-4 rounded" src="https://wallpapers.com/images/featured/luigis-mansion-3-hcxkhgztcuqwv01n.jpg" alt="">
        </div>        
            <LuigiMansionHotel />  
            <LuigiMansionFriends /> 
            <LuigiMansionAlly />  
            <LuigiMansionAcolyte />  
            <LuigiMansionRoiBoo />
</div>
</template>

<script setup>
    definePageMeta({
        layout: "luigi-details"
    })

    useSeoMeta({
        title: "Luigi's Mansion 3",
        description: "Luigi fantome"
    })
</script>

<style scoped>
   .pos{
    width: 75%;
    margin: 0 auto;
   }
   .breakPoint{
        background-image: url("https://image.makewebeasy.net/makeweb/0/Spf7nJjLD/ACC_XBOXONE/Nintendo_Switch_Standard_02_6.jpg");
        background-attachment: fixed;
    }
</style>