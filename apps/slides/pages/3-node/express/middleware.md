---
layout: two-cols-header
level: 2
---

# Middleware

[Documentation](https://expressjs.com/en/guide/writing-middleware.html)

<br>A function with access to <span class="text-sky-400">request</span> and <span class="text-purple-400">response</span> object and a `next` function to pass execution to the next middleware. An endpoint callback is the final 'middleware' in the chain.

<v-click>Middlewares can be used for pre-/post-processing and side-effects.</v-click>

::left::

<v-click>

## Usecases

1. Logging
2. Error handling
3. Authentication
4. Rate limiting

</v-click>

::right::

<v-click>

## Example

A simple logging middleware:

```ts {all|3|all} twoslash
import express from 'express';
const app = express();
// ---cut---
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

</v-click>
