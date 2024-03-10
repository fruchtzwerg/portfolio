---
layout: image-right
image: ../public/cookie_3.webp
---
# Cookies

Maintain state in a stateless protocol

A cookie is a piece of data, <span class="text-purple-400">set by the server</span>, which is <span class="text-cyan-400">stored on the client</span>.

It is <span class="text-teal-400">automatically</span> sent to the server with every request made by the client.

Cookies can be used by the server to identify the client.

## Usecases

- **Authentication**
- **Session management**
- **Personalization**
- **Tracking**
- **…**

---
layout: image-left
image: ../public/cookie_2.webp
hideInToc: true
---

# Set a cookie

How do I use cookies?

A cookie is a string of key-value pairs separated by semicolons.

Set a cookie in the response header on the <span class="text-purple-400">server</span>:

```http {}
Set-Cookie: name=value; Path=/; Secure; HttpOnly
```

In Express:

```ts {} twoslash
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

---
layout: image-right
image: ../public/cookie_4.webp
hideInToc: true
---

# Read a cookie

How do I read cookies on the server?

Cookies are sent by the <span class="text-cyan-400">client</span> in the `Cookie` request header.

In Express:

```ts {} twoslash
import express from 'express';

const app = express();
// ---cut---
app.get('/', (req, res) => {
  const cookie = req.cookies['my-cookie'];
  return res.send(`Cookie: ${cookie}`);
});
```

In the browser:

```ts {} twoslash
const str = document.cookie;
const ary = str.split('; ');
const tuples = ary.map(
  (cookie) => cookie.split('=') as [string, string]
)
const map = new Map(tuples);
```
