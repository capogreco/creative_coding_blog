---
title: Date Style
publish_date: 16-03-2023
disable_html_sanitization: true
---

Ok!  A quick post regarding how `deno_blog` handles dates in your blog.

First, we should make explicit that really there are two issues here:
1. inputting dates in such a way that `deno_blog` understands what we are trying to tell it (ie. **input**)
2. the format of the dates `deno_blog` generates automatically (ie. **output**)

## Specifying the Input Format

The main place you will be *inputting* dates is in the frontmatter of your markdown files, next to where it says `publish_date:`.  The format `deno_blog` expects here can be customised in `main.tsx`, with the inclusion of:

```javascript
dateStyle: "dd-MM-yyyy",
```

... within the object we're passing in to the `blog ()` function, under `author: "Your Name Here",` for example.

## Specifying the Output Format

Similarly, the format `deno_blog` uses when displaying dates can be specified, using `dateFormat: ` in the same object, as below:

```javascript
dateFormat: (date) =>  new Intl.DateTimeFormat (
   "en-GB", 
   { dateStyle: "long" }
   ).format (date),
```

In this example, you can see that we are associating with `dateFormat` a *function*, rather than a string.

So, currently my `main.tsx` looks like this:

```javascript
/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Creative Coding Blog!",
  description: "Javascript, Critical Posthumanism, etc.",
  avatar: "./images/rmit_pfp.jpeg",
  avatarClass: "rounded-full",
  author: "Thomas Capogreco",
  dateStyle: "dd-MM-yyyy",
  dateFormat: (date) =>  new Intl.DateTimeFormat (
      "en-GB", 
      { dateStyle: "long" }
    ).format (date),
});

```

I'm sure this file will evolve further as we continue to learn about what `deno_blog` can do.