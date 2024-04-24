---
layout: image-large
image: ../public/architecture-3.webp
level: 2
---

# Scope & Context

"Kontextabgrenzungssicht"

A high-level view of the system and its surroundings.

<ul grid="~ cols-2" mb-8>
  <li v-click>System as a <span class="text-indigo-400">black box</span></li>
  <li v-click>External entities</li>
  <li v-click>Interfaces</li>
  <li v-click>Actors</li>
</ul>

<LightOrDark>
  <template #light>
    <inline-svg src="../public/context.svg" class="min-w-[400px] w-1/2 mx-auto ml-12" />
  </template>
  <template #dark>
    <inline-svg src="../public/context.svg" class="min-w-[400px] w-1/2 mx-auto ml-12 text-white" />
  </template>
</LightOrDark>
