/*
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", onParentClick);
child.addEventListener("click", onChildClick);
innerChild.addEventListener("click", onInnerChildClick);
innerChild.addEventListener("click", foo);

function onParentClick(event) {
  console.log("onParentClick", event.target);
  console.log("onParentClick", event.currentTarget);
}

function onChildClick(event) {
  console.log("onChildClick", event.target);
  console.log("onChildClick", event.currentTarget);
}

function onInnerChildClick(event) {
  // event.stopPropagation();
  event.stopImmediatePropagation();
  console.log("onInnerChildClick", event.target);
  console.log("onInnerChildClick", event.currentTarget);
}

function foo() {
  console.log("foo");
}
*/
/*
const container = document.querySelector(".container");
[...container.children].forEach((box) => {
  console.log(box);

  box.addEventListener("click", handleClick);
});

function handleClick(event) {
  const color = event.currentTarget.dataset.color;
  console.log(color);
}
*/
/*
const container = document.querySelector(".container");
container.addEventListener("click", handleClick);
function handleClick(event) {
  // console.log(event.currentTarget);
  // console.log(event.target);
  if (!event.target.classList.contains("box")) {
    // console.log("ok");
    retern;
  }
  const color = event.target.dataset.color;
  console.log(color);
}
*/
/*
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
*/
/*
if (typeof localStorage !== "undefined") {
  console.log("localStorage is available");
} else {
  console.log("localStorage is not available");
}
*/

// const user = { name: "Alice", age: 25 };
// sessionStorage.setItem("user", JSON.stringify(user)); // Перетворюємо об'єкт на рядок і зберігаємо

// const user = JSON.parse(sessionStorage.getItem("user"));
// console.log(user); // Виведе об'єкт { name: "Alice", age: 25 }

/*
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
*/

// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.
/*
const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
*/

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
