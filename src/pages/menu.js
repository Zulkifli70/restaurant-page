import "../styles/menu.css";

export function menuPage() {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("class", "menu-content");

  const titleContent = document.createElement("div");
  titleContent.setAttribute("class", "title-content");

  const menuTitle = document.createElement("h1");
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
        menuDesc.textContent = menu.desc;

        menuCard.appendChild(menuName);
        menuCard.appendChild(menuImage);
        menuCard.appendChild(menuDesc);
      });
    }
  }

  const MyList = new List();

  MyList.addMenu(
    "Nasi Goreng",
    "https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Nasi Goreng is a famous Indonesian fried rice dish made with pre-cooked rice stir-fried with garlic, shallots, sweet soy sauce (kecap manis), and a variety of ingredients such as eggs, vegetables, chicken, or shrimp. Often topped with fried shallots and served with pickles or crackers, nasi goreng is a flavorful and satisfying comfort food enjoyed at any time of the day."
  );

  MyList.addMenu(
    "Bakso",
    "https://images.unsplash.com/photo-1687425973269-af0d62587769?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Bakso is a popular Indonesian meatball dish typically made from beef, tapioca flour, and spices. It is usually served in a flavorful broth along with noodles, tofu, vegetables, and sometimes boiled eggs or fried dumplings. Known for its savory taste and chewy texture, bakso is a beloved street food found throughout Indonesia."
  );

  MyList.addMenu(
    "Sate",
    "https://images.unsplash.com/photo-1634871572365-8bc444e6faea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Sate (or satay) is a traditional Indonesian dish made of skewered and grilled meat, usually served with a rich and flavorful peanut sauce. The meat can vary—from chicken and beef to goat or lamb—often marinated in a blend of spices before being grilled over charcoal. Sate is commonly served with rice cakes (lontong), cucumber slices, and fried shallots, offering a smoky, sweet, and savory taste in every bite."
  );

  MyList.addMenu(
    "Siomay",
    "https://images.unsplash.com/photo-1727403254476-06ce6f420f99?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Siomay is an Indonesian steamed dumpling dish inspired by Chinese shumai. Made from a mixture of fish (usually mackerel), tapioca flour, and spices, siomay is typically served with boiled vegetables, tofu, egg, and potatoes. It’s topped with a rich, spicy peanut sauce, sweet soy sauce, and a splash of lime juice, creating a savory and slightly sweet flavor that's uniquely Indonesian."
  );

  menuContent.appendChild(titleContent);
  titleContent.appendChild(menuTitle);
  menuContent.appendChild(menuList);

  return menuContent;
}
