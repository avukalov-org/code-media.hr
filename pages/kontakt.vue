<script lang="ts" setup>
import type { FetchError } from "ofetch";
import type { ZodType } from "zod";

import { contactFormSchema } from "~/lib/zod-schema";

const { $csrfFetch } = useNuxtApp();
const loading = ref(false);
const submitted = ref(false);
const fetchError = ref<string>("");
const fetchSuccess = ref<string>("");
const { handleSubmit, errors, meta, setErrors } = useForm({
  validationSchema: toTypedSchema(contactFormSchema as unknown as ZodType<any, any, any>),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    fetchError.value = "";
    fetchSuccess.value = "";
    loading.value = true;

    const response = await $csrfFetch("/api/send-contact", {
      method: "POST",
      body: values,
    });
    submitted.value = true;

    if (response.statusCode === 200) {
      fetchSuccess.value = "Vaša poruka je uspješno poslana.";
    }
  }
  catch (e) {
    const error = e as FetchError;
    if (error.data?.data) {
      setErrors(error.data?.data);
    }
    fetchError.value = error.statusMessage || "Došlo je do pogreške. Pokušajte kasnije.";
  }
  loading.value = false;
});

onBeforeRouteLeave(() => {
  if (!submitted.value && meta.value.dirty) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Jeste li sigurni da žlite otići sa stranice? Vaša poruka neće biti poslana.");
    if (!confirm) {
      return false;
    }
  }
  return true;
});
</script>

<template>
  <div class="flex flex-col gap-16 lg:flex-row mb-12 lg:my-16">
    <div
      class="hero min-h-[calc(100dvh-16rem)] max-w-4xl lg:rounded-2xl shadow-2xl"
      style="background-image: url(/images/why-us-2.jpg);"
    >
      <div class="hero-overlay lg:rounded-2xl" />
      <div class="hero-content text-neutral-content">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col mb-4">
            <h1 class="text-4xl lg:text-6xl font-bold">
              CODE-MEDIA
            </h1>
            <h6 class="text-lg lg:text-xl font-semibold ml-1">
              obrt za računalne tehnologije
            </h6>
          </div>

          <div class="flex items-center gap-2 tooltip tooltip-up lg:tooltip-left" data-tip="Matični broj">
            <Icon name="tabler:number" size="24" />
            <h6 class="text-md lg:text-xl font-semibold">
              98494767
            </h6>
          </div>

          <div class="flex items-center gap-2 tooltip tooltip-up lg:tooltip-left" data-tip="Adresa">
            <Icon name="tabler:map-pin" size="24" />
            <h6 class="text-md lg:text-xl font-semibold">
              Antuna Gustava Matoša 2, 31000 Osijek
            </h6>
          </div>

          <div class="flex items-center gap-2 tooltip tooltip-up lg:tooltip-left" data-tip="E-mail">
            <Icon name="tabler:mail" size="24" />
            <h6 class="text-md lg:text-xl font-semibold">
              info@code-media.hr
            </h6>
          </div>

          <div class="flex items-center gap-2 tooltip tooltip-up lg:tooltip-left" data-tip="Telefon">
            <Icon name="tabler:phone" size="24" />
            <h6 class="text-md lg:text-xl font-semibold">
              +385 95 556 6880
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:min-w-lg mx-4">
      <h1 class="text-4xl lg:text-6xl font-semibold mb-8">
        Imate li pitanja?
      </h1>
      <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
        <AppFormField
          name="name"
          label="Vaše ime ili naziv tvrtke:"
          type="text"
          :error="errors.name"
          :disabled="loading"
        />
        <AppFormField
          name="email"
          label="Email na koji ćemo Vas povratno kontaktirati:"
          type="email"
          :error="errors.email"
          :disabled="loading"
        />
        <AppFormField
          name="title"
          label="Vaš naslov:"
          type="text"
          :error="errors.title"
          :disabled="loading"
        />
        <AppFormField
          name="message"
          label="Vaša poruka:"
          type="textarea"
          :error="errors.message"
          :disabled="loading"
        />
        <button :disabled="loading" type="submit" class="btn btn-primary lg:self-end">
          Pošalji
          <span v-if="loading" class="loading loading-spinner loading-sm" />
          <Icon v-else name="tabler:send-2" size="20" />
        </button>
      </form>
      <div v-if="fetchError" role="alert" class="alert alert-error mt-4">
        <Icon name="tabler:circle-x" size="20" />
        <span>{{ fetchError }}</span>
      </div>
      <div v-if="fetchSuccess" role="alert" class="alert alert-success mt-4">
        <Icon name="tabler:circle-check" size="20" />
        <span>{{ fetchSuccess }}</span>
      </div>
    </div>
  </div>
</template>
