---
layout: cover
background: ../public/idea-2.avif
---

<div class="mt-64" />

# Exam

- Type: Coding Project
- Team: 1-3 students
- Final submission: 06.07.2025 23:59
- *"Presentation"*: 07. - 31. July


---
level: 2
---

# Use Case

- Create a web application that allows users to author, read, comment on and like articles.
- Users should be able to register and login.
- Useres should be able to subscribe to other authors and get a feed of their articles.
- The application should be responsive and work on mobile devices.
  - At least reading articles should work on mobile devices without horizontal scrolling.
  - Bonus: Responsive authoring of articles, comments, etc.
- The application shall be called *"Conduit"*.
  
## API Spec

https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/

---
level: 2
---

# Authoring

User story

<Quote mb-4>
As an author I want to create and publish articles, so that I can share my knowledge with others.
</Quote>

## Acceptance criteria

- The author should be able to create a new article.
- The author should be able to edit an existing article.
- The author should be able to delete an article.
- The author should be able to add a list of tags to an article.
- Authors should only be able to edit and delete their own articles. (See Authorization)

---
level: 2
---

# Reading

User story

<Quote mb-4>
As a reader I want to read articles, so that I can learn new things.
</Quote>

## Acceptance criteria

- The reader should be able to see a list of articles.
  - Articles should be sorted by date of publication (newest first).
  - Items in the list should show the title, author, date of publication and a short excerpt of the article.
- The reader should be able to read an article.
  - The article should show the title, author, date of publication and the full text.

---
level: 2
---

# Commenting

User story

<Quote mb-4>
As a reader I want to comment on articles, so that I can share my thoughts with the author and other readers and gain further insight.
</Quote>

## Acceptance criteria

- The reader should be able to comment on an article.
- The reader should be able to see all comments on an article.
  - Comments should be sorted by date of publication (newest first).
- The reader should be able to delete their own comments.


---
level: 2
---

# Liking

User story

<Quote mb-4>
As a reader I want to like articles, so that I can encourage good authors to write more articles.
</Quote>

## Acceptance criteria

- The reader should be able to like an article once.
- The reader should be able to unlike an article they previously liked.
- The reader should be able to see how many likes an article has.

---
level: 2
---

# Following

User story

<Quote mb-4>
As a reader I want to be able to follow authors, so that I can easily find new articles from authors I like.
</Quote>

## Acceptance criteria

- The user should be able to see the profile of an author.
- The reader should be able to follow an author.
- The reader should be able to unfollow an author.

---
level: 2
---

# Feed

User story

<Quote mb-4>
As a reader I want to find articles of authors I like in a single place, so that I can easily find new articles to read.
</Quote>

## Acceptance criteria

- The reader should be able to see a list of articles of authors they subscribed to.
- The reader should be able to list all articles belongig to a specific tag.
- Articles should be sorted by date of publication (newest first).
- Items in the list should show the title, author, date of publication and a short excerpt of the article.

---
level: 2
---

# Authentication & Authorization

User story

<Quote mb-4>
As a user I want to log in, so that I can access my articles, comments, likes and subscriptions.
</Quote>

## Acceptance criteria

- The user should be able to register an account.
  - Required fields: username, email, password.
  - The email should be unique.
  - The password should be at least 8 characters long.
- The user should be able to log in.
  - Successful login should redirect the user to the home page.
- The user should be able to log out.
- The user should be able to change their password.


---
layout: two-cols-header-small
level: 2
---

# Technical Considerations

::left::

## Frontend

- Vue.js
- Stay within the reactive programming paradigm (`ref()`, `computed()`, `watch()`, …)
- Use composables to abstract reusable logic
- Use semantic HTML
  - h1, h2, h3, … for headings
  - p for paragraphs
  - ul, ol, li for lists
  - nav, header, main, footer, … for layout sections
  - …
- Display sensible error messages to the user, where appropriate

::right::

## Backend

- Express.js or Nest.js
  - Maintain a clean and modular code structure
- Use a database to store articles, comments, likes, tags, users, etc.
  - Any DB persistent technology is allowed (SQlite, PostgreSQL, MongoDB, SurrealDB, …)
- Implement authentication and authorization
  - Use JWT for authentication
  - Use middleware for authorization
- Deployment shall be done using Docker and Docker Compose
  - `docker-compose up` should start the application with **all** its dependencies (DB, …)


---

# Submission

Artifact: Code

The project should be submitted as a Git repository. Teams submit only a single repository.

- Link to the repository via Discord or email (benjamin@montazer.dev) until 06.07.2025 23:59 is sufficient.
- Ensure that the repository is public or that I have access to it.
- The repository should contain a README.md file with instructions on how to install dependencies and how to run the application.
- The README.md file must contain a list of all team members.
- Docker-Compose ensures that the application can be started with a single command.

---

# Submission

Artifact: Presentation

- Required for all teams!
- Teams present their project via screensharing and answer some questions I might have.
- Contact me via Guilded in July to schedule a presentation date - preferably on the weekends.
- Latest presentation date: 31.07.2025
- I will need about 1 week advance notice to review your code.
