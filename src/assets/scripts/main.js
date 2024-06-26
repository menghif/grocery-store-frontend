(function () {
  const cart = [];

  // create HTML elements and append content in it
  const setupItems = (productsArray) => {
    productsArray.forEach((product) => {
      const productsDiv = document.createElement("div");
      const top = document.createElement("div");
      const productTitle = document.createElement("h3");
      const description = document.createElement("p");
      const bottom = document.createElement("div");
      const price = document.createElement("p");
      const imageElem = document.createElement("img");
      const addToBag = document.createElement("button");

      productTitle.textContent = product.name;
      description.textContent = product.description;
      top.className = "top";
      bottom.className = "bottom";

      price.className = "priceTag";
      price.textContent = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
      }).format(product.price);

      imageElem.className = "productImage";
      imageElem.src = product.image;
      imageElem.alt = product.name;

      addToBag.className = "button";
      addToBag.textContent = "ADD TO BAG";

      addToBag.addEventListener("click", () => {
        cart.push(productTitle.textContent);

        console.log(cart);
      });

      productsDiv.className = "productCard";
      top.appendChild(productTitle);
      top.appendChild(description);
      bottom.appendChild(price);
      bottom.appendChild(imageElem);
      bottom.appendChild(addToBag);
      productsDiv.appendChild(top);
      productsDiv.appendChild(bottom);

      const allItemsDiv = document.querySelector("#allItemsDisplay");
      allItemsDiv.appendChild(productsDiv);
    });
  };

  const clearTable = () => {
    const emptyDiv = document.querySelector("#allItemsDisplay");
    emptyDiv.textContent = "";
  };

  // call setupItems function with new array
  const getItemsByType = (id, productsArray, title) => {
    document.querySelector(id).addEventListener("click", () => {
      const listTitle = document.querySelector("#listTitle");
      listTitle.textContent = title;
      clearTable();
      setupItems(productsArray);
    });
  };

  // only get Food products into a new array
  const foodArr = window.products.filter(
    (product) => product.type === window.types.food
  );

  // only get Drink products into a new array
  const drinkArr = window.products.filter(
    (product) => product.type === window.types.drink
  );

  getItemsByType("#foodMenu", foodArr, window.types.food);
  getItemsByType("#drinkMenu", drinkArr, window.types.drink);
  getItemsByType("#allProductsMenu", window.products, "All Products");

  window.addEventListener("load", () => setupItems(window.products));
})();
