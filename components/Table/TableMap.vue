<script lang="ts" setup>
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import type { PropType } from "vue";
import type { TableMapType } from "~/types/Types";

const props = defineProps({
  selectedTable: String,
  tableMap: {
    type: Object as PropType<TableMapType>,
    required: true,
  },
});

const emit = defineEmits(["update:selectedTable"]);
</script>

<template>
  <div
    role="region"
    aria-labelledby="Bord Kart"
    class="bg-slate-700 rounded-sm w-full h-[400px] flex flex-col items-center justify-evenly"
  >
    <h2 id="bord-kart" class="sr-only">Bord Kart</h2>
    <div
      class="flex justify-evenly w-full"
      role="group"
      aria-labelledby="Fire-setter-bord-rad-en"
    >
      <h3 id="Fire-setter-bord-rad-en" class="sr-only">
        Fire setter bord rad en
      </h3>

      <div class="flex flex-row space-x-8">
        <div
          v-for="table in tableMap.fourSeatTableRowOne"
          class="flex flex-row"
        >
          <TableFourSeatTable
            :selectedTable="selectedTable"
            :tableId="table.id"
            :taken="table.taken"
            @update:selectedTable="emit('update:selectedTable', $event)"
          />
        </div>
      </div>
    </div>
    <div
      class="flex justify-evenly w-full"
      role="group"
      aria-labelledby="Fire-setter-bord-rad-to"
    >
      <h3 id="Fire-setter-bord-rad-to" class="sr-only">
        Fire setter bord rad to
      </h3>
      <div class="flex flex-row space-x-8">
        <div
          v-for="table in tableMap.fourSeatTableRowTwo"
          class="flex flex-row"
        >
          <TableFourSeatTable
            :selectedTable="selectedTable"
            :tableId="table.id"
            :taken="table.taken"
            @update:selectedTable="emit('update:selectedTable', $event)"
          />
        </div>
      </div>
    </div>
    <div
      class="flex justify-evenly w-full"
      role="group"
      aria-labelledby="to-setter-bord"
    >
      <h3 id="to-setter-bord" class="sr-only">To setter bord</h3>
      <div class="flex flex-row space-x-4">
        <div v-for="table in tableMap.twoSeatTable" class="flex flex-row">
          <TableTwoSeatTable
            :selectedTable="selectedTable"
            :tableId="table.id"
            :taken="table.taken"
            @update:selectedTable="emit('update:selectedTable', $event)"
          />
        </div>
      </div>
    </div>
    <div
      class="flex justify-evenly w-full"
      role="group"
      aria-labelledby="lang-bord"
    >
      <h3 id="lang-bord" class="sr-only">Lang bord {{ tableMap.longTable.length }}</h3>
      <div v-for="table in tableMap.longTable" class="flex flex-row">
          <TableLongTable
            :selectedTable="selectedTable"
            :tableId="table.id"
            :taken="table.taken"
            @update:selectedTable="emit('update:selectedTable', $event)"
          />
        </div>
    </div>
  </div>
</template>
