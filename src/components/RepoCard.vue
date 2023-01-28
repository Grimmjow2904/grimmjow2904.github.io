<template>
  <div class="group relative overflow-hidden rounded-md border-2 font-orbitron">
    <img
      class="h-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
      :src="`/img/${repo.img}.png`"
    />
    <div
      class="absolute bottom-0 w-full translate-y-full p-8 transition-all duration-500 group-hover:translate-y-0"
    >
      <h3 class="py-3 font-orbitron font-bold">{{ repo.name }}</h3>

      <p class="py-4">
        {{ repo.description }}
      </p>
      <div class="flex w-1/2 justify-between py-2">
        <a :href="repo.url">
          <IconWeb class="h-8 fill-white" />
        </a>
        <a v-if="repo.repo" :href="repo.repo">
          <IconGitHub class="h-8 fill-white" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type IWork from "@/types/IWork";
import { ref } from "vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
import IconWeb from "@/components/icons/IconWeb.vue";

export interface Props {
  repo: IWork;
}

const props = defineProps<Props>();

/* const total = ref(0);

const values = Object.values(props.repo.repoLang);

const sum = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  total.value
); */
</script>

<style scoped></style>
