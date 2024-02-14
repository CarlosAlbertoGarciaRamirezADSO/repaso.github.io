const menu = document.querySelector(".menu");
const nav_bar = document.querySelector(".nav__bar");

menu.addEventListener("click", (() => {
  nav_bar.classList.toggle("aparecer")
}))