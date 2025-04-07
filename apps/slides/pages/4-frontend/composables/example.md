---
level: 2
layout: image-right
image: ../public/architecture-1.avif
---

# Composables

Counter example

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

<v-click>

Global counter example

```ts
import { ref } from 'vue'

const count = ref(0) // <-- global state

export const useCounter = () => {
  const increment = () => count.value++
  return { count, increment }
}
```

</v-click>
