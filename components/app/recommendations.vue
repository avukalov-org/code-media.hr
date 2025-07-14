<script setup lang="ts">
const cards = [
  { id: 1, title: "Windows 11 Pro", price: "€39.00" },
  { id: 2, title: "Windows 10 Pro", price: "€29.86" },
  { id: 3, title: "Office 2024 Pro", price: "€99.00" },
];

const currentIndex = ref(0);

function prev() {
  currentIndex.value
    = (currentIndex.value - 1 + cards.length) % cards.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % cards.length;
}

function getCardClass(i: number) {
  if (i === currentIndex.value) {
    return "z-3 transform translate-x-0 -translate-y-4 rotate-0 scale-100";
  }
  else if ((i + 1) % 3 === currentIndex.value) {
    return "z-2 transform -translate-x-52 translate-y-4 -rotate-25 scale-90";
  }
  else if ((i + 2) % 3 === currentIndex.value) {
    return "z-2 transform translate-x-52 translate-y-4 rotate-25 scale-90";
  }
  else {
    return "hidden";
  }
}
</script>

<template>
  <div class="relative w-full h-[32rem] flex items-center justify-center overflow-hidden">
    <button class="btn btn-circle" @click="prev">
      <Icon name="tabler:arrow-left" size="24" />
    </button>

    <div class="relative w-full flex justify-center items-center">
      <!-- <div
        v-for="(card, i) in cards"
        :key="card.id"
        class="absolute w-72 h-96 bg-blue-500 text-white rounded-xl shadow-xl flex items-center justify-center text-2xl font-bold transition-all duration-500"
        :class="getCardClass(i)"
      >
        {{ card.title }}
      </div> -->
      <div
        v-for="(card, i) in cards "
        :key="card.id"
        class="absolute card w-96 bg-base-100 shadow-sm transition-all duration-500"
        :class="getCardClass(i)"
      >
        <div class="card-body">
          <span class="badge badge-xs badge-warning">Most Popular</span>
          <div class="flex justify-between">
            <h2 class="text-3xl font-bold">
              {{ card.title }}
            </h2>
            <span class="text-xl">{{ card.price }}</span>
          </div>
          <ul class="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li class="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span class="line-through">Seamless cloud integration</span>
            </li>
            <li class="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              /></svg>
              <span class="line-through">Real-time collaboration tools</span>
            </li>
          </ul>
          <div class="mt-6">
            <button class="btn btn-primary btn-block">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-circle" @click="next">
      <Icon name="tabler:arrow-right" size="24" />
    </button>
  </div>
</template>
