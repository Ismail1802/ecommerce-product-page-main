const menuOpen = document.getElementById("menu");
const menuClose = document.getElementById("close");
const navBar = document.querySelector("nav");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("null");
const btn = document.getElementById("btn");
const gdeAfter = document.querySelector(".havecart");
const buttons = document.querySelectorAll("[data-carousel-button]");
const cart = document.querySelector(".havecart");
const card = document.querySelector(".cart");
const cartNumber = document.querySelector(".cart-number");
const nullNumber = document.getElementById("null");
const modal = document.querySelector(".modal");
const empty = document.querySelector(".empty");
const gear = document.querySelector(".gear");
const quantity = document.querySelector(".quantity");
const body = document.querySelector(".body");
const deleteItem = document.querySelector(".delete");
const lishki = document.querySelectorAll(".slide");
const mainImage = document.querySelector("#main-img");
const mainImage2 = document.querySelector("#mainI");
const closeB = document.querySelector(".closeblyat");
const aside = document.querySelector(".aside");
const res = document.querySelector(".jirniy");

mainImage.addEventListener("click", () => {
  aside.classList.add("flex");
});
closeB.addEventListener("click", () => {
  aside.classList.remove("flex");
});
aside.addEventListener("click", () => {
  aside.classList.remove("flex");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let count = 0;
menuOpen.addEventListener("click", () => {
  navBar.classList.add("open_menu");
  body.classList.add("hidden");
});

menuClose.addEventListener("click", () => {
  navBar.classList.remove("open_menu");
  body.classList.remove("hidden");
});

plus.addEventListener("click", () => {
  number.innerText = count;
  count++;
});
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    return;
  }
  number.innerText = count;
});
deleteItem.addEventListener("click", () => {
  gear.classList.remove("show");
  empty.classList.add("flex");
  cartNumber.classList.remove("show-number");
  nullNumber.innerHTML = 0;
  count = 0;
  gear.classList.remove("show");
});

btn.addEventListener("click", () => {
  quantity.innerText = nullNumber.innerText;
  if (nullNumber.innerText === "0") {
    return;
  }
  cartNumber.classList.add("show-number");
  cartNumber.innerText = number.innerText;
});

card.addEventListener("click", (e) => {
  modal.classList.toggle("show");
  e.stopPropagation();
  window.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  if (cartNumber.innerText === "0" || cartNumber.innerText === "") {
    empty.classList.add("flex");
    return;
  }
  empty.classList.remove("flex");
  if (count > 0) {
    gear.classList.add("show");
  } else {
    empty.classList.add("flex");
  }
  quantity.innerText = nullNumber.innerText;
});

lishki.forEach((li) => {
  li.addEventListener("click", (e) => {
    for (const box of lishki) {
      box.classList.remove("mama");
    }
    li.classList.add("mama");
    let alo = e.target.getAttribute("src");
    mainImage.setAttribute("src", `${alo}`);
    mainImage2.setAttribute("src", `${alo}`);
  });
});
