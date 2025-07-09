export function menuPage() {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("class", "menu-content");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Halo Guys";

  menuContent.appendChild(menuTitle);

  return menuContent;
}
