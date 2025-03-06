<template>
  <div grid="~ gap-4 cols-5" class="areas slidev-layout">
    <div grid="area-[title]">
      <slot></slot>
    </div>

    <div grid="area-[outer-left]">
      <slot name="outer-left"></slot>
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

    <div grid="area-[outer-right]">
      <slot name="outer-right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.areas {
  grid-template-areas:
    'title title title title title'
    'outer-left left center right outer-right';

  --slidev-code-font-size: 8px;
  --slidev-code-line-height: 8px;
}
</style>
