const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg";

button.addEventListener("click", () => {
  // section.className = "red-bg visible";
  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
