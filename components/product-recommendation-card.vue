<script lang="ts" setup>
const props = defineProps<{
  card: any;
}>();
</script>

<template>
  <div class="card card-sm md:card-md card-border w-full md:w-96 bg-base-100 rounded-xl shadow-xl">
    <div class="card-body">
      <span v-if="props.card.mostPopular" class="badge badge-xs badge-warning">Most Popular</span>
      <span v-else class="badge badge-xs badge-info">Popular</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">
          {{ props.card.title }}
        </h2>
        <span class="text-xl">{{ props.card.price }}</span>
      </div>
      <ul class="mt-6 flex flex-col gap-2 text-xs">
        <li v-for="(info, i) in props.card.infos" :key="i" class="flex items-center gap-2 my-1">
          <Icon name="tabler:check" size="16" class="text-success" />
          <span>{{ info }}</span>
        </li>
      </ul>
      <div class="mt-6">
        <button class="btn btn-primary btn-block">
          Zatraži ponudu
        </button>
      </div>
    </div>
  </div>
</template>
