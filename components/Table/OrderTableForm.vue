<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import type { Reservation } from "~/types/Types";

const props = defineProps({
  date: Date,
  tableId: String,
  
});

const email = ref("");
const phoneNumber = ref("");
const name = ref("");

const router = useRouter()

const submitOrder = async (event: Event) => {
  event.preventDefault();
  const url = import.meta.env.VITE_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const order = {
    reservationId: "-1",
    name: name.value,
    phone: phoneNumber.value,
    email: email.value,
    date: props
      .date!.toLocaleDateString("no")
      .replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$1/$2/" + "$3".slice(-2)),
    time: "19:00",
    tableId: props.tableId,
    statis: "venter",
  };
  const response:Reservation = await $fetch(`${url}reservation`, {
    method: "POST",
    headers: { api_token: apiToken || "" },
    body: order,
  });

  if (response.reservationId == "-1" ){
    router.push("/")
  }
  console.log("response", response);
};
</script>

<template>
    <div>
      <p>Du vil få tilsendt bekreftelse på E-post og SMS</p>
      <div>
        <p>Navn:</p>
        <input
          class="w-full text-black"
          placeholder="Ditt Navn"
          v-model="name"
          required
        />
      </div>
      <div>
        <p>E-post:</p>
        <input
          class="w-full text-black"
          placeholder="Din epost"
          v-model="email"
          required
        />
      </div>
      <div>
        <p>Telefon</p>
        <input
          class="w-full text-black"
          placeholder="Ditt Telefon Nummer"
        v-model="phoneNumber"
          required
        />
      </div>
      <div class="w-full flex items-center justify-center pt-8">
        <button
            @click="submitOrder"
          class="bg-[#4A90E2] p-2 flex items-center justify-center w-[66%]"
        >
          <p class="font-bold text-lg">Bestill</p>
        </button>
      </div>
    </div>
</template>
