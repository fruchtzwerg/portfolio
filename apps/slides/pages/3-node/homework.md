---
layout: image-dimable
image: ../public/laptop-5.webp
dim: 'dark'
center: true
---

# Homework

Node.js

Build a RESTful CRUD API to manage a collection of books.

1. Save the books in memory. A simple array should suffice.
2. Mutate the array, when creating/updating/deleting books.
3. Return useful error objects when something goes wrong.
4. Bonus: Host your Swagger UI on the server and make it accessible via a static URL.

<div grid grid-cols-2 gap-2>
  <div flex flex-col items-center>
    <SwaggerUI url="../public/swagger/3-node.json" dialog class="my-4">Swagger</SwaggerUI>
    <a href="https://www.npmjs.com/package/swagger-ui-express">swagger-ui-express</a>
  </div>

  <div flex flex-col items-center>
    <ScalarUI url="../public/swagger/3-node.json" dialog class="my-4">Scalar</ScalarUI>
    <a href="https://github.com/scalar/scalar/blob/main/integrations/express/README.md">@scalar/express-api-reference</a>
  </div>
</div>
