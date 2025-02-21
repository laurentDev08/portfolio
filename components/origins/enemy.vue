<template>
    <div class="pb-16">
        <h1 class="text-center uppercase text-4xl p-4 my-8">combattez de puissants ennemis</h1>
        <div class="body grid grid-cols-3 m-10 pb-4">
            <div v-for="enemy in enemys" class="m-10 p-6">
                <img :src="enemy.img" alt="" class="rounded-lg shadow-2xl shadow-orange-300">
                <h3 class="text-2xl font-bold py-2 tracking-widest capitalize">{{ enemy.name }}</h3>
                <p class="text-justify ">{{ enemy.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

    const enemys = [
        { name:"tutan khamun", img: "https://wallpapers.com/images/hd/assassin-s-creed-origins-tutankhamun-uew3moq8hxtpe3wz.jpg", content:"Tutan Khamun était un pharaon de la XVIIIe dynasty de l'égypte, il était le fils d'Akhenaton. "},
        { name:"ramesess II", img: "https://wallpapers.com/images/hd/assassin-s-creed-origins-rameses-ii-nnin6yx9onn6lqp2.jpg", content:"Ramsès II, est le troisième pharaon de la XIXe dynastie égyptienne, au Nouvel Empire. "},
        { name:"nefertiti", img: "https://wallpapers.com/images/hd/assassin-s-creed-origins-nefertiti-x9wqtqzj4czc0k1h.jpg", content:"Néfertiti est une reine d'Égypte, épouse d'Akhenaton, l'un des rois de la XVIIIe dynastie."},
        { name:"septimius", img: "https://wallpapers.com/images/hd/assassin-s-creed-origins-septimius-lq8oqzrwo2l2t2z9.jpg", content:"Lucius Septimius dit le Chacal protége les rois et les reines ptolémaïques. "},
        { name:"cleopatra", img: "https://pliki.ppe.pl/storage/93e80bd24f6f8488a2c3/93e80bd24f6f8488a2c3.jpg", content:"Cléôpatra est la fille du pharaon Ptolemy V et de Cléopâtra Ire Syra "},
        { name:"caesar", img: "https://cdn.selectgame.net/wp-content/uploads/2023/08/Assassins-CReed-Julio-Cesar.jpg", content:"Jules César, appelé Caesar, est un général, homme d'État romain. Empreur de Rome."},
        { name:"ptolemy", img: "https://pliki.ppe.pl/storage/7be5d2a5098ee6031db7/7be5d2a5098ee6031db7.jpg", content:"Ptolémée est un pharaon de la dynastie des Lagides. A quatorze ans il devint roi de Chypre "},
        { name:"hetepi", img: "https://global-img.gamergen.com/assassin-creed-origins-hetepi-bis-14-09-2017_0900873458.jpg", content:"Hetepi, était un prêtre Pasherenptahet, membre de l'Ordre des Anciens lors du règne de Cléopâtre."},
        { name:"the duelist", img: "https://global-img.gamergen.com/assassin-creed-origins-the-duelist-bis-14-09-2017_0900873456.jpg", content:"The Duelist était un gladiator chinois, c'est l'un  des champions de l'arène de Cyrene"},
        { name:"medunamun", img: "https://pliki.ppe.pl/storage/e8219871c3e3ad394c22/e8219871c3e3ad394c22.jpg", content:"Medunamun , alias The Ibis était membres de l'ordre  des anciens sous le régne de Ptolemy "},
        { name:"khaliset", img: "https://global-img.gamergen.com/assassin-creed-origins-khaliset-14-09-2017_0900873459.jpg", content:"Khaliset, surnommée La Hyène, était une membre de l'Ordre des Anciens sous le règne de Ptolemy. "},
        { name:"egypt tyranny", img: "https://www.psu.com/wp/wp-content/uploads/2020/09/Assassins-Creed-Origins-PS4-Wallpapers-24.jpg", content:"L'Égypte vacille sous le règne de monarques inexpérimentés de l'ordre ancien. "}
    ]

</script>

<style scoped>
     .body{
        width: 80%;
        margin: 0 auto;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
</style>