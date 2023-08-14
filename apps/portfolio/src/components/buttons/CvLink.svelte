<script lang="ts">
  export let className = '';

  import { projectStore } from '../../store/id.store';
  import { tagStore } from '../../store/tag.store';

  $: url = () => {
    const url = new URL('/cv', window.location.origin);

    if ($tagStore.size) url.searchParams.set('techs', Array.from($tagStore).join(','));
    if ($projectStore.size) url.searchParams.set('projects', Array.from($projectStore).join(','));

    // test comment
    console.log('tesst')

    return url.toString();
  };

  $: href = url();
</script>

<a {href} class={className}>
  <slot />
</a>
