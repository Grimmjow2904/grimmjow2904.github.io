<template>
  <section id="work" class="flex h-screen snap-start snap-always flex-col">
    <div v-motion="enterRigth(1)" class="mt-20 px-4">
      <h1 class="my-2 uppercase">My works</h1>
      <p>I work as a developer since 2021.Here are some of my works.</p>
      <button class="btn mt-2">
        <a class=" " href="https://github.com/Grimmjow2904/">
          View all projects
        </a>
      </button>
    </div>
    <div class="grid flex-1 gap-3 p-4">
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
    img: "Gotravel",
  },
]);
</script>

<style scoped></style>
