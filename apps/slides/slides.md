---
theme: default
background: /server.webp
class: text-center
highlighter: shiki
lineNumbers: true
author: Benjamin Montazer
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
defaults:
  transition: slide-left
transition: fade-out
title: Backend Fundementals
mdc: true
download: true
---

# Backend Fundementals

with

<div>
  <devicon-plain:nodejs-wordmark class="w-56 h-56" />
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-right
image: /server.webp
transition: slide-left
hideInToc: true
---

# Table of contents

<Toc maxDepth="1"></Toc>

---
layout: quote
---

# What is [Node.js](https://nodejs.org/en/about)?

<br/>

<div class="flex items-center py-4 border-y border-indigo-400 overflow-hidden">
  <raphael:quote class="w-50 h-20 text-indigo-400 -translate-y-8" />

  <div class="max-w-[60ch] text-2xl text-center">
    As an <span class="text-sky-400">asynchronous</span> <span class="text-orange-300">event-driven</span> <span class="text-indigo-400">JavaScript runtime</span>, Node.js is designed to build <span class="text-teal-400">scalable network applications</span>.
  </div>
  <raphael:quote class="w-50 h-20 text-indigo-400 rotate-180 translate-y-8" />
</div>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<!--
Here is another comment.
-->

---
src: ./pages/node.md
layout: center
---



---
src: ./pages/architecture/context-view.md
---



---
src: ./pages/architecture/building-block-view.md
---



---
src: ./pages/express.md
layout: center
transition: slide-up
---



---
src: ./pages/routing/basic.md
layout: center
---



---
layout: cover
background: /server_6.webp
transition: slide-up
---

<div class="flex flex-col items-center">

# HTTP

Hypertext Transfer Protocol

</div>



---
src: ./pages/http/basics.md
transition: slide-up
---



---
src: ./pages/http/cookies.md
transition: slide-up
---



---
src: ./pages/http/crud.md
layout: image-right
image: /server_7.webp
transition: slide-up
---



---
src: ./pages/http/rest.md
layout: two-cols-header
transition: slide-up
---



---
src: ./pages/http/restful-api.md
layout: two-cols-header
transition: slide-right
level: 2
---



---
src: ./pages/routing/basic-final.md
layout: center
transition: slide-up
level: 2
---


---
src: ./pages/routing/advanced.md
layout: three-cols-header
level: 2
transition: slide-up
---



---
layout: cover
class: text-center
---

# Questions?
