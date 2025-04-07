<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { ApiReference } from '@scalar/api-reference';
import '@scalar/api-reference/style.css';

const props = defineProps<{ url: string; dialog: boolean }>();

const dialog = ref<HTMLDialogElement | null>(null);
const hiddenClients = [
  'libcurl',
  'clj_http',
  'httpclient',
  'restsharp',
  'native',
  'http1.1',
  'asynchttp',
  'nethttp',
  'okhttp',
  'unirest',
  'xhr',
  'jquery',
  'request',
  'nsurlsession',
  'cohttp',
  'curl',
  'guzzle',
  'http1',
  'http2',
  'webrequest',
  'restmethod',
  'python3',
  'requests',
  'httr',
  'httpie',
  'ofetch',
  'undici',
  'http',
];

onClickOutside(dialog, () => dialog.value?.close());
</script>

<template>
  <template v-if="props.dialog">
    <dialog ref="dialog">
      <ApiReference
        :configuration="{
          url,
          hiddenClients,
          hideModels: true,
          defaultHttpClient: {
            targetKey: 'js',
            clientKey: 'fetch',
          },
        }"
      />
    </dialog>

    <button
      v-if="props.dialog"
      @click="dialog?.show()"
      v-bind="$attrs"
      class="flex gap-2 justify-center items-center rounded p-2 w-full hover:text-indigo-400 font-semibold hover:bg-indigo-400/10"
    >
      <slot />

      <fluent:open-20-filled />
    </button>
  </template>

  <div
    v-else
    id="swagger-ui"
    class="scale-75 size-[133%]! pb-40 -translate-x-36 -translate-y-16"
    v-bind="$attrs"
  />
</template>

<style scoped>
dialog {
  top: 0;
  min-width: 25rem;
  max-width: 40rem;
  width: 65vw;
  height: 100%;
  background-color: #1e1e1e;
}
</style>

<style>
.scalar-app.scalar-app.scalar-app {
  width: 100%;
  height: 100%;

  --full-height: 100%;

  max-height: var(--full-height);
  min-height: var(--full-height);
  overflow: scroll;
  zoom: 75%;
}
</style>
