// @filename: user.controller.ts
import { Router } from 'express';

export interface User {
  id: number;
  name: string;
}

const _users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

class UserService {
  getAllUsers() {
    return _users;
  }

  getUser(id: number) {
    return _users.find(user => user.id === id);
  }

  createUser(user: { name: string }) {
    _users.push({ id: _users.length + 1, name: user.name });
    return _users[_users.length - 1];
  }

  updateUser(id: number, user: User) {
    const index = _users.findIndex(user => user.id === id);
    _users[index] = { id, name: user.name };
    return _users[index];
  }

  deleteUser(id: number) {
    const index = _users.findIndex(user => user.id === id);
    _users.splice(index, 1);
    return _users;
  }
}

export const userService = new UserService();

// @filename: user.controller.ts
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

// ---cut---
// @filename: main.ts
import express from 'express';

import { router as users } from './user.controller';

const app = express();

app.use('/users', users);

app.listen(3000);
