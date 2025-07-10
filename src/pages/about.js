import "../styles/about.css";

export function aboutPage() {
  const aboutContent = document.createElement("div");
  aboutContent.setAttribute("class", "about-content");

  const aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About Us";

  const aboutPara = document.createElement("p");
  aboutPara.innerHTML =
    "Wanmin Restaurant is a renowned eatery located in the heart of Liyue Harbor, managed by the skilled Chef Mao, who specializes in traditional Liyue cuisine. It is famous as the best place to savor spicy and flavorful dishes that awaken the senses. The restaurant's signature meals reflect the bold, hearty, and warming flavors characteristic of the Geo region.<br><br> Wanmin Restaurant is also the home and training ground of Xiangling, a well-known young chef and beloved character with a passion for cooking.<br><br>With the irresistible aroma of freshly cooked meals and a warm, welcoming atmosphere, Wanmin Restaurant is a favorite destination for both locals and travelers passing through Liyue.";

  aboutContent.appendChild(aboutTitle);
  aboutContent.appendChild(aboutPara);

  return aboutContent;
}
