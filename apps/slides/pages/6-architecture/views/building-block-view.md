---
layout: image-large
image: ../public/architecture-1.avif
level: 2
---

# Building Block View

"Bausteinsicht"

Zoom in on a <span class="text-indigo-400">black box</span> and show its internal components (<span class="text-sky-400">white box</span>).

<ul grid="~ cols-2" mb-4>
  <li v-click>Reduced resolution of other components</li>
  <li v-click>Interfaces/Dependencies between components</li>
</ul>

<v-click>

<!-- > Show what is necessary for stakeholders to understand the white box. Reduce resolution of other components. -->

</v-click>

<div mt-4>
  <LightOrDark>
    <template #light>
      <inline-svg src="../public/building-block.svg" class="min-w-[400px] w-1/2 mx-auto ml-12" />
    </template>
    <template #dark>
      <inline-svg src="../public/building-block.svg" class="min-w-[400px] w-1/2 mx-auto ml-12 text-white" />
    </template>
  </LightOrDark>
</div>
