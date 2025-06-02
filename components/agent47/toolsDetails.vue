<template>
    <div>
        <div class="tool">        
            <h1 class="text-center text-5xl uppercase font-bold pb-20">main 47's tools</h1>
            <div class="grid grid-cols-2 p-4 pb-20 border-b-2" v-for="item in items">
                    <div >
                        <img :src="item.pic" alt="">
                         <h3 class="text-center text-3xl capitalize font-bold">{{ item.title }}</h3>
                    </div>
                    <p class="text-xl text-justify">{{ item.content }}</p>
            </div>
        </div>
        <h2 class="text-center text-5xl uppercase font-bold pt-40 pb-20">code weapon ... </h2>
        <div class="pt-20">
            <img src="https://wallpapercave.com/wp/wp13141661.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
    const items = [
        { pic:"http://localhost:3000/_nuxt/images/47%20tools/silver%20gun.png", title:"silver baller", content:"L'ICA19 Silverballer est un pistolet disponible dans la trilogie Monde de l'Assassinat. Il s'agit d'une version argentée de l'ICA19, fortement inspirée de l'arme signature de l'agent 47 " },
        { pic:"http://localhost:3000/_nuxt/images/47%20tools/briefcase.png", title:"brief case", content:"The ICA Briefcase Mk III is a container featured in HITMAN™ III, and is used to conceal illegal items and thrown at targets to incapacitate them." },
        { pic:"http://localhost:3000/_nuxt/images/47%20tools/corde%20piano.png", title:"piano man", content:"Piano Man is an assassinaiton challenge to achieve in every location. To accomplish this challenge, Agent 47 must assassinate any of the location's targets by garroting them with some Fiber Wire." },
        { pic:"http://localhost:3000/_nuxt/images/47%20tools/serum.png", title:"poison serum", content:"The Serum is an optional assassination method 47 can use in the mission Untouchable in HITMAN III" },
        { pic:"http://localhost:3000/_nuxt/images/47%20tools/snipper%20gun.png", title:"Jaeger 7 Covert", content:"The Jaeger 7 Covert is a semi-automatic sniper rifle with a digital camp print introduced in HITMAN III." },
    ]
</script>

<style scoped>
    .tool{
        width: 60%;
        margin: 0 auto
    }
</style>