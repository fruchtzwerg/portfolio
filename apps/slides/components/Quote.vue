<template>
  <div class="flex items-center py-4 border-y border-indigo-400 overflow-hidden">
    <raphael:quote class="w-50 h-20 text-indigo-400 -translate-y-8" />

    <div class="max-w-[60ch] text-2xl text-center">
      <slot />
    </div>

    <raphael:quote class="w-50 h-20 text-indigo-400 rotate-180 translate-y-8" />
  </div>
</template>
