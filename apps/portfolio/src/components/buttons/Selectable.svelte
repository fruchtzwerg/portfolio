<script lang="ts">
  import type { Taggable } from '../../models/tag.enum';
  import { techStore, projectStore } from '../../store/id.store';

  export let item: Taggable;
  export let className = '';
  export let type: 'tech' | 'project';

  const store = type === 'tech' ? techStore : projectStore;

  $: selected = $store.has(item.id);

  const toggle = () => store.toggle(item);
</script>

<div
  role="checkbox"
  tabindex="0"
  aria-checked={selected}
  class:selected
  class="{className} cursor-pointer transition-[box-shadow] duration-300 selected:shadow-even selected:shadow-primary"
  on:click={toggle}
  on:keypress={toggle}
>
  <input
    type="checkbox"
    checked={selected}
    aria-label="Select technology"
    aria-hidden="false"
    class="hidden"
  />

  <slot />
</div>
