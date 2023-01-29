<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheBanner from "@/components/TheBanner.vue";
import TheServices from "@/components/TheServices.vue";
import TheWorks from "@/components/TheWorks.vue";
import TheContact from "@/components/TheContact.vue";
import TheFooter from "@/components/TheFooter.vue";
import { ref, onMounted } from "vue";

const inView = ref<any>("");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          inView.value = entry.target.getAttribute("id");
        }
      });
    },

    {
      root: document.querySelector("#observer-root"),
      threshold: 1.0,
    }
  );

  document.querySelectorAll("section").forEach((section) => {
    console.log(section);

    observer.observe(section);
  });
});
</script>

<template>
  <div
    id="observer-root"
    class="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-gradient-to-tr from-[#221717] via-[#152445] to-[#3a37dd]"
  >
    <TheHeader :selected="inView" />
    <TheBanner />
    <TheServices />
    <TheWorks />
    <TheContact />
  </div>
</template>
