<script lang="ts" setup>

    defineProps({
        imageUrl: String,
        altText: String,
        label: String,
        link: String,
    })

</script>


<template>

    <section class="flex flex-col items-center w-full z-0">
      <div class="w-full overflow-hidden">
        <div
        :style="{
            backgroundImage: `url(${imageUrl})`,
        }"
        class="relative min-h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover"
          role="presentation"
        >
          <img :src="imageUrl" :alt="altText" class="sr-only" />
        </div>
        <div class="bg-black py-20 flex items-center justify-center">
            <slot />
        </div>
      </div>
      <div
        :style="{
          backgroundImage: `url(${imageUrl})`,
        }"
        class="relative min-h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
        role="presentation"
      >
      <NuxtLink class="bg-black bg-opacity-[57%] p-4 hover:cursor-pointer hover:bg-opacity-[70%]" :to="link">{{ label }}</NuxtLink>

    </div>
    </section>

</template>