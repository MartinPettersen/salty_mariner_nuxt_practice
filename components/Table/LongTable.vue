<script lang="ts" setup>
const props = defineProps({
  taken: Boolean,
  selectedTable: String,
  tableId: String,
});

const emit = defineEmits(["update:selectedTable"]);

const handleSelection = () => {
    console.log("handleselection")
    if (!props.taken) {
        console.log("selectTable " , props.selectedTable)
        console.log("change to ", props.tableId)
        emit("update:selectedTable", props.tableId);
    }   
}

</script>

<template>
  <div
    role="button"
    @click="handleSelection"
    :class="[
      'w-40 h-6 ',
      taken ? 'bg-[#FF6F61]' : (selectedTable == tableId) ? 'bg-[#4A90E2]' : 'bg-gray-200',
      !taken && 'hover:cursor-pointer',
      !taken && 'hover:bg-[#7ab8ff]',
    ]"
  ></div>
</template>
