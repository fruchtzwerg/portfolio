<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';

const props = defineProps<{ url: string; dialog: boolean }>();

const dialog = ref<HTMLDialogElement | null>(null);

const initSwaggerUI = () =>
  SwaggerUIBundle({
    url: props.url,
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: 'StandaloneLayout',
  });

onClickOutside(dialog, () => dialog.value?.close());
onMounted(initSwaggerUI);
</script>

<template>
  <template v-if="props.dialog">
    <dialog ref="dialog">
      <div id="swagger-ui" />
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

#swagger-ui {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>

<style lang="scss">
#swagger-ui .swagger-ui {
  .scheme-container {
    background-color: transparent;
  }

  h1,
  h2,
  h3,
  h5,
  h6,
  p,
  thead *,
  .servers-title,
  .opblock-summary-path,
  svg.arrow {
    color: #d4d4d4;
    fill: #d4d4d4;
  }

  .json-schema-2020-12__title {
    color: #7f8fba;
  }

  .response *:not(.response-control-media-type__accept-message):not(select),
  .responses-header *,
  .message,
  .opblock-summary-description,
  .models-control,
  .json-schema-2020-12-accordion__children *,
  .parameter__name,
  .parameter__type {
    color: #979797;
  }

  .model-example .tab * {
    color: #7f8fba;

    :hover {
      color: #d4d4d4;
    }
  }
}
</style>
