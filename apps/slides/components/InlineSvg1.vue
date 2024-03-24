<template>
  <div v-html="svg" />
</template>

<script setup lang="ts">
import { onMounted, ref, toRef, watch } from 'vue';
import sanitizeHTML from 'sanitize-html';

const props = defineProps<{ src: string }>();
const src = toRef(props, 'src');

const svg = ref<string>('');

const sanitize = (html: string) =>
  sanitizeHTML(html, {
    parser: {
      lowerCaseTags: false,
    },
    allowedTags: [
      'svg',
      'path',
      'g',
      'circle',
      'rect',
      'line',
      'polyline',
      'polygon',
      'ellipse',
      'text',
      'tspan',
      'textPath',
      'linearGradient',
      'radialGradient',
      'stop',
      'defs',
      'clipPath',
      'mask',
      'pattern',
      'view',
      'title',
      'desc',
      'metadata',
      'base',
      'animate',
      'animateColor',
      'animateMotion',
      'animateTransform',
      'mpath',
      'set',
      'foreignObject',
      'switch',
      'use',
      'symbol',
      'desc',
      'title',
      'image',
      'marker',
      'pattern',
      'foreignObject',
      'div',
      'br',
    ],
    allowedAttributes: false,
  });

const fetchSvg = async () => {
  const response = await fetch(src.value);
  const code = await response.text();
  svg.value = sanitize(code);
};

onMounted(fetchSvg);
watch(src, fetchSvg);
</script>
