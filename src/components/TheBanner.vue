<template>
  <section
    id="home"
    class="flex h-screen snap-start snap-always items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center md:pt-28">
      <div
        v-motion="fade"
        class="flex flex-col items-center justify-center p-4"
      >
        <h1 class="py-4 text-center font-bold uppercase">
          Hey, I'm <br />
          Alex
        </h1>
        <h2 class="font-orbitron uppercase">I make websites.</h2>
        <p class="w-full py-5 text-start md:w-2/3">
          I’m a front-end developer. I like drawing, sci-fi, reading, and
          gaming. Now that you are here, how about checking some of my works?
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
    </div>
    <div class="hidden h-2/5 w-1/3 items-center justify-center px-10 md:flex">
      <div
        class="h-full w-full overflow-hidden"
        style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fade } from "@/composables/motions";
</script>

<style scoped></style>
