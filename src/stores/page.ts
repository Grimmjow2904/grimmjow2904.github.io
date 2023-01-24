import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import type IRepo from "@/types/IRepo";

export const usePageStore = defineStore("page", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  const repos = ref<Array<IRepo>>([]);
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
          const repoData = await response.json();
          console.log(repoData);

          repoData.forEach((repo: any) => {
            fetch(
              "https://api.github.com/repos/Grimmjow2904/" +
                repo.name +
                "/languages"
            )
              .then(async (response) => {
                if (response.status == 200) {
                  const langData = await response.json();
                  repos.value.push({
                    repoName: repo.name,
                    repoDesc: repo.description,
                    repoUrl: repo.html_url,
                    repoLang: langData,
                  });
                } else {
                  console.log("Lenguajes no encontrados");
                }
              })
              .catch((error) => {
                console.error("No se recibio respuesta", error);
              });
          });
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
