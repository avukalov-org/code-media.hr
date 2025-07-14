<script lang="ts" setup>
const logos = [
  { id: 1, name: "Windows", image: "/logos/win-logo.png", width: "200" },
  { id: 11, name: "Microsoft Project", image: "/logos/skype-business-logo.png", width: "300" },
  { id: 5, name: "Microsoft Word", image: "/logos/word-logo.png", width: "200" },
  { id: 6, name: "Microsoft Project", image: "/logos/excel-logo.png", width: "200" },
  { id: 7, name: "Microsoft Project", image: "/logos/powerpoint-logo.png", width: "200" },
  { id: 8, name: "Microsoft Project", image: "/logos/outlook-logo.png", width: "200" },
  { id: 9, name: "Microsoft Project", image: "/logos/publisher-logo.png", width: "200" },
  { id: 10, name: "Microsoft Project", image: "/logos/access-logo.png", width: "200" },
  { id: 3, name: "Microsoft Visio", image: "/logos/visio-logo.png", width: "200" },
  { id: 4, name: "Microsoft Project", image: "/logos/project-logo.png", width: "200" },

];
</script>

<template>
  <div class="hidden lg:flex max-w-7xl items-center justify-between gap-16">
    <div v-for="(logo, i) in logos" :key="i">
      <img :src="logo.image" :alt="logo.name" :width="logo.width">
    </div>
  </div>
  <div class="grid grid-cols-2 gap-8 max-w-screen md:max-w-48 mx-16 lg:hidden">
    <div v-for="(logo, i) in logos" :key="i">
      <img :src="logo.image" :alt="logo.name" :width="logo.width">
    </div>
  </div>
</template>
