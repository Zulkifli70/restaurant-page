import warungImg from "../img/wanmin.jpeg";
import "../styles/styles.css";

export function homePage() {
  const homeContent = document.createElement("div");
  homeContent.setAttribute("class", "home-content");

  const imgSect = document.createElement("div");
  imgSect.setAttribute("class", "img-sect");

  const image = document.createElement("img");
  image.src = warungImg;

  const welcomeSect = document.createElement("div");
  welcomeSect.setAttribute("class", "welcome-sect");

  const welcomeTitle = document.createElement("h1");
  welcomeTitle.textContent = "Welcome to Wanmin Restaurant";
  welcomeTitle.setAttribute("class", "welcome-title");

  const welcomeLetter = document.createElement("p");
  welcomeLetter.textContent =
    "From the Wok to Your Heart — Taste Liyue’s Finest!";
  welcomeLetter.setAttribute("class", "welcome-letter");

  homeContent.appendChild(imgSect);
  imgSect.appendChild(image);
  homeContent.appendChild(welcomeSect);
  welcomeSect.appendChild(welcomeTitle);
  welcomeSect.appendChild(welcomeLetter);

  return homeContent;
}
