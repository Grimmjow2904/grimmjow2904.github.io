<template>
  <div class="group relative overflow-hidden rounded-md border-2 font-orbitron">
    <img
      class="h-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
      :src="`/img/${repo.repoName}.png`"
    />
    <div
      class="absolute bottom-0 w-full translate-y-full p-2 transition-all duration-500 group-hover:translate-y-0"
    >
      <h3 class="py-3 font-orbitron font-bold">{{ repo.repoName }}</h3>

      <div class="grid grid-cols-3 gap-1">
        <label
          class="text-start text-sm font-light"
          v-for="(value, name) in repo.repoLang"
          :key="name"
        >
          {{ name }}:{{ ((value * 100) / sum).toFixed(0) }}%</label
        >
      </div>
      <div class="flex justify-around py-2">
        <a :href="repo.repoUrl">
          <IconGitHub class="h-8 fill-white" />
        </a>
        <a :href="repo.repoUrl">
          <IconWeb class="h-8 fill-white" />
        </a>
      </div>
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
