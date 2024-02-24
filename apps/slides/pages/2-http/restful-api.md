---
level: 2
layout: two-cols-header
---
# RESTful API

APIs should be predictable and consistent.

## URI - Unique Resource Identifier

Any resource should be <span class="text-teal-400">uniquely</span> identifiable through its path.

<v-click>

<small>

Avoid versioning in the URI: `/api/v1/users` is a *different* resource (i.e. user) than `/api/v2/users`.
<br>
Updating one should not affect the other.

If you want a different *view* on the same resource, use an HTTP header.

</small>

</v-click>

<v-click>

"A comment written by a user: `/users/:id/comments/:commentId`"

</v-click>

::left::
### List of users

- **GET** `/users`
- **POST** `/users`
- **DELETE** `/users`

::right::
### Individual user

- **GET** `/users/:id`
- **PATCH** `/users/:id`
- **DELETE** `/users/:id`

---
layout: full
---

# Documentation

Give an overview of the API and its capabilities.

**Swagger**: OpenAPI Specification

<iframe src="https://editor-next.swagger.io/" width="100%" height="100%" />
