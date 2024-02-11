# Building Block View

Zoom in on a black box and show its internal components (white box).

<ul grid="~ cols-2" mb-4 v-click>
  <li>Internal components</li>
  <li>Interfaces/dependencies between components</li>
</ul>

<v-click>

> Show what is necessary for stakeholders to understand the white box. Reduce resolution of other components.

</v-click>

<div mt-4>
  <LightOrDark>
    <template #light>
      <InlineSvg src="/building-block.svg" class="w-1/2 mx-auto" />
    </template>
    <template #dark>
      <InlineSvg src="/building-block.svg" class="w-1/2 mx-auto text-white" />
    </template>
  </LightOrDark>
</div>
