<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheBanner from "@/components/TheBanner.vue";
import TheServices from "@/components/TheServices.vue";
import TheWorks from "@/components/TheWorks.vue";
import TheContact from "@/components/TheContact.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div
    class="relative h-screen snap-y snap-mandatory snap-always overflow-y-auto scroll-smooth bg-gradient-to-tr from-[#221717] via-[#152445] to-[#3a37dd]"
  >
    <TheHeader />
    <TheBanner />
    <TheServices />
    <TheWorks />
    <TheContact />
    <TheFooter />
  </div>
</template>
