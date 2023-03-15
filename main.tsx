/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Creative Coding Blog!",
  description: "Javascript, Communities of Practice, & Posthumanism",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./images/rmit_pfp.jpeg",
  avatarClass: "rounded-full",
  author: "Thomas Capogreco",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
