<template>
    <div>
        <div class="ground flex justify-around">
            <img class="pic" src="/images/bat origins/joker card.png" alt="">
            <img class="pic" src="/images/bat origins/joker haha.png" alt="">
        </div>
        <div class="pb-10">
            <video class="rounded-lg  my-14 mx-auto" src="/images/bat origins/Lacey Towers Cutscene.mp4" controls="controls"></video>
        </div>
        <div class="joke grid grid-cols-2 border-2  rounded-xl shadow-black shadow-xl 
        bg-gradient-to-r from-emerald-600 to-purple-800 to-35%">
            <img src="/images/bat origins/jk1.png" alt="" class="mag ml-20 ">
            <div class="mr-20 pt-16 text-gray-300">
                 <h2 class=" text-4xl pb-4 uppercase font-bold">the joker</h2>
                <ul>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">nom complèt : <br>
                        <span class="text-xl uppercase font-bold">inconnu</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">surnom : <br>
                        <span class="text-xl uppercase font-bold">Mr J</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">nom secrèt : <br>
                        <span class="text-xl uppercase font-bold">red hood</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">activité : <br>
                        <span class="text-xl uppercase font-bold">super vilain</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">allié : <br>
                        <span class="text-xl uppercase font-bold">harley queen</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">ennemi : <br>
                        <span class="text-xl uppercase font-bold">batman</span>
                    </li>
                    <li class="text-lg capitalize border-b-2 my-4 pb-2">famille : <br>
                        <span class="text-xl uppercase font-bold">inconnu</span>
                    </li>
                </ul>
                <p class="py-2 text-justify text-lg">Lors du soir de Noël, lorsque le Joker déguisé en Black Mask tente de déclencher une émeute, Batman entre dans la prison pour l'arrêter. Il tue le commissaire Gillian B. Loeb et quitte la prison.</p>          
            </div>
        </div> 
        <div class="pt-36 pb-10">
            <img src="https://wallpapers.com/images/hd/batman-arkham-origins-wallpaper-ao09atleqceb6on5.jpg" alt="">
        </div>      
    </div>
</template>

<script setup>

    const jokers = [
        { name: "inconnu", surname: "Mr J", secretID: "red hood", activité: "super criminel",
            allié: "harley queen", ennemi:"batman", famille: "inconnu"
        }
    ]

</script>

<style scoped>
    .joke{
        width: 70%;
        margin: 0 auto;
    }
    .mag{
        width: 60%;
    }
    .pic{
        width: 40%;
    }
   .ground{
    background-image: url("https://wallpapercave.com/wp/wp6560543.jpg");
   }
</style>