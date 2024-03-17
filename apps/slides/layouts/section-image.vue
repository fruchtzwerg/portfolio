<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../utils/layout-helper';

const props = withDefaults(
  defineProps<{
    image: string;
    dim?: Parameters<typeof handleBackground>[1];
    backgroundSize?: Parameters<typeof handleBackground>[2];
  }>(),
  { backgroundSize: 'cover' },
);

const style = computed(() => handleBackground(props.image, props.dim, props.backgroundSize));
</script>

<template>
  <div class="slidev-layout section w-full h-full grid" :style="style">
    <div class="my-auto text-center">
      <slot />
    </div>
  </div>
</template>
