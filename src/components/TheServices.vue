<template>
  <div class="flex h-screen snap-start flex-col">
    <div v-motion="enterRigth(1)" class="p-4">
      <h1 class="py-5 uppercase">What I do</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet id
        maiores repudiandae consequatur necessitatibus dolorem? Aliquam facere
      </p>
      <button class="btn my-10">See my work</button>
    </div>
    <div class="grid flex-1 p-4">
      <div
        v-motion="enterLeft(index)"
        v-for="(ser, index) in services"
        :key="index"
        class="gap-4"
      >
        <h2 class="py-4">
          {{ ser.name }}
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          adipisci explicabo quasi hic quo maiores recusandae ducimus minus
        </p>
      </div>
    </div>
  </div>
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
    description: "sdasdasdasd",
  },
  {
    name: "otro",
    description: "asdasdasdasdas",
  },
]);
</script>

<style scoped></style>
