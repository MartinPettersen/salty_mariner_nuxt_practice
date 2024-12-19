<script lang="ts" setup>
import firstImage from "~/assets/todd-diemer-SEFR62Upnqw-unsplash.jpg";
import { ref, watch } from "vue";

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 5);

const selectedTable = ref("test");
const email = ref("");
const name = ref("");
const date = ref(new Date());

const tableMap = ref({
  fourSeatTableRowOne: [
    {
      id: "f1",
      taken: false,
      selected: false,
    },
    {
      id: "f2",
      taken: false,
      selected: false,
    },
    {
      id: "f3",
      taken: false,
      selected: false,
    },
  ],
  fourSeatTableRowTwo: [
    {
      id: "f4",
      taken: false,
      selected: false,
    },
    {
      id: "f5",
      taken: false,
      selected: false,
    },
    {
      id: "f6",
      taken: false,
      selected: false,
    },
  ],
  twoSeatTable: [
    {
      id: "t1",
      taken: false,
      selected: false,
    },
    {
      id: "t2",
      taken: false,
      selected: false,
    },
    {
      id: "t3",
      taken: false,
      selected: false,
    },
    {
      id: "t4",
      taken: false,
      selected: false,
    },
    {
      id: "t5",
      taken: false,
      selected: false,
    },
  ],
  longTable: [
    {
      id: "l1",
      taken: false,
      selected: false,
    },
  ],
});
</script>
<template>
  <ImageCard :imageUrl="firstImage" alt="bilde av insiden av restauranten">
    <div class="flex item-end justify-center">
      <div class="flex items-center justify-center w-[100%]">
        <div class="flex flex-col space-y-4">
          <div class="flex w-full items-center justify-center">
            <h2 class="font-bold text-xl">Bestill Bord</h2>
          </div>
          <div class="bg-white flex w-full relative overflow-visible">
            calendar
          </div>

          <div class="flex justify-evenly space-x-3">
            <div class="flex space-x-1">
              <div class="border-[1px] rounded-full border-slate-700">
                <TableTwoSeatTable
                  :taken="false"
                  tableId="showcase1"
                  :selectedTable="selectedTable"
                  @update:selectedTable="selectedTable = $event"
                />
              </div>
              <p>Ledig</p>
            </div>
            <div class="flex space-x-1">
              <div class="border-[1px] rounded-full border-slate-700">
                <TableTwoSeatTable
                  :taken="true"
                  tableId="showcase2"
                  :selectedTable="selectedTable"
                  @update:selectedTable="selectedTable = $event"
                />
              </div>
              <p>Opptatt</p>
            </div>
            <div class="flex space-x-1">
              <div class="border-[1px] rounded-full border-slate-700">
                <TableTwoSeatTable
                  :taken="false"
                  tableId="showcase3"
                  selectedTable="showcase3"
                  @update:selectedTable="selectedTable = $event"
                />
              </div>
              <p>Valgt</p>
            </div>
          </div>
          <TableMap
            :tableMap="tableMap"
            :selectedTable="selectedTable"
            @update:selectedTable="selectedTable = $event"
          />
          <TableOrderTableForm :date="date" :tableId="selectedTable" />
        </div>
      </div>
    </div>
  </ImageCard>
</template>
