<template>
  <div class="flex min-h-screen flex-col ">
    <AppNavBar />
    <main class="container mx-auto">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
