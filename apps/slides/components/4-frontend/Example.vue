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

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
const messages = ref<string>([]);

const sendMessage = () => {
  messages.value.push(message.value);
  message.value = '';
};
</script>

<style>
:root {
  --primary-color: 150, 61%, 70%;
}
</style>

<style scoped>
h1 {
  color: hsl(var(--primary-color));
}

input,
button {
  display: block;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

button:hover {
  background-color: hsl(var(--primary-color));
  color: black;
}
</style>
