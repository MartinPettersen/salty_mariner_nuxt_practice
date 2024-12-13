<script lang="ts" setup></script>

<template>
        <nav class="">
      <ul class="flex bg-black bg-opacity-[57%] p-4 px-8 text-white w-full flex-col md:flex-row space-x-4 space-y-2 md:space-y-0 items-center justify-center ">
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
      </ul>
    </nav>
</template>