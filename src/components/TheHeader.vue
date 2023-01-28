<template>
  <div class="fixed top-2 z-10 flex w-full items-center justify-center p-2">
    <div
      class="flex w-[90%] items-center justify-between rounded-full bg-black/30 p-3 backdrop-blur-md md:w-3/5"
    >
      <h3 class="font-orbitron">
        <span
          class="bg-gradient-to-l from-[#159957] to-[#155799] bg-clip-text font-orbitron text-transparent"
          >A</span
        >

        Amion
      </h3>
      <div class="flex flex-1 items-center justify-around">
        <a href="#home"
          ><IconHome
            :class="{
              'border-green-700': selected == 'home',
            }"
            class="w-8 border-b-2 fill-white pb-2 transition-all duration-500"
        /></a>
        <a href="#services"
          ><IconServices
            :class="{
              'border-green-700': selected == 'services',
            }"
            class="w-8 border-b-2 fill-white pb-2 transition-all duration-500"
        /></a>
        <a href="#work"
          ><IconWork
            :class="{
              'border-green-700': selected == 'work',
            }"
            class="w-7 border-b-2 fill-white pb-2 transition-all duration-500"
        /></a>
        <a href="#contact"
          ><IconMessage
            :class="{
              'border-green-700': selected == 'contact',
            }"
            class="w-7 border-b-2 fill-white pb-2 transition-all duration-500"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHome from "@/components/icons/IconHome.vue";
import IconMessage from "@/components/icons/IconMessage.vue";
import IconWork from "@/components/icons/IconWork.vue";
import IconServices from "@/components/icons/IconServices.vue";

export interface IProps {
  selected: any;
}

defineProps<IProps>();
</script>

<style scoped></style>
