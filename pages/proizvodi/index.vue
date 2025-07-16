<script lang="ts" setup>
import { products } from "../../lib/mock-data";
</script>

<template>
  <div class="my-12 lg:my-16 mx-4 md:mx-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6">
      <div v-for="(product, i) in products" :key="i" class="card card-border w-full  shadow-lg">
        <NuxtLink :to="{ name: 'proizvodi-slug', params: { slug: product.slug } }" class="cursor-pointer">
          <figure class="w-full flex flex-row justify-center bg-base-100 shadow-xs">
            <img
              class="w-full object-contain max-h-64 m-4"
              :src="product.image || 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'"
              :alt="product.title"
            >
          </figure>
        </NuxtLink>
        <div class="card-body z-1">
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <h2 class="card-title">
                {{ product.shortTitle }}
              </h2>
              <h2 class="card-title">
                €{{ product.price }}
              </h2>
            </div>
            <ul class="flex flex-col gap-1 max-h-36 overflow-hidden inner-bottom-shadow">
              <li v-for="(info, i) in product.infos" :key="i">
                {{ info }}
              </li>
            </ul>
          </div>
          <div class="card-actions justify-end mt-4">
            <NuxtLink :to="{ name: 'proizvodi-slug', params: { slug: product.slug } }" class="btn btn-secondary">
              Detalji
            </NuxtLink>
            <NuxtLink to="/" class="btn btn-primary">
              Zatraži ponudu
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
