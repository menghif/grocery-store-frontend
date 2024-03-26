// create HTML elements and append content in it
function setupItems(itemsArray) {
  itemsArray.forEach((item) => {
    var itemsDiv = document.createElement("div");
    var itemTitle = document.createElement("h3");
    var description = document.createElement("p");
    var price = document.createElement("p");
    price.className = "priceTag";
    var imageElem = document.createElement("img");
    var addToBag = document.createElement("button");
    addToBag.className = "button";

    itemTitle.innerHTML = item.name;
    description.innerHTML = item.description;
    price.innerHTML = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(item.price);
    imageElem.src = item.image;
    imageElem.alt = item.name;
    imageElem.width = "225";
    imageElem.height = "225";
    addToBag.innerHTML = "ADD TO BAG";

    itemsDiv.appendChild(itemTitle);
    itemsDiv.appendChild(description);
    itemsDiv.appendChild(price);
    itemsDiv.appendChild(imageElem);
    itemsDiv.appendChild(addToBag);

    var allItemsDiv = document.querySelectorAll("#allItemsDisplay");

    allItemsDiv.forEach((elem) => {
      elem.appendChild(itemsDiv);
    });
  });
}

function clearTable() {
  var emptyDiv = document.querySelector("#allItemsDisplay");
  emptyDiv.innerHTML = "";
}

// only get Food items into a new array
var foodArr = window.products.filter((item) => item.type === window.types.food);
// only get Drink items into a new array
var drinkArr = window.products.filter(
  (item) => item.type === window.types.drink
);

// call setupItems function with new array
function getItemsByType(id, itemsArray, title) {
  document.querySelector(id).addEventListener("click", function () {
    var listTitle = document.querySelector("#listTitle");
    var newTitle = document.createElement("h2");
    listTitle.innerHTML = "";
    newTitle.innerHTML = title;
    listTitle.appendChild(newTitle);
    clearTable();
    setupItems(itemsArray);
  });
}

getItemsByType("#foodMenu", foodArr, window.types.food);
getItemsByType("#drinkMenu", drinkArr, window.types.drink);
getItemsByType("#allProductsMenu", window.products, "All Products");

window.onload = setupItems(window.products);
