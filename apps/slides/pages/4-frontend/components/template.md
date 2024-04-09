---
level: 2
layout: two-cols-header-small
---
# Template

Combine HTML with Vue's special syntax to create dynamic templates.

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

::right::

<Example />
