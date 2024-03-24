---
transition: none
level: 2
---
# package.json

[Documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

The `package.json` file is the heart of any Node.js project. It contains metadata about the project, such as the project's <span class="text-sky-300">name</span>, <span class="text-indigo-300">version</span> and <span class="text-teal-300">dependencies</span>. It also contains <span class="text-orange-300">scripts</span> that can be run from the command line.

<div class="grid grid-cols-2 items-center">

Init a new project with `package.json`:

```bash
$ npm init
```

</div>

<div class="grid grid-cols-2 items-center">
  
  Install a package and save it to `package.json`:
  
  ```bash
  $ npm install <package-name> --save
  ```
  
</div>

<div class="grid grid-cols-2 items-center">

Install a package as a development dependency:

```bash
$ npm install <package-name> --save-dev
```

</div>

<div class="grid grid-cols-2 items-center">

Run a script from `package.json`:

```bash
$ npm run <script-name>
```

</div>



---
src: package-json.md
---
