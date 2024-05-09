import { createPostCard } from "../modules/postsApi.js";

let createPostBtn = document.getElementById("save-comment");
let releventCheck = document.getElementById("flexCheckDefault");

createPostBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  let fields = document.querySelectorAll("#create-post-form input");
  let postObject = {};
  fields.forEach((field) => {
    let property = field.name;
    let value = field.value;

    postObject[property] = value;
  });
  let year = Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
  let month = Math.floor(Math.random() * 12);
  let day =
    Math.floor(Math.random() * new Date(year, month + 1, 0).getDate()) + 1;
  let fechaAleatoria = new Date(year, month, day);

  postObject["date"] = fechaAleatoria.toDateString();
  postObject["rate"] = Math.floor(Math.random() * 10) + 1;
  releventCheck.checked
    ? (postObject["relevent"] = true)
    : (postObject["relevent"] = false);
  console.log(postObject);
  await createPostCard(postObject);
  window.open("../views/home.html", "_self");
});
