---
layout: two-cols-header-small
---

# Anatomy of a webpage

::left::

<LightOrDark>
  <template #light>
    <img src="/public/web-light.webp" />
  </template>
  <template #dark>
    <img src="/public/web-dark.webp" />
  </template>
</LightOrDark>

::right::

To understand the anatomy of a webpage, draw boxes around individual parts of the page.

Boxes that occur more than once are implemented as <span class="text-emerald-600 dark:text-emerald-300">components</span>.

- Components should be <span class="text-emerald-600 dark:text-emerald-300">reusable</span>.

- Components should be <span class="text-emerald-600 dark:text-emerald-300">self-contained</span>
and <span class="text-emerald-600 dark:text-emerald-300">configurable</span>.

- Components with similar <span class="text-emerald-600 dark:text-emerald-300">layout</span> and <span class="text-emerald-600 dark:text-emerald-300">functionality</span> but different <span class="text-emerald-600 dark:text-emerald-300">content</span>, can be implemented with the HTML `<slot>` element.

- <span class="text-emerald-600 dark:text-emerald-300">Data</span> is passed <span class="text-emerald-600 dark:text-emerald-300">top-down</span> as <span class="text-emerald-600 dark:text-emerald-300">properties</span>
- <span class="text-emerald-600 dark:text-emerald-300">Changes</span> are propagated <span class="text-emerald-600 dark:text-emerald-300">bottom-up</span> as <span class="text-emerald-600 dark:text-emerald-300">events</span>
