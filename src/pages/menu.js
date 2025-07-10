import "../styles/menu.css";

export function menuPage() {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("class", "menu-content");

  const titleContent = document.createElement("div");
  titleContent.setAttribute("class", "title-content");

  const menuTitle = document.createElement("h1");
  menuTitle.setAttribute("class", "menu-title");
  menuTitle.textContent = "Menu";

  const menuList = document.createElement("div");
  menuList.setAttribute("class", "menu-list");

  class Menu {
    constructor(name, image = "./img/", desc) {
      this.name = name;
      this.image = image;
      this.desc = desc;
    }
  }

  class List {
    constructor() {
      this.menus = [];
    }

    addMenu(name, image, desc) {
      const menu = new Menu(name, image, desc);
      this.menus.push(menu);
      this.displayMenu();
    }

    displayMenu() {
      menuList.innerHTML = "";

      this.menus.forEach((menu) => {
        const menuCard = document.createElement("div");
        menuCard.setAttribute("class", "menu-card");
        menuList.appendChild(menuCard);

        const menuName = document.createElement("h1");
        menuName.setAttribute("class", "menu-name");
        menuName.textContent = menu.name;

        const menuImage = document.createElement("img");
        menuImage.setAttribute("class", "menu-image");
        menuImage.alt = `Gambar menu ${menu.name}`;
        menuImage.src = menu.image;

        const menuDesc = document.createElement("p");
        menuDesc.setAttribute("class", "menu-desc");
        menuDesc.textContent = menu.desc.split(" ").slice(0, 50).join(" ");

        menuCard.appendChild(menuName);
        menuCard.appendChild(menuImage);
        menuCard.appendChild(menuDesc);
      });
    }
  }

  const MyList = new List();

  MyList.addMenu(
    "Almond Tofu",
    "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/%2522Sweet%2520Dream%2522_icon.png",
    "A dessert made out of almond. It has a silky-smooth texture with a long-lasting aroma of almond. It's named tofu only because of its tofu-like shape."
  );

  MyList.addMenu(
    "Adeptus Temptation",
    "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Adeptus'%2520Temptation_icon.png",
    "A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly boiled in soup stock. The recipe scribbled from memory alone was enough to urge the adepti to once again return to the world of men."
  );

  MyList.addMenu(
    "Bamboo Shoot Soup",
    "https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/object/Slow-Cooked%2520Bamboo%2520Shoot%2520Soup_icon.png",
    "A soup dish that's been stewed for a good long while. The meat and ham have been diced into small pieces, and the soup has been kept on low heat till it turned milky white. The process has brought out the distinct flavors of both kinds of meat, making for an especially tasty soup."
  );

  MyList.addMenu(
    "Jade Parcel",
    "https://upload-static.hoyoverse.com/hoyolab-wiki/2023/04/20/94376896/f5bdfb7502762e733debdecc0b79cdaf_608908729546421919.png?x-oss-process=image%2Fformat%2Cwebp",
    "An exquisite-looking dish. The ham's sweetness is locked inside the fresh vegetables, drizzled with a spicy broth. Delicious is an understatement."
  );

  menuContent.appendChild(titleContent);
  titleContent.appendChild(menuTitle);
  menuContent.appendChild(menuList);

  return menuContent;
}
