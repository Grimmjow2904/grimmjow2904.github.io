<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { usePageStore } from "./stores/page";

const store = usePageStore();

store.getRepos();
</script>

<template>
  <h1 class="font-roboto text-6xl">hollo</h1>
  <RouterView />
</template>
