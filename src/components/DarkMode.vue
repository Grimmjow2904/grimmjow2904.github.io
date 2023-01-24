<template>
  <div>
    <button @click="page.dark = !page.dark">
      <IconSun v-if="page.dark" />
      <IconMoon v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import IconMoon from "./icons/IconMoon.vue";
import IconSun from "./icons/IconSun.vue";

const page = usePageStore();
</script>

<style scoped></style>
