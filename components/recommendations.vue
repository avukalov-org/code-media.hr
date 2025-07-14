<script lang="ts" setup>
const cards = [
//   { id: 1, title: "Windows 10 Pro", price: "€29.86", mostPopular: false },
//   { id: 2, title: "Windows 11 Pro", price: "€39.00", mostPopular: true },
//   { id: 3, title: "Office 2024 LTSC", price: "€99.00", mostPopular: false },
  {
    id: 1,
    title: "Windows 10 Pro",
    slug: "win-10-pro",
    image: "/win-10-pro.png",
    price: "€29.86",
    mostPopular: false,
    infos: [
      "Optimiziran za sve vrste računala",
      "Ugrađena BitLocker enkripcija za dodatnu sigurnost",
      "Podrška za udaljenu radnu površinu (Remote Desktop)",
      "Brz i stabilan operativni sustav za poslovne korisnike",
      "Kompatibilan sa starijim softverom i hardverom",
      "Doživotna licenca za jedno računalo",
      "Elektronička dostava putem emaila [ESD]",
    ],
  },
  {
    id: 2,
    title: "Windows 11 Pro",
    slug: "win-11-pro",
    image: "/win-11-pro.png",
    price: "€39.00",
    mostPopular: true,
    infos: [
      "Moderan dizajn i poboljšana korisnička sučelja",
      "Napredno upravljanje virtualnim radnim površinama",
      "Bolje performanse i sigurnost u odnosu na Windows 10",
      "Podrška za Android aplikacije (preko Amazon Store-a)",
      "Idealno za novije uređaje i sustave",
      "Doživotna licenca za jedno računalo",
      "Elektronička dostava putem emaila [ESD]",
    ],
  },
  {
    id: 3,
    title: "Office 2024 LTSC",
    slug: "office-2024-professional-plus",
    image: "/office-2021-pro-pluss.webp",
    price: "€99.00",
    mostPopular: false,
    infos: [
      "Najnovija verzija bez pretplate (perpetual)",
      "Uključuje Word, Excel, PowerPoint, Outlook itd.",
      "Dizajnirano za tvrtke koje ne koriste cloud rješenja",
      "Bolje i povoljnije rješenje bez pretplate",
      "Jednokratno plaćanje, doživotno korištenje",
      "Kompatibilan s Windows 10/11",
      "Elektronička dostava putem emaila [ESD]",

    ],
  },
];
</script>

<template>
  <div class="flex flex-col items-center lg:flex-row gap-8 my-8">
    <div v-for="(card, i) in cards" :key="i" class="hover:-translate-y-4 transition-all duration-200">
      <ProductRecommendationCard :card="card" />
    </div>
  </div>
</template>
