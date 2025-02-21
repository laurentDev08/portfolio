<template>
    <div>
        <div>
            <h1 class="text-center p-4 text-6xl uppercase pb-20">le combat final</h1>
            <img src="https://www.renderhub.com/clickdamn/gallery/king-boo.png" alt="">
            <p class="boos text-xl p-4 text-justify pt-10">
                King Boo is the supreme leader of all the Boos, and the main antagonist of the Luigi's Mansion (series). Easily one of the darkest and most malignant characters in the franchise, at least compared to the original series version, King Boo is almost as much of a threat as Bowser. King Boo is also called "The Master of Illusions" due to his power to create illusions and give his Boo army the power of Spirit Balls.                
            </p>
        </div>
        <div class="flex justify-center pb-20">
            <img src="/images/luigi pic/King_Boo.webp" alt="" class="w-1/4 ">
        </div>
        <p class="boos text-xl p-4 text-justify pt-5 pb-10">
                Debuting as the lead antagonist in 2001's Luigi's Mansion on the Nintendo GameCube, he would later go on to make numerous appearances in the various Mario sports and party games before ultimately making his grandiose return in Luigi's Mansion: Dark Moon on the Nintendo 3DS, where he once again played foil to the titular Green plumber. In 2018, he'd reprise his role as the main antagonist of the updated rerelease of the first Luigi's Mansion with Luigi's Mansion (3DS) on the Nintendo 3DS. And lastly, he was the main antagonist in the third entry in the Luigi's Mansion series, Luigi's Mansion 3, on the Nintendo Switch. 
            </p>
        <div class="king grid grid-cols-2 pb-20">
            <div class="p-4" v-for="final in finals">   
                <img class="rounded-lg" :src="final.pic" alt="">    
            </div>
        </div>
    </div>  
</template>

<script setup>

const finals = [
        { pic:"https://i.ytimg.com/vi/8kB2syqzaiM/maxresdefault.jpg" },
        { pic:"https://assetsio.gnwcdn.com/Luigis-Mansion-3-Screenshot-2019-10-31-09-58-40.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" },
        { pic:"https://assetsio.gnwcdn.com/Luigis-Mansion-3-Screenshot-2019-10-31-09-58-50.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" },
        { pic:"https://assetsio.gnwcdn.com/Luigis-Mansion-3-Screenshot-2019-10-31-09-58-45.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" }
    ]

</script>

<style scoped>
    .boo{
        width: 100%;
        margin: 0 auto;
    }
    .boos{
        width: 60%;
        margin: 0 auto;
    }
    .king{
        width: 80%;
        margin: 0 auto;
    }
</style>