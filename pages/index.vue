<script setup lang="ts">

    //const { sayHello } = useUtils()
    //sayHello("evening")

    //const { $sayHello } = useNuxtApp()

    //$sayHello("Testing plugins")

    // const counter = useCounter();
    //console.log(counter)
    //<img src="~/assets/food-photographer-Sz0sTpO8U6g-unsplash.jpg" alt="fisk på tallerken" />
    import firstImage from '~/assets/food-photographer-Sz0sTpO8U6g-unsplash.jpg';
    import secondImage from '~/assets/michael-kucharski-7L0lx6_abTY-unsplash.jpg';
    import thirdImage from '~/assets/stefan-grage-pt6YX-LkQ64-unsplash.jpg';
    import fourthImage from '~/assets/santiago-munoz-FGECxLbjpKg-unsplash.jpg';
    import fifthImage from '~/assets/maksim-istomin-umPydBBu-5A-unsplash.jpg';
    import sixthImage from '~/assets/mohammad-metri-vGOqRDtfZPU-unsplash.jpg';
    
    
</script>

<template>
    <div class="flex flex-col items-center justify-center md:text-3xl">

        <ImageCard :imageUrl="firstImage" alt="fisk på tallerken" >
            <div class="flex items-center justify-center w-[40%]">
                <p>"The sea offers no apologies, and neither does The Salty Mariner. It’s where the oysters taste like brine-soaked poetry, and the whiskey burns like the truths you’d rather not tell. A place for sailors, dreamers, and fools alike—my kind of sanctuary."</p>
            </div>
        </ImageCard>
        <ImageCardWithButton :imageUrl="secondImage" alt="Rekker" label="Meny" link="/food-menu">
            <div class="flex items-center justify-center w-[40%]">
                <p>"At The Salty Mariner, one does not merely dine; one indulges in an affair with the sea itself. The martinis are cold, the lobster decadently warm, and the atmosphere brims with a certain...dangerous elegance. It’s the sort of place where secrets are exchanged as readily as glances—a fitting haven for those who live by wit and appetite alike."</p>
            </div>
        </ImageCardWithButton>
        <ImageCardWithButton :imageUrl="thirdImage" alt="alkohol" label="Vinnkart" link="/wine-menu">
            <div class="flex items-center justify-center w-[40%]">
                <p>"To dine at The Salty Mariner is not merely to eat; it is to engage in an art form—a theater where the ocean performs nightly, and the wine sparkles like stolen starlight. I’ve taken the liberty of securing a table for myself, naturally, by the window where the waves flirt shamelessly with the shore. For one should never dine without an audience, even if it is merely the sea."</p>
            </div>
        </ImageCardWithButton>
        <ImageCardWithButton :imageUrl="fourthImage" alt="restaurant bord" label="Bestill Bord" link="/order">
            <div class="flex items-center justify-center w-[40%]">
                <p>"You know, The Salty Mariner isn’t just a restaurant—it’s like a little love affair with the ocean. The seafood tastes like it was kissed by the waves, and the staff? Oh, they’re all so lovely, like they stepped out of a dream. The waitresses have this sparkle in their eyes, like they know all the secrets of the sea. And the way they move—it’s like poetry in high heels. I just love it here... it feels like magic, doesn’t it?"</p>
            </div>
        </ImageCardWithButton>
        <ImageCardWithButton :imageUrl="fifthImage" alt="dame ved piano" label="Kontakt" link="/contact">
            <div class="flex items-center justify-center w-[40%]">
                <p>"You know, there’s something about this place... it’s more than just a meal. It’s the kind of spot where everything feels a little bit special—where even the air has a certain magic to it. The seafood? Delicious, of course. But it’s the way they make you feel, like you’re the only one in the room. It’s easy to fall in love here, with the food, the atmosphere... maybe even a little with the people."</p>
            </div>
        </ImageCardWithButton>
        
        <ImageCardWithButton :imageUrl="sixthImage" alt="dame med hat" label="Om Oss" link="/about">
            <div class="flex items-center justify-center w-[40%]">
                <p>We look forward To meeting you</p>
            </div>
        </ImageCardWithButton>
    </div>
</template>