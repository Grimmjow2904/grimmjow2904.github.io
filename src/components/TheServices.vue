<template>
  <section
    id="services"
    class="flex h-screen snap-start snap-always flex-col justify-center md:flex-row"
  >
    <div
      v-motion="enterRigth(1)"
      class="mt-12 p-4 md:flex md:w-1/3 md:flex-col md:justify-center"
    >
      <h1 class="py-5 uppercase">What I do</h1>
      <p class="md:py-6 md:text-2xl">
        I'm a Software Engineer with experience as a web developer. I specialize
        in building web applications using the Vue.js framework.
      </p>
      <button class="btn mt-3 md:w-2/4 md:text-lg">See my work</button>
    </div>
    <div
      class="grid flex-1 gap-3 p-4 md:mt-28 md:mb-4 md:w-2/5 md:flex-none md:p-4"
    >
      <div
        v-motion="enterLeft(index)"
        v-for="(ser, index) in services"
        :key="index"
        class="flex flex-col justify-evenly rounded-md border-b-2 md:p-4"
      >
        <h2 class="py-2">
          {{ ser.name }}
        </h2>

        <p class="md:text-xl">
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
      "Continuously test the webpage for any possible errors. Making sure the code is doing what it's supposed to do.",
  },
]);
</script>

<style scoped></style>
