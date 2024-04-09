---
layout: three-cols-header
---

# Routing

How is the HTML served?

::left::

<div class="flex flex-col items-center text-center">
  <carbon:devices class="mb-4 size-16 text-emerald-400" />

## Single Page Applications (SPA)

At <span class="text-orange-400">runtime</span> on the <span class="text-emerald-400">Client</span>

<div class="text-start">

- All routes serve the same HTML file
- Client hanles routing in JS with the History API

</div>
</div>

::center::

<div class="flex flex-col items-center text-center">
  <carbon:bare-metal-server class="mb-4 size-16 text-sky-400" />

## Server-Side Rendering (SSR)

At <span class="text-orange-400">runtime</span> on the <span class="text-sky-400">Server</span>

<div class="text-start">

- Server generates HTML for each route as it is requested
- Server handles routing with controllers

</div>
</div>

::right::

<div class="flex flex-col items-center text-center">
  <heroicons:wrench class="mb-4 text-purple-400 size-16" />

## Static Site Generation (SSG)

At <span class="text-purple-400">build</span> time in a CI pipeline

<div class="text-start">

- All routes are pre-rendered as HTML files
- Static routing - just serve the files

</div>
</div>
