<script lang="ts">
  import { isDark } from '../../store/theme.store';

  import IconMoon from '~icons/carbon/moon';
  import IconSun from '~icons/carbon/sun';

  // Diable <ThemeSelector> loaded with unknown props warning
  $$restProps;

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
