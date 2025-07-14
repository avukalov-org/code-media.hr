<script lang="ts" setup>
const colorMode = useColorMode();
const isMounted = ref(false);

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
  <footer class="footer sm:footer-horizontal bg-base-300 p-10 container mx-auto lg:rounded-t-2xl">
    <nav>
      <h6 class="footer-title">
        Navigacija
      </h6>
      <NuxtLink to="/" class="link link-hover">
        Početna
      </NuxtLink>
      <NuxtLink to="/products" class="link link-hover">
        Proizvodi
      </NuxtLink>
      <NuxtLink to="/contact" class="link link-hover">
        Kontakt
      </NuxtLink>
    </nav>
    <div class="flex flex-col">
      <h6 class="footer-title">
        Kontakt
      </h6>
      <div class="flex flex-col gap-3">
        <p class="flex items-center gap-2">
          <Icon name="tabler:mail" size="18" /> info@code-media.hr
        </p>
        <p class="flex items-center gap-2">
          <Icon name="tabler:phone" size="18" /> +385 95 556 6880
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h6 class="footer-title">
        Linkovi
      </h6>
      <a href="https://www.njuskalo.hr/trgovina/code-media?categoryId=3" target="_blank">
        <img src="/images/njuskalo.png" alt="Njuskalo Link" width="100">
      </a>
    </div>
    <div class="divider divider-horizontal" />
    <aside class="flex flex-col gap-4">
      <NuxtLink to="/" class="">
        <img
          :src="getImageByTheme()"
          alt="Logo"
          width="150"
        >
      </NuxtLink>

      <p>Copyright © {{ new Date().getFullYear() }} - Sva prava pridržana</p>
    </aside>
  </footer>
</template>
