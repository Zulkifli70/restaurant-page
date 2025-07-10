import { homePage } from "./pages/home.js";
import { menuPage } from "./pages/menu.js";
import { aboutPage } from "./pages/about.js";

const content = document.querySelector(".content");

content.appendChild(homePage());
// content.appendChild(menuPage());

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", function (e) {
  content.innerHTML = "";
  content.appendChild(homePage());
});

menuBtn.addEventListener("click", function (e) {
  content.innerHTML = "";
  content.appendChild(menuPage());
});

aboutBtn.addEventListener("click", function (e) {
  content.innerHTML = "";
  content.appendChild(aboutPage());
});
