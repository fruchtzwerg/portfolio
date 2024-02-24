---
layout: center
---

# Express.js

```sh twoslash
$ npm install express
```

Read the [documentation](https://expressjs.com/)

```ts {all|8} twoslash include main
import express from 'express';

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
```

---
layout: padded
---

<StackBlitz project="stackblitz-starters-wylkpz" file="index.js" />
