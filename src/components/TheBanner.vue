<template>
  <section
    class="flex h-screen snap-start snap-always flex-col items-center justify-center"
  >
    <div v-motion="fade" class="flex flex-col items-center justify-center p-4">
      <h1 class="py-4 text-center font-bold uppercase">
        Alexander <br />
        Amion
      </h1>
      <h2 class="uppercase">I am a Freelance Developer</h2>
      <p class="w-full text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta
        quae magni expedita eos in harum molestias et nostrum placeat
      </p>
    </div>

    <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1000,
        },
      }"
      class="flex w-full justify-around py-10"
    >
      <button class="btn">Contact me</button>
      <button
        class="bg-gradient-to-l from-[#159957] to-[#155799] bg-clip-text text-transparent transition-all hover:scale-125"
      >
        My Portfolio
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fade } from "@/composables/motions";
</script>

<style scoped></style>
