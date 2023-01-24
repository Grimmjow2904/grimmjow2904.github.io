<script setup lang="ts">
import RepoCard from "@/components/RepoCard.vue";
import { usePageStore } from "@/stores/page";
import FormComponent from "@/components/FormComponent.vue";
const store = usePageStore();

store.getRepos();
</script>

<template>
  <div class="bg-primary p-4 dark:bg-d_primary">
    <section class="flex h-screen flex-col justify-center">
      <h1 class="uppercase">Alexander</h1>
      <h2 class="uppercase">Amion</h2>
      <p class="my-8 w-4/6">
        Hi, I'm a 28-year-old software developer from Habana, Cuba.
      </p>

      <button
        class="self-start rounded-md border-2 border-decoration p-3 transition-all hover:bg-decoration"
      >
        <a href="http://"> Download Resume </a>
      </button>
    </section>

    <section class="rounded-md bg-secundary p-4">
      <h2>GitHub Projects</h2>
      <div id="projects" class="grid grid-cols-3 gap-8 p-4 py-8">
        <RepoCard
          :repo="repo"
          v-for="repo in store.repos"
          :key="repo.repoName"
        />
        <RepoCard
          :repo="repo"
          v-for="repo in store.repos"
          :key="repo.repoName"
        />
        <RepoCard
          :repo="repo"
          v-for="repo in store.repos"
          :key="repo.repoName"
        />
        <RepoCard
          :repo="repo"
          v-for="repo in store.repos"
          :key="repo.repoName"
        />
      </div>
    </section>
  </div>
</template>
