<script lang="ts" setup>
const colorMode = useColorMode();
const isMounted = ref(false);
const isOpen = ref(false);

function getImageByTheme() {
  if (isMounted.value && (colorMode.value === "business" || colorMode.value === "dark")) {
    return "/images/logo-white.png";
  }
  return "/images/logo-black.png";
}

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="navbar bg-base-100 md:px-8 shadow-md">
    <div class="container mx-auto flex">
      <div class="navbar-start">
        <NuxtLink to="/" class="">
          <img
            :src="getImageByTheme()"
            alt="Logo"
            width="150"
          >
        </NuxtLink>
      </div>
      <div class="navbar-end flex gap-2">
        <div class="hidden md:flex gap-4">
          <NuxtLink class="font-semibold" to="/">
            Početna
          </NuxtLink>
          <NuxtLink class="font-semibold" to="/products">
            Proizvodi
          </NuxtLink>
          <NuxtLink class="font-semibold" to="/contact">
            Kontakt
          </NuxtLink>
        </div>
        <AppThemeToggle />
        <div class="flex md:hidden">
          <button class="btn btn-square" @click="isOpen = !isOpen">
            <Icon name="tabler:menu-2" size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <transition
    enter-active-class="transition-all duration-200 transform"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isOpen"
      class="absolute mt-16 w-screen bg-base-100 shadow-md z-1"
    >
      <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100" @click="isOpen = !isOpen">
        Početna
      </NuxtLink>
      <NuxtLink to="/products" class="block px-4 py-2 hover:bg-gray-100" @click="isOpen = !isOpen">
        Proizvodi
      </NuxtLink>
      <NuxtLink to="/contact" class="block px-4 py-2 hover:bg-gray-100" @click="isOpen = !isOpen">
        Kontakt
      </NuxtLink>
    </div>
  </transition>
</template>
