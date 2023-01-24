<template>
  <div
    class="border-2 bg-white font-orbitron transition-all hover:-translate-y-6 hover:shadow-lg"
  >
    <h2 class="text-center uppercase">{{ repo.repoName }}</h2>
    <img class="py-3" :src="`/img/${repo.repoName}.png`" />

    <h3 class="p-2">Lenguajes :</h3>
    <div class="grid grid-cols-3 gap-4 py-3">
      <label
        class="text-center"
        v-for="(value, name) in repo.repoLang"
        :key="name"
      >
        {{ name }}: {{ ((value * 100) / sum).toFixed(2) }}</label
      >
    </div>

    <div class="flex justify-around py-4">
      <a :href="repo.repoUrl">
        <IconGitHub class="w-10" />
      </a>
      <a :href="repo.repoUrl">
        <IconWeb class="w-10" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type IRepo from "@/types/IRepo";
import { ref } from "vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
import IconWeb from "@/components/icons/IconWeb.vue";

export interface Props {
  repo: IRepo;
}

const props = defineProps<Props>();

const total = ref(0);

const values = Object.values(props.repo.repoLang);

const sum = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  total.value
);
</script>

<style scoped></style>
