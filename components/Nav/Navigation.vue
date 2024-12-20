<script lang="ts" setup>
import { ref } from "vue";
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <nav :class="showMenu ? '' : 'hidden md:flex'">
    <ul
      class="flex bg-black bg-opacity-[57%] p-4 px-8 text-white w-full flex-col md:flex-row space-x-4 space-y-2 md:space-y-0 items-center justify-center"
    >
      <li>
        <NuxtLink to="/">Hjem</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/food-menu">Meny</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/wine-menu">Bar</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/order">Bestill</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Kontakt</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">Om Oss</NuxtLink>
      </li>
      <li>
        <button class="md:hidden" @click="toggleMenu">Lukk</button>
      </li>
    </ul>
  </nav>
  <button
    @click="toggleMenu"
    :class="[
      'bg-black bg-opacity-[57%] p-4 px-8 text-white md:hidden',
      showMenu ? 'hidden' : '',
    ]"
  >
    Meny
  </button>
</template>
