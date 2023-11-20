(function () {
  "use strict";

  let box = document.querySelector(".box"),
    Li = document.querySelectorAll("li"),
    Title = document.querySelector("h1"),
    counterTitle = 0,
    counterColor = 0,
    color;

  const colors = [
    "crimson",
    "deeppink",
    "deepskyblue",
    "gold",
    "lightgrey",
    "pink",
    "orange",
    "mediumturquoise",
    "lemonchiffon",
    "indigo"
  ];

  document.querySelector('li:nth-child(1)').classList.add('active')

  for(color of colors){
    document.querySelector(`li:nth-child(${++counterTitle})`).title = color;
    document.querySelector(`li:nth-child(${++counterColor}) span`).style.backgroundColor = color;
  }

  Li.forEach((li) => {
    li.addEventListener("click", () => {
      Li.forEach((li) => {
        li.classList.remove("active");
      });
      li.classList.add("active");
      Title.innerText = li.attributes.title.value;
      box.style.backgroundColor = li.attributes.title.value;
    });
  });
})();