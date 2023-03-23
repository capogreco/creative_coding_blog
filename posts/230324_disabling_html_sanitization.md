---
title: Disabling HTML Sanitization
publish_date: 2023-01-30
abstract: Tutorial on how to disable HTML sanitization in deno_blog.
disable_html_sanitization: true
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3oqzdlEWguA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#  TL;DW

### In your `import_map.json`

Associate the `"blog"` key of the `"imports"` object in the `import_map.json` file, with this URL: `"https://raw.githubusercontent.com/denoland/deno_blog/main/blog.tsx"`. 

ie. edit your `import_map.json` to look something like this:

```json
{
  "imports": {
    "blog": "https://raw.githubusercontent.com/denoland/deno_blog/main/blog.tsx"
  }
}
```

You will only need to do this once.

### In your `.md` file:
Include `disable_html_sanitization: true` in the front matter of the `.md` file.

ie. your front matter should end up looking something like this:

```
---
title: Your Title
publish_date: 2023-03-24
disable_html_sanitization: true
---
```

You will need to do this for each blog post you wish to use unsanitized html in.
