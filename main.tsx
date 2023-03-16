/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Creative Coding Blog!",
  description: "Javascript, Critical Posthumanism, etc.",
  avatar: "./images/rmit_pfp.jpeg",
  avatarClass: "rounded-full",
  author: "Thomas Capogreco",
  dateStyle: "dd-MM-yyyy",
  dateFormat: (date) => new Intl.DateTimeFormat (
      "en-GB", 
      { dateStyle: "long" }
    ).format (date),
});
