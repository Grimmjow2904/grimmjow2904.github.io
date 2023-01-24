<template>
  <header
    class="fixed flex w-full items-center justify-between bg-primary p-4 dark:bg-d_primary"
  >
    <h2>A3</h2>
    <nav class="w-1/3">
      <ul class="flex w-full justify-around">
        <li
          class="decoration-decoration underline-offset-2 transition-all hover:underline"
        >
          <RouterLink to="/#">home</RouterLink>
        </li>
        <li
          class="decoration-decoration underline-offset-2 transition-all hover:underline"
        >
          <RouterLink to="/about">about</RouterLink>
        </li>
        <li
          class="decoration-decoration underline-offset-2 transition-all hover:underline"
        >
          <RouterLink to="/#projects">proyects</RouterLink>
        </li>
        <li
          class="decoration-decoration underline-offset-2 transition-all hover:underline"
        >
          <RouterLink to="/">contact</RouterLink>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import DarkMode from "@/components/DarkMode.vue";
</script>

<style scoped></style>
