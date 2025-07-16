<script lang="ts" setup>
import type { Product } from "~/lib/types";

import { products } from "../../lib/mock-data";

const route = useRoute();
const product = ref<Product | null>();

onMounted(() => {
  product.value = products.find(p => p.slug === route.params.slug);
});
</script>

<template>
  <div class="mx-4 my-12 lg:my-16">
    <div class="flex flex-col md:flex-row items-start justify-center gap-4">
      <div class="flex w-full md:w-1/2 max-h-[30rem] border border-base-300 py-8 px-4 rounded-sm">
        <img
          :src="product?.image"
          :alt="product?.title"
          class="object-contain"
        >
      </div>
      <div class="flex flex-col w-full md:w-1/2 gap-4">
        <h1 class="text-4xl lg:text-5xl font-semibold">
          {{ product?.title }}
        </h1>
        <h3 class="text-2xl lg:text-3xl font-bold">
          € {{ product?.price }}
        </h3>
        <ul class="flex flex-col gap-2">
          <li v-for="(info, i) in product?.infos" :key="i" class="text-md font-semibold">
            {{ info }}
          </li>
        </ul>
        <div class="flex flex-row justify-end md:justify-start">
          <NuxtLink class="btn btn-primary">
            Zatraži ponudu
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
