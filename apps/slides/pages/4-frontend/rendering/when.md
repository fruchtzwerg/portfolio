---
layout: three-cols-header
---

# Rendering

When/Where is the HTML generated?

::left::

<div v-click=1 class="flex flex-col items-center text-center">
  <carbon:devices class="mb-4 size-16 text-emerald-400" />

## Single Page Applications (SPA)

At <span class="text-orange-400">runtime</span> on the <span class="text-emerald-400">Client</span>

<div v-click=4 class="text-start">

- **Network Layer** - Client fetches data from the server
- **Business Logic** - Client transforms data into app state
- **Representation Layer** - Client renders the data

</div>
</div>

::center::

<div v-click=2 class="flex flex-col items-center text-center">
  <carbon:bare-metal-server class="mb-4 size-16 text-sky-400" />

## Server-Side Rendering (SSR)

At <span class="text-orange-400">runtime</span> on the <span class="text-sky-400">Server</span>

<div v-click=5 class="text-start">

- **Persistance Layer** - Server fetches data from the database
- **Business Logic** - Server transforms data -> app state
- **Representation Layer** - Server renders the data as HTML

</div>
</div>

::right::

<div v-click=3 class="flex flex-col items-center text-center">
  <heroicons:wrench class="mb-4 text-purple-400 size-16" />

## Static Site Generation (SSG)

At <span class="text-purple-400">build</span> time in a CI pipeline

<div v-click=6 class="text-start">

- **Persistance Layer** - Build tool fetches data from the database
- **Business Logic** - Build tool transforms data
- **Representation Layer** - Build tool renders the data as HTML

</div>
</div>

