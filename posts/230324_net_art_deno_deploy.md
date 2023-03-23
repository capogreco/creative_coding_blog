---
title: Net Art with Deno Deploy
publish_date: 2023-01-30
abstract: Walkthrough for getting set up for AT2
disable_html_sanitization: true
---

1. Make sure you are logged into [GitHub](https://github.com/)
2. Go [here](https://github.com/capogreco/blank_net_art), and click "Use this template"
3. Click "Create a new repository"
4. Give your new repo a name - something like "net_art" should do the trick
5. Click "Create repository from template"
6. Navigate to a suitable location on your computer in a terminal window
7. Clone your new repo with `git clone URL_OF_REPO` (making sure to replace `URL_of_REPO` with the URL of your repository)
8. Open the repo in VS Code using `code NAME_OF_REPO` (where `NAME_OF_REPO` is the name of your repository)
9. In VS Code, look in the `public` folder - here you will see an `index.html`, the minified version of the p5 library `p5.min.js`, and a `sketch.js` file with a p5 sketch set up and ready to go.
10. Use `deno run --allow-net --allow-read main.ts` in the root folder of your repo to serve your page to `localhost`
11. Install [denon](https://deno.land/x/denon@2.5.0), with `deno install -qAf --unstable https://deno.land/x/denon/denon.ts`
12. Once this is installed, you can replace `deno` with `denon`, and denon will automatically watch your files and restart your server when there are changes (way better).  Use `denon run --allow-net -allow-read main.ts` to serve your page to `localhost`, this time with a file watcher
13. Make changes to the `sketch.js` file and save them - try putting a pink square right in the middle.
14. Push your changes to GitHub with:
    1.  `git add .`
    2.  `git commit -m 'description of changes'`
    3.  `git push`
15. In [Deno Deploy](https://deno.com/deploy), make a new project and link to your repo to make your net_art live.