---
layout: image-right
image: ../public/cookie_2.avif
level: 2
---

# Set a cookie

How do I use cookies?

A cookie is a string of key-value pairs separated by semicolons.

Set a cookie in the response header on the <span class="text-purple-400">server</span>:

```http
Set-Cookie: name=value; Path=/; Secure; HttpOnly
```

In Express:

```ts {*} twoslash
import express from 'express';

const app = express();
// ---cut---
app.get('/', (req, res) => {
  res.cookie('my-cookie', 'value', {
    path: '/',
    secure: true, // only set cookie on https
    httpOnly: true, // prevent JS access
    expires: new Date(Date.now() + 900_000),
  });
  return res.send('Cookie set');
});
```

<!-- 
- Secure: only set cookie on https
- HttpOnly: prevent JS access
 -->
