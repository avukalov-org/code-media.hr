<script lang="ts" setup>
const props = defineProps<{
  label: string;
  name: string;
  type: "text" | "textarea" | "number" | "email";
  error?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend lg:text-lg">
      {{ props.label }}
    </legend>
    <Field

      :as="type === 'textarea' ? 'textarea' : 'input'"
      :name="props.name"
      :type="type"
      class="input w-full"
      :class="{
        'input-error': error,
        'input': !type || type !== 'textarea',
        'textarea': type === 'textarea',
      }"
    />
    <p v-if="error" class="label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>
