const button = document.querySelector("button");

// button.onclick = function() {

// }

const onButtonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotheButtonClickHandler = () => {
  console.log("This was clicked!");
};

// button.onclick = onButtonClickHandler;

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", onButtonClickHandler);
// });

// setTimeout(() => {
//   button.removeEventListener("click", onButtonClickHandler);
// }, 2000);

window.addEventListener("scroll", (event) => {
  console.log(event);
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => e.preventDefault());

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("clicked div");
  console.log(event);
});

button.addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("clicked button");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) =>
//     event.target.classList.toggle("highlight")
//   );
// });

list.addEventListener("click", (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
  form.submit();
});
