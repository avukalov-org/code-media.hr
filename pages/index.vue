<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-16">
    <div
      class="hero min-h-[calc(100dvh-16rem)]"
      style="background-image: url(/images/hero-lg-7.jpg);"
    >
      <div class="hero-overlay" />
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-sm md:max-w-md xl:max-w-3xl">
          <h1 class="mb-5 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Vaš pouzdan partner za digitalnu transformaciju.
          </h1>
          <p class="mb-5 text-md md:text-xl xl:text-2xl font-semibold">
            Profesionalna podrška, konkurentne cijene i najnoviji trendovi za Vaš uspjeh. Naš tim osigurava instalaciju, spašavanje podataka i održavanje računala, pružajući Vam mir i sigurnost.
          </p>
          <NuxtLink to="/products" class="btn xl:btn-xl btn-primary">
            Svi proizvodi
            <Icon name="tabler:shopping-bag" size="24" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-8 ">
      <h3 class="text-4xl lg:text-6xl font-bold">
        Izdvojeni proizvodi
      </h3>
      <div class="">
        <!-- <AppRecommendations /> -->
        <Recommendations />
      </div>
    </div>

    <div
      class="hero min-h-[calc(100dvh-16rem)]"
      style="background-image: url(/images/hero-lg-5.jpg);"
    >
      <div class="hero-overlay" />
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-sm md:max-w-md xl:max-w-3xl">
          <h1 class="mb-5 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Zašto Odabrati Nas?
          </h1>
          <p class="mb-5 text-md md:text-xl xl:text-2xl">
            Razlikujemo se po svom personaliziranom pristupu <u>svakom</u> klijentu.<br>
            <strong>Vaš uspjeh je naš uspjeh</strong>, stoga posvećujemo vrijeme kako bismo razumjeli Vaše <u>ciljeve i potrebe</u>.
            S ponosom nudimo <strong>najkonkurentnije</strong> cijene u Hrvatskoj, osiguravajući <u>vrhunsku vrijednost</u> za naše klijente.<br>
            <strong>Uvijek smo tu za Vas</strong>, pružajući podršku i savjete kako biste ostvarili svoj <u>puni potencijal</u>.
          </p>
          <!-- <NuxtLink to="/products" class="btn xl:btn-xl btn-accent">
            Kontaktirajte nas
            <Icon name="tabler:mail" size="24" />
          </NuxtLink> -->
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-8 mb-16">
      <div class="">
        <ProductLogos />
      </div>
    </div>
  </div>
</template>
