---
theme: default
background: ../public/container-3.webp
class: text-center
highlighter: shiki
lineNumbers: true
author: Benjamin Montazer
title: Containerization
info: Deploying Applications with Docker
drawings:
  persist: false
defaults:
  transition: slide-left
transition: fade-out
mdc: true
download: true
hideInToc: true
---

# Containerization

with

<div>
  <devicon-plain:docker-wordmark class="w-56 h-56" />
</div>


---
src: ../shared/toc.md
image: ../public/container-3.webp
---


---
layout: image-right
image: ../public/puzzle-5.webp
---

# The Problem

I've built an app - now what?

- <span class="text-indigo-400">**Deployment**</span>: How to deploy the app to my infrastructure?
- <span class="text-sky-400">**Scaling**</span>: How to scale the app across multiple servers?
- <span class="text-cyan-400">**Security**</span>: How to ensure the app runs securely and isolated from the host environment?
- <span class="text-teal-400">**Consistency**</span>: How to ensure the app runs the same way in every environment?
- <span class="text-emerald-400">**Dependency Hell**</span>: Different environments, different dependencies.
- <span class="text-green-400">**Works on my machine**</span>: The app runs on the developer's machine but not on the server.


---
layout: image-right
image: ../public/docker-1.webp
---

# Docker

[What is a container?](https://www.docker.com/resources/what-container/)

A container is a virtualized environment that packages up code and all its <span class="text-indigo-400">dependencies</span> so the application runs <span class="text-indigo-400">securely</span>, <span class="text-indigo-400">reliably</span>, <span class="text-indigo-400">isolated/independent</span> of the host environment.

<v-click>

### Virtualization: <small>Hardware is expensive.</small>

- <span class="text-indigo-400">**Virtual Machine**</span> is a software computer that, like a physical computer, runs an operating system and applications.
- <span class="text-indigo-400">**Containerization**</span> is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment.

</v-click>

---
level: 2
layout: image-right
image: ../public/docker-3.webp
---

# Creating an image

Containerize our app.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Create a *Dockerfile* in your workspace
3. Build and tag the image: `docker build -t my-app`
4. Run the container: `docker run -p 3000:3000 my-app`

<v-click>

Note the `-p 3000:3000` flag. This maps the port 3000 of the container to the port 3000 of the host machine so we can reach our app at `localhost:3000` on the host.

</v-click>


---
level: 2
---

# Dockerfile

```bash
# Use an official Node.js runtime as the base image
# Use an alpine image to reduce the size of the image and attack surface
FROM node:20-alpine

# Define environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set the working directory in the container
WORKDIR /var/www

# Copy package.json and sources to the working directory
COPY . .

# Install app dependencies and bundle the app
RUN pnpm install --prod && pnpm build

# Expose the port the app runs in
EXPOSE $PORT

# Define the command to run the app
CMD ["node", "dist/main.js"]
```


---
layout: image-right
image: ../public/container-2.webp
---

# Multi-stage builds

Reduce the size of the final image by using multi-stage builds.

Sources, scripts and dev-dependencies are only needed during the build process.

Further reduce the size and attack surface of the final image:

1. Run the build in a container that includes all necessary tools and dependencies.
2. Use a smaller base-image for the final production image.
3. Copy only the needed build artifacts from the builder image to the final image.
4. Discard the builder image.
5. Run the app in the final image.



---
level: 2
---

# Multi-stage build

```bash
# Use any image as builder image
FROM node:20 AS builder

WORKDIR /var/www

COPY . .

ENV NODE_ENV=production

RUN pnpm install && pnpm build

# Use an official Node.js runtime for your production image
FROM node:20-alpine

WORKDIR /var/www

COPY --from=builder /var/www/dist ./dist
COPY --from=builder /var/www/node_modules ./node_modules

ENV PORT=3000

EXPOSE $PORT

CMD ["node", "dist/main.js"]
```


---
layout: image-right
image: ../public/container-3.webp
---

# Orchestration

Running multiple containers in a distributed environment.

**Orchestration** is the <span class="text-indigo-400">automated</span> configuration, coordination, and management of multiple containers.

- <span class="text-cyan-400">**Docker Compose**</span> is a tool for defining and running multi-container Docker applications.
- <span class="text-cyan-400">**Kubernetes**</span> is an open-source container-orchestration system for automating application deployment, scaling, and management.
- <span class="text-cyan-400">**Docker Swarm**</span> is a clustering and scheduling tool for Docker containers.


---
transition: none
level: 2
---

# [Docker Compose](https://docs.docker.com/compose/)

Define the services that make up your app in `docker-compose.yml`

```yaml
version: '3.8'

services:
  app: # Node.js backend app
    build: . # Build the app from the Dockerfile in the current directory
    ports:
      - "3000:3000" # Reach the app at `localhost:3000` on the host
    environment:
      NODE_ENV: production
      PORT: 3000
```

Run the app with `docker-compose up`

<small>Use `docker-compose up -d` to run in detached mode.</small>

---
level: 2
---

# Docker Compose

Define the services that make up your app in `docker-compose.yml`

```yaml
version: '3.8'

services:
  app: # Node.js backend app
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      PORT: 3000
  db: # PostgreSQL database
    image: postgres:13
    environment: # Configure the database via environment variables
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password # !!! Use a secret manager for sensitive data !!!
      POSTGRES_DB: mydb
  logger: # Logstash
    image: logstash:7.10
    ports:
      - "5000:5000"
```


---
level: 2
---

# Docker Compose Networks

```yaml
version: '3.8'

services:
  app: # Node.js backend app
    build: .
    ports:
      - "3000:3000" # Reach the app at `localhost:3000` on the host
    environment:
      NODE_ENV: production
      PORT: 3000
    networks:
      - app-network
  db: # PostgreSQL database
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    networks:
      - app-network # Reach the db container at `db:5432` internally

networks:
  app-network:
    driver: bridge # See docs for other network drivers
```


---
layout: image-right
image: ../public/server-1.avif
---

# Deployment

Deploying a containerized app to a cloud provider.

1. Build the image: `docker build -t my-app`
2. Tag the image: `docker tag my-app my-registry/my-app`
3. Push the image to the registry: `docker push my-registry/my-app`
4. Pull the image on the server: `docker pull my-registry/my-app`
5. Run the container: `docker run -p 3000:3000 my-registry/my-app`
<br>
Or use an orchestration tool like Kubernetes or Docker Swarm


---
src: ./homework.md
transition: slide-up
---


---
src: ../shared/questions.md
---
