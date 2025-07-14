<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "business" || colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "business" : "corporate";
  },
});
</script>

<template>
  <label class="swap swap-rotate ml-2">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">
    <Icon class="swap-on" name="tabler:sun" size="20" />
    <Icon class="swap-off" name="tabler:moon-filled" size="20" />
  </label>
</template>
