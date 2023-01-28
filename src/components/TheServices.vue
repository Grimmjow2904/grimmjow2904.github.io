<template>
  <section id="services" class="flex h-screen snap-start snap-always flex-col">
    <div v-motion="enterRigth(1)" class="mt-12 p-4">
      <h1 class="py-5 uppercase">What I do</h1>
      <p>
        I'm a Software Engineer with experience as a web developer. I specialize
        in building web applications using the Vue.js framework.
      </p>
      <button class="btn mt-3">See my work</button>
    </div>
    <div class="grid flex-1 px-4">
      <div
        v-motion="enterLeft(index)"
        v-for="(ser, index) in services"
        :key="index"
        class="gap-2"
      >
        <h2 class="py-4">
          {{ ser.name }}
        </h2>

        <p>
          {{ ser.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { enterLeft, enterRigth } from "@/composables/motions";

export interface service {
  name: string;
  description: string;
}

const services = ref<service[]>([
  {
    name: "Development",
    description:
      "Frontend programing lenguages as HTML,CSS and JavaScript.Vue.js framework using the CompositionAPI.",
  },
  {
    name: "Testing and Debugging",
    description:
      "Continuously test the webpage for any possible errors. Should any arise,  know how to debug it. Making sure the code is doing what it's supposed to do.",
  },
]);
</script>

<style scoped></style>
