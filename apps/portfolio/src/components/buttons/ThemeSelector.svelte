<script lang="ts">
  import IconMoon from '~icons/carbon/moon';
  import IconSun from '~icons/carbon/sun';
  import { isDark } from '../../store/theme.store';

  export let className = '';

  const toggleTheme = () => isDark.set(!$isDark);
</script>

<!-- Init the component -->
<button
  class={`${className} swap swap-rotate ${$isDark ? 'swap-active' : ''}`}
  aria-label="Switch theme"
  on:click={toggleTheme}
>
  <IconSun class="swap-on fill-current text-lg sm:text-2xl" />
  <IconMoon class="swap-off fill-current text-lg sm:text-2xl" />
</button>
