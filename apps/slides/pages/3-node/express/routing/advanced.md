---
layout: three-cols-header
level: 2
---
# Advanced Routing

Define routes to handle HTTP requests for user CRUD.

::left::

```ts twoslash
// @filename: user.service.ts
export interface User {
  id: number;
  name: string;
}

class UserService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: { name: string }) {
    this.users.push({ id: this.users.length + 1, name: user.name });
    return this.users[users.length - 1];
  }

  updateUser(id: number, user: this['users'][number]) {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = { id, name: user.name };
    return this.users[index];
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    return this.users;
  }
}

export const userService = new UserService();

// ---cut---
// @noErrors
// @filename: main.ts
import express from 'express';
import { router as users } from './user.controller';

const app = express();

app.use('/users', users);

app.listen(3000);
```

::center::

```ts twoslash
// @noErrors
// @filename: user.controller.ts
import { Router } from 'express';
import { userService } from "./user.service";

export const router = Router();

router
  .route('/')
  .get((req, res) => {
    const users = userService.getAllUsers();
    return res.json(users);
  })
  .post((req, res) => {
    const user = userService.createUser(req.body);
    return res.status(201).json(user);
  });
```

::right::

```ts twoslash
import { userService } from "./user.service";
import { Router } from 'express';
export const router = Router();

// ---cut---
// ...
router
  .route('/:id')
  .get((req, res) => {
    const user = userService.getUser(+req.params.id);
    return res.json(user);
  })
  .patch((req, res) => {
    const user = userService.updateUser(
      +req.params.id,
      req.body
    );
    return res.json(user);
  })
  .delete((req, res) => {
    userService.deleteUser(+req.params.id);
    return res.sendStatus(204);
  });
```
