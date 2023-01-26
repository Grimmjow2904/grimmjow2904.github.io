<template>
  <div class="flex h-screen snap-start snap-always flex-col">
    <div v-motion="enterRigth(1)" class="p-4">
      <h1 class="py-5 uppercase">My latest work</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet id
      </p>
      <button class="btn my-5">View all projects</button>
    </div>
    <div class="grid flex-1 gap-6 p-4">
      <RepoCard
        v-motion="enterLeft(index)"
        :repo="repo"
        v-for="(repo, index) in store.repos"
        :key="index"
      />
      <RepoCard
        v-motion="enterLeft(index)"
        :repo="repo"
        v-for="(repo, index) in store.repos"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RepoCard from "@/components/RepoCard.vue";
import { usePageStore } from "@/stores/page";
import { enterLeft, enterRigth } from "@/composables/motions";

const store = usePageStore();

store.getRepos();
</script>

<style scoped></style>
