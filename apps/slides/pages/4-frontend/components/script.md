---
level: 2
layout: three-cols-header
---
# Script

Use the `script` tag with reactive elements to define the component's logic.

::left::

```vue
<template>
  <div>
    <h1>Hello Vue {{ message }}</h1>

    <p v-if="messages.length">Last message: {{ messages.at(-1) }}</p>

    <ul>
      <li v-for="msg in messages" :key="msg">{{ msg }}</li>
    </ul>

    <input v-model="message" placeholder="Enter your message" />
    <button @click="sendMessage()">Send Message</button>
  </div>
</template>
```

::center::

```vue
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
const messages = ref<string>([]);

const sendMessage = () => {
  messages.value.push(message.value);
  message.value = '';
};
</script>
```

::right::

<Example />
