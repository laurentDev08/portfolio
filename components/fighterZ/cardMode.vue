<template>
    <div>
        <h1 class="text-6xl pb-20 text-center capitalize font-bold text-white">game mode</h1>
        <div class="card grid grid-cols-2 pb-40">
            <div v-for="mode in modes" class="p-8 pb-10">
                <img class="rounded-lg" :src="mode.pic" alt="">
                <div>
                    <h3 class="text-2xl p-2 capitalize font-bold text-white">{{ mode.title }}</h3>
                </div>
            </div>
        </div>
        <!-- <img src="/images/dbz pic/boule 1.png" alt=""> -->
    </div>
</template>

<script setup>

const modes = [
        { title: "mode histoire" , pic: "https://www.img1.psthc.fr/uploads/1517569495.jpeg", icon: "http://localhost:3000/_nuxt/images/dbz%20pic/boule%201.png"  },
        { title: "mode practice" , pic: "https://tomoyuki65.com/wp-content/uploads/2018/11/dbfz181124-4-c.jpg", icon: ""  },
        { title: "mode tournoi" , pic: "https://sm.ign.com/ign_br/screenshot/default/dragon-ball-fighterz-20180130020449_j8ye.jpg", icon: ""  },
        { title: "mode versus" , pic: "https://interfaceingame.com/wp-content/uploads/dragon-ball-fighterz/dragon-ball-fighterz-versus-1920x1080.png", icon: ""  }
      ]

</script>

<style scoped>
   .card{
    width: 80%;
    margin: 0 auto;
   }
   img{
    height: 100%;
   }
</style> 