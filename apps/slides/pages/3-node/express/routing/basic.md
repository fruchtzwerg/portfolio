---
layout: center
level: 2
---

# Basic Routing

Define a route to handle HTTP GET requests to the root URL.

```ts {*} twoslash
import express from 'express';
const app = express();

class UserService {
  getUsersFromDatabase() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
  }
}

class ArticlesService {
  getArticlesFromDatabase() {
    return [
      { id: 1, title: 'Article 1' },
      { id: 2, title: 'Article 2' },
    ];
  }
}

const userService = new UserService();
const articlesService = new ArticlesService();

// ---cut---
app.get('/users', (req, res) => {
  const users = userService.getUsersFromDatabase();
  res.json(users);
});

app.get('/articles', (req, res) => {
  const articles = articlesService.getArticlesFromDatabase();
  res.json(articles);
});
```

1. Creates route to `GET http://localhost:3000/users`
2. Creates route to `GET http://localhost:3000/articles`
