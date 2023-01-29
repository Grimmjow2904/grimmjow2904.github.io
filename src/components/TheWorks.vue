<template>
  <section
    id="work"
    class="flex h-screen snap-start snap-always flex-col justify-center md:flex-row"
  >
    <div
      v-motion="enterRigth(1)"
      class="mt-12 p-4 md:flex md:w-1/3 md:flex-col md:justify-center"
    >
      <h1 class="py-5 uppercase">My works</h1>
      <p class="md:py-6 md:text-2xl">
        I work as a developer since 2021.Here are some of my works.
      </p>
      <button class="btn mt-3 md:w-2/4 md:text-lg">
        <a class=" " href="https://github.com/Grimmjow2904/">
          View all projects
        </a>
      </button>
    </div>
    <div
      class="grid flex-1 gap-3 p-4 md:mt-40 md:mb-4 md:w-1/3 md:flex-none md:p-4"
    >
      <RepoCard
        v-motion="enterLeft(index)"
        :repo="work"
        v-for="(work, index) in works"
        :key="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import RepoCard from "@/components/RepoCard.vue";
import { enterLeft, enterRigth } from "@/composables/motions";
import { ref } from "vue";

import type IWork from "@/types/IWork";

const works = ref<IWork[]>([
  {
    name: "Go Travel & Tours",
    url: "http://gotravelandtours.com/#/",
    description: "Travel and rent agency",
    img: "Gotravel",
  },
  {
    name: "Portfolio",
    url: "https://grimmjow2904.github.io/",
    description: "My portfolio web page",
    repo: "https://github.com/Grimmjow2904/grimmjow2904.github.io",
    img: "Portfolio",
  },
]);
</script>

<style scoped></style>
