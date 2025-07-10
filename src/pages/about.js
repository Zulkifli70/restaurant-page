export function aboutPage() {
  const aboutContent = document.createElement("div");

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";

  aboutContent.appendChild(aboutTitle);

  return aboutContent;
}
