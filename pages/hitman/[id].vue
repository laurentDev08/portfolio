<template>
    <div>
        <h1 class="text-center capitalize">hitman profil {{ id }}</h1>
        <Agent47TeamDetails :h= "hit" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    // const { data: hit } = await useFetch((profils)+ id)

//     const profils = 
//         [
//         { id: "The Agent-47" , pic: "https://wallpapers.com/images/featured/hitman-sasuhf7pfuuh2yrz.jpg"},
//         { id: "Diana Bunrwood", pic: "https://www.giantbomb.com/a/uploads/original/105/1056167/3414506-dianaburnwood.jpg"},
//         { id: "The Shadow Client" , pic: "https://w0.peakpx.com/wallpaper/280/631/HD-wallpaper-the-shadow-client-hitman-3.jpg"},
//         { id: "Olivia Hall" , pic: "https://steamuserimages-a.akamaihd.net/ugc/2298586614129315394/8C7CBD38C07B48D36D0A061005841F53CAF5F11C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"},
//         { id: "The Constant" , pic: "https://m.media-amazon.com/images/M/MV5BMWZlZDQxNDUtYjA4MC00OTU5LWFlZGItNDdjMWZhY2IyOTFjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"}
        
// ]

            
</script>

<style scoped>

</style>