<template>
    <div>
        <img src="https://images5.alphacoders.com/619/thumb-1920-619465.jpg" alt="">
        <h1 class="text-center uppercase text-5xl pt-10 my-10 ">les huits assassins</h1>
        <div class="pb-10">
            <video class="rounded-lg  my-14 mx-auto" src="/images/bat origins/Batman_Arkham_Origins_All_8_Assassins.mp4" controls="controls"></video>
        </div> 
        <div class="bg">
            <div class="contain">
                <div class="grid grid-cols-4 py-10">
                    <div v-for="assassin in assassins" class="m-4 pt-20">
                       <img class="mag rounded-t-lg bg-gradient-to-t from-gray-950 to-sky-800 p-1" :src="assassin.pic" alt="">
                       <h3 class="letter bg-gradient-to-b from-gray-950 to-sky-800 p-2 rounded-b-lg text-gray-400 text-xl text-center font-bold tracking-widest capitalize">{{ assassin.name }}</h3>
                    </div>
                </div>
                <img class="mx-auto py-20 " src="https://cittadiniperbatman.wordpress.com/wp-content/uploads/2013/06/1011176_471044629653104_522422428_n.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

    const assassins = [
        { pic:"https://i.ytimg.com/vi/SOzcUnj2tn8/sddefault.jpg", name:"bane"},
        { pic:"https://i.ytimg.com/vi/3eBK1MQBg1E/sddefault.jpg", name:"killer croc"},
        { pic:"https://i.ytimg.com/vi/-flv_77c9Zk/sddefault.jpg", name:"electrocutioner"},
        { pic:"https://i.ytimg.com/vi/bKHA3iNO8rU/sddefault.jpg", name:"shiva"},
        { pic:"https://i.ytimg.com/vi/1iIPB01AUvQ/sddefault.jpg", name:"copperhead"},
        { pic:"https://i.ytimg.com/vi/rivYsDAmGOY/sddefault.jpg", name:"dead shot"},
        { pic:"https://i.ytimg.com/vi/h9ojeSv6uXE/sddefault.jpg", name:"deathstroke"},
        { pic:"https://i.ytimg.com/vi/5CoVgFxlLz0/sddefault.jpg", name:"firefly"}
    ]

</script>

<style scoped>
    .contain{
        width: 80%;
        margin: 0 auto;
    }
    .mag{
        width: 100%;
    }

    .bg{
        background-image: url("https://img.goodfon.com/original/1920x1080/d/63/batman-arkham-knight-betmen-1818.jpg");
        background-attachment: fixed;
    }
    
</style>