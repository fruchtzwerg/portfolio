---
level: 2
---
# package.json

[Documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

Example `package.json`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  },
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

<br>
<v-click>

See [Semver](https://docs.npmjs.com/cli/v6/using-npm/semver#versions) notation.

</v-click>
