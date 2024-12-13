<script lang="ts" setup>
import firstImage from '~/assets/marco-chilese-oMU-BCclJ5k-unsplash.jpg';

</script>
<template>
    <div>
        <ImageCard :imageUrl="firstImage" alt="fisk på tallerken" >
            <div class="flex flex-col space-y-3 justify-center w-[40%]">
                <p>The Salty Mariner er en restaurant som speiler den gamle garde og har vært vert til Ernest Heminghway, Ian Flemming, Oscar Wilde, Mae West, Marilyn Monroe og man merker fort at den bærer det i sitt hjerte.</p>
                <p>Åpningstider: 16:00 - 03:00</p>
                <p>Vi holder til på:  Fiskebryggen 12, 0150 Oslo.</p>
            </div>
        </ImageCard>
    </div>
</template>