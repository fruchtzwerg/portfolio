// @filename: user.service.ts
export interface User {
  id: number;
  name: string;
}

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

class UserService {
  getAllUsers() {
    return users;
  }

  getUser(id: number) {
    return users.find(user => user.id === id);
  }

  createUser(user: { name: string }) {
    users.push({ id: users.length + 1, name: user.name });
    return users[users.length - 1];
  }

  updateUser(id: number, user: User) {
    const index = users.findIndex(user => user.id === id);
    users[index] = { id, name: user.name };
    return users[index];
  }

  deleteUser(id: number) {
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    return users;
  }
}

export const userService = new UserService();

// ---cut---
// @filename: user.controller.ts
import { Router } from 'express';

import { userService } from './user.service';

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
