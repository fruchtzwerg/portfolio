---
layout: three-cols-header
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

export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: Pick<User, 'name'>) {
    this.users.push({ id: this.users.length + 1, name: user.name });
    return this.users;
  }

  updateUser(id: number, user: User) {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = { id, name: user.name };
    return this.users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    return this.users;
  }
}

export const userService = new UserService();

// ---cut---
// @filename: main.ts
import express from 'express';
import { router as users } from './user.controller';

const app = express();

app.use('/users', users);

app.listen(3000);
```

::center::

```ts twoslash
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
    userService.createUser(req.body);
    return res.sendStatus(201);
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
    const users = userService.getUser(+req.params.id);
    return res.json(users);
  })
  .patch((req, res) => {
    const users = userService.updateUser(
      +req.params.id,
      req.body
    );
    return res.json(users);
  })
  .delete((req, res) => {
    const users = userService.deleteUser(+req.params.id);
    return res.status(204).json(users);
  });
```
