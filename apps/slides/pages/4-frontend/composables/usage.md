---
level: 2
layout: two-cols-header-small
---

# Composables

Counter example

Instantiate a counter by invoking the composable function.

Rename the returned properties as necessary to avoid naming conflicts.

::left::

Declaration

```ts
import { ref } from 'vue'

export function useCounter(
  startAt: MaybeRef<number> = 0
) {
  const count = ref(startAt)
  const increment = () => count.value++

  return { count, increment }
}
```

::right::

Usage

```vue
<template>
  <button @click="increment1()">Count: {{ count1 }}</button>
  <button @click="increment2()">Count: {{ count2 }}</button>
</template>

<script setup>
import { useCounter } from './useCounter'

const { count: count1, increment: increment1 } = useCounter()
const { count: count2, increment: increment2 } = useCounter()
</script>
```
