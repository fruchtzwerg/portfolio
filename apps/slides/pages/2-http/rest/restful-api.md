---
layout: three-cols-header
---
# RESTfulness

APIs should be predictable and consistent.

::left::

<div class="flex flex-col items-center">
  <carbon:load-balancer-application class="w-24 h-24 mb-8 text-sky-400" />

## Client-Server

Separation of concerns

<v-click>

- clients, servers and resources
- layered architecture

</v-click>

</div>

::center::

<div class="flex flex-col items-center">
  <carbon:breaking-change class="w-24 h-24 mb-8 text-emerald-400" />

## Stateless

Server stores no client context

<v-click>

- no session state
- each request is independent
- each request contains all the information needed to fulfill it

</v-click>

</div>

::right::

<div class="flex flex-col items-center">
  <carbon:db2-data-sharing-group class="w-24 h-24 mb-8 text-indigo-400" />

## Uniform Interface

Resources and representation

<v-click>

- Resource identification
- Self-descriptive messages
- <b class="text-indigo-400">H</b>ypermedia <b class="text-indigo-400">A</b>s <b class="text-indigo-400">T</b>he <b class="text-indigo-400">E</b>ngine <b class="text-indigo-400">O</b>f <b class="text-indigo-400">A</b>pplication <b class="text-indigo-400">S</b>tate

</v-click>

</div>
