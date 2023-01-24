import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";

interface Repo {
  repoName: string;
  repoDesc: string;
  repoStarCount: number;
  repoUrl: string;
}

export const usePageStore = defineStore("page", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  const repos = ref<Array<Repo>>([]);
  const dark = ref<Boolean>(false);

  //"https://api.github.com/users/Grimmjow2904
  function getRepos() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://api.github.com/users/Grimmjow2904/repos", requestOptions)
      .then(async (response) => {
        if (response.status == 200) {
          const data = await response.json();
          console.log(data);
          repos.value = data;
        } else {
          console.log("Datos no encontrados");
        }
      })
      .catch((error) => {
        console.error("No se recibio respuesta", error);
      });
  }

  return { repos, dark, count, getRepos, doubleCount, increment };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}
