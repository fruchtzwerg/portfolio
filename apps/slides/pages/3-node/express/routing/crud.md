---
layout: center
level: 2
---

# CRUD Routing

```ts {*} twoslash
import express from 'express';
const app = express();

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

const userService = new UserService();

// ---cut---
app.get('/users', (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).json({ id: user.id });
});

app.get('/users/:id', (req, res) => {
  const user = userService.getUser(+req.params.id);
  res.json(user);
});

app.patch('/users/:id', (req, res) => {
  const user = userService.updateUser(+req.params.id, req.body);
  res.json(user);
});

app.delete('/users/:id', (req, res) => {
  userService.deleteUser(+req.params.id);
  res.sendStatus(204);
});
```
