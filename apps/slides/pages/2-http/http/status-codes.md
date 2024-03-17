---
layout: five-cols-header
level: 2
transition: fade-out
---

# Status codes

HTTP [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) are three-digit numbers that provide information about the status of a request. They are grouped into five classes:


::outer-left::

<div class="flex flex-col items-center">
  <v-click>
    <carbon:information class="w-24 h-24 mb-8 text-blue-500" />

  ## 1xx
  
  Informational

  </v-click>
  <v-click>

  - **101** Switching protocols

  </v-click>
</div>


::left::

<div class="flex flex-col items-center">
  <v-click>
    <carbon:checkmark class="w-24 h-24 mb-8 text-emerald-500" />

  ## 2xx
  
  Success

  </v-click>
  <v-click>

  - **200** OK
  - **201** Created
  - **204** No content

  </v-click>
</div>

::center::

<div class="flex flex-col items-center">
  <v-click>
    <carbon:direction-bear-right-02 class="w-24 h-24 mb-8 text-slate-400" />

  ## 3xx
  
  Redirection

  </v-click>
  <v-click>

  - **301** Moved permanently
  - **304** Not modified

  </v-click>
</div>


::right::

<div class="flex flex-col items-center">
  <v-click>
    <carbon:devices class="w-24 h-24 mb-8 text-orange-400" />

  ## 4xx
  
  Client error

  </v-click>
  <v-click>

  - **400** Bad request
  - **401** Unauthorized
  - **403** Forbidden
  - **404** Not found
  - **409** Conflict
  - **418** I'm a teapot
  - **422** Unprocessable entity

  </v-click>
</div>


::outer-right::

<div class="flex flex-col items-center">
  <v-click>
    <carbon:bare-metal-server-02 class="w-24 h-24 mb-8 text-rose-500" />

  ## 5xx
  
  Server error

  </v-click>
  <v-click>

  - **500** Internal server error

  </v-click>
</div>


<!-- 
- **409** Conflict
- **418** I'm a teapot
- **422** Unprocessable entity
 -->
