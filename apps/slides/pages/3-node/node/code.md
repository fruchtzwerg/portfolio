---
layout: center
level: 2
---

# A simple Node.js server

```ts {all|1|6-10|3-4,12-14|all} twoslash
// @types: node
import http from 'node:http';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});
```

<v-click>

Execute with:

```sh
$ node ./main.js
```

</v-click>



---
layout: padded
level: 2
---

<StackBlitz project="stackblitz-starters-t88cxm" file="index.js" />
