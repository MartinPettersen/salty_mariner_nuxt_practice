<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
const images = import.meta.glob('@/assets/*', { eager: true }) as Record<string, { default: string }>;
console.log("images", images)
const MENUS_QUERY = groq`*[
  _type == "menu"  && name in ["Forretter", "Hovedretter", "Desserter"]
]{_id, name, retter}`;



const { data: menusRef } = await useSanityQuery<SanityDocument[]>(MENUS_QUERY);

const menus = menusRef.value

console.log("menus ", menus);
</script>

<template>
  <div class="flex min-h-screen  py-60 items-center   w-full justify-center">
    <ul class="flex items-center justify-center flex-col  w-full gap-y-14">
      <li v-for="menu in menus" :key="menu._id" class="w-full">
        <h2 class="text-xl flex items-center justify-center  w-full font-semibold ">{{ menu.name }}</h2>
        <div class="flex items-center justify-center   w-full" v-for="(dish, index) in menu.retter" :key="index">
            
            <ImageCard v-if="menus && menus.length > 0" :imageUrl="images[`/assets/${dish.bilde}`]?.default" alt="dish.beskrivelse">
            <div class="flex w-[60%]  md:w-full flex-col items-center justify-center ">

              <div><strong>{{ dish.navn }}</strong>: {{ dish.beskrivelse }}</div>
              <div>
                <strong>Pris</strong>: {{ dish.pris }}
              </div>
            </div>
          </ImageCard>
          </div>
      </li>
    </ul>
  </div>

</template>
