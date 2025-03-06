<template>
  <div grid="~ gap-4 cols-3" class="areas slidev-layout">
    <div grid="area-[title]">
      <slot></slot>
    </div>

    <div grid="area-[left]">
      <slot name="left"></slot>
    </div>

    <div grid="area-[center]">
      <slot name="center"></slot>
    </div>

    <div grid="area-[right]">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.areas {
  grid-template-areas:
    'title title title'
    'left center right';

  --slidev-code-font-size: 8px;
  --slidev-code-line-height: 8px;
}
</style>
