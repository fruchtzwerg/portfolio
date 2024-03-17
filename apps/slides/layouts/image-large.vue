<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../utils/layout-helper';

const props = withDefaults(
  defineProps<{
    image: string;
    dim?: Parameters<typeof handleBackground>[1];
    backgroundSize?: Parameters<typeof handleBackground>[2];
    imagePosition?: 'left' | 'right';
  }>(),
  { backgroundSize: 'cover', imagePosition: 'right' },
);

const style = computed(() => handleBackground(props.image, props.dim, props.backgroundSize));
</script>

<template>
  <div class="grid grid-cols-[3fr_5fr] w-full h-full auto-rows-fr">
    <div class="slidev-layout px-8">
      <slot />
    </div>
    <div class="w-full h-full" :style="style" />
  </div>
</template>
