<script lang="ts" setup>
import { ref } from "vue";
import firstImage from "~/assets/mahdi-chaghari-rPrGDIe3NsE-unsplash.jpg";
import secondImage from "~/assets/mahdi-chaghari-KnKo-xq6aUo-unsplash.jpg";

const subject = ref("");
const content = ref("");
const email = ref("");
const name = ref("");

const submitMessage = async(event: Event) => {
  event.preventDefault();

  const url = import.meta.env.VITE_URL;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const message = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: content.value,
    }

  const response = await $fetch(`${url}message`, {
    method: 'POST',
    headers: { api_token: apiToken || "" },
    body: message,
  })

  console.log("response", response)

};
</script>

<template>
  <ImageCard :imageUrl="firstImage" alt="fisk på tallerken">
    <div class="flex item-end justify-center">
      <div class="flex items-center justify-center w-[100%]">
        <div class="flex flex-col space-y-4">
          <address>
            <p>Telefon: 999 999 99</p>
            <p>E-post: HavSkatt@gmail.com</p>
            <p>Adresse: Fiskebryggen 12, 0150 Oslo.</p>
          </address>
          <form aria-labelledby="contact-form" class="space-y-4" @submit.prevent="submitMessage">
            <div>
              <label for="subject">Emne:</label>
              <input
                id="subject"
                class="w-full text-black"
                placeholder="Emne"
                v-model="subject"
              />
            </div>
            <div>
              <label for="content">Innhold:</label>
              <textarea
                id="content"
                class="w-full h-20 text-black"
                placeholder="Innhold"
                v-model="content"
              />
            </div>
            <div>
              <label for="subject">Navn:</label>
              <input
                id="name"
                class="w-full text-black"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div>
              <label for="email">E-post:</label>
              <input
                id="email"
                class="w-full  text-black"
                placeholder="Din epost"
                v-model="email"
              />
            </div>
            <div class="w-full flex items-center justify-center pt-8">
              <button
                @click="submitMessage"
                type="button"
                class="bg-slate-700 p-2 flex items-center justify-center w-[66%]"
              >
                <p class="font-bold text-lg">Send</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </ImageCard>
</template>
