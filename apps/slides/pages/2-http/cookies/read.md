---
layout: image-right
image: ../public/cookie_4.avif
level: 2
---

# Read a cookie

How do I read cookies on the server?

Cookies are sent by the <span class="text-cyan-400">client</span> in the `Cookie` request header.

In Express:

```ts {*} twoslash
import express from 'express';

const app = express();
// ---cut---
app.get('/', (req, res) => {
  const cookie = req.cookies['my-cookie'];
  return res.send(`Cookie: ${cookie}`);
});
```

In the browser:

```ts {*} twoslash
const str = document.cookie;
const ary = str.split('; ');
const tuples = ary.map(
  (cookie) => cookie.split('=') as [string, string]
)
const map = new Map(tuples);
```
