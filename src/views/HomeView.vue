<script setup lang="ts">
import RepoCard from "@/components/RepoCard.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();

store.getRepos();
</script>

<template>
  <main class="p-4">
    <div class="grid grid-cols-3 gap-8 py-8">
      <RepoCard :repo="repo" v-for="repo in store.repos" :key="repo.repoName" />
      <RepoCard :repo="repo" v-for="repo in store.repos" :key="repo.repoName" />
      <RepoCard :repo="repo" v-for="repo in store.repos" :key="repo.repoName" />
      <RepoCard :repo="repo" v-for="repo in store.repos" :key="repo.repoName" />
    </div>
  </main>
</template>
