<template>
  <div :class="{ dark: store.dark }">
    <div class="relative dark:text-white">
      <TheNavBar />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheFooter from "@/components/TheFooter.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();
</script>

<style scoped></style>
