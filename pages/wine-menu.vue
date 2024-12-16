<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const MENUS_QUERY = groq`*[
  _type == "menu"  && name in ["Vin", "Øl", "Drinker"]
]{_id, name, retter}`;



const { data: menusRef } = await useSanityQuery<SanityDocument[]>(MENUS_QUERY);

const menus = menusRef.value

console.log("menus ", menus);
</script>

<template>
  <div class="flex min-h-screen  py-60 items-center justify-center">
    <ul class="flex items-center justify-center flex-col gap-y-14">
      <li v-for="menu in menus" :key="menu._id" class="">
        <h2 class="text-xl flex items-center justify-center font-semibold ">{{ menu.name }}</h2>
          <div class="flex items-center justify-center" v-for="(dish, index) in menu.retter" :key="index">
            <div class="flex w-[90%] sm:w-[60%] flex-col items-center justify-center ">

              <div><strong>{{ dish.navn }}</strong>: {{ dish.beskrivelse }}</div>
              <div>
                <strong>Pris</strong>: {{ dish.pris }}
              </div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
