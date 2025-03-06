---
layout: center
level: 2
---

# express.js

```sh
$ npm install express
```

Read the [documentation](https://expressjs.com/)

```ts {all|8|all} twoslash include main
import express from 'express';

const hostname = 'localhost';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.info(`Server running at http://${hostname}:${port}/`)
});
```



---
layout: padded
---

<StackBlitz project="stackblitz-starters-wylkpz" file="index.js" />
