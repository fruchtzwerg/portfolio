---
level: 2
---
# Basic Routing

Define routes to handle HTTP requests for user CRUD.

```ts {all} twoslash
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
    return this.users;
  }

  updateUser(id: number, user: this['users'][number]) {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = { id, name: user.name };
    return this.users;
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
  userService.createUser(req.body);
  res.sendStatus(201);
});

app.get('/users/:id', (req, res) => {
  const users = userService.getUser(+req.params.id);
  res.json(users);
});

app.patch('/users/:id', (req, res) => {
  const users = userService.updateUser(+req.params.id, req.body);
  res.json(users);
});

app.delete('/users/:id', (req, res) => {
  const users = userService.deleteUser(+req.params.id);
  res.status(204).json(users);
});
```
