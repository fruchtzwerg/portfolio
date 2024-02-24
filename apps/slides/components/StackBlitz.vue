<template>
    <div class="blitz-container">
        <div ref="element"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import sdk from '@stackblitz/sdk'

const props = defineProps<{ project: string, file?: string }>();

const element = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!element.value) return;

    sdk.embedProjectId(
        element.value,
        props.project,
        {
            forceEmbedLayout: true,
            openFile: props.file ?? 'README.md',
            clickToLoad: true,
            height: '100%',
            width: '100%',
        }
    );
})
</script>

<style scoped>
.blitz-container {
    height: 100%;
    width: 100%;
}
</style>
