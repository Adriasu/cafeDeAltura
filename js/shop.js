import { productsCards } from "../utils/products.js";

const cardsProducts = document.createElement("section");
const cardsConditions = document.getElementById("cardsConditions");
const h2 = document.createElement("h2");
const containCardsProducts = document.createElement("div");
const cart = document.createElement("div");

document
  .getElementsByTagName("body")[0]
  .insertBefore(cardsProducts, cardsConditions);
document.getElementsByTagName("nav")[0].appendChild(cart);

cart.id = "cart";
cardsProducts.id = "cardsProducts";
cardsProducts.appendChild(h2);
cardsProducts.appendChild(containCardsProducts);

h2.innerHTML = "Últimos orígenes";
containCardsProducts.id = "containCardsProducts";

productsCards.forEach((card) => {
  const cardNewsWrapperProduct = document.createElement("div");
  const imgCard = document.createElement("img");
  const containProductInfo = document.createElement("div");
  const nameProductCard = document.createElement("p");
  const priceProductCard = document.createElement("p");
  const buttonCardAdd = document.createElement("a");

  containCardsProducts.appendChild(cardNewsWrapperProduct);
  cardNewsWrapperProduct.appendChild(imgCard);
  cardNewsWrapperProduct.appendChild(containProductInfo);
  containProductInfo.appendChild(nameProductCard);
  containProductInfo.appendChild(priceProductCard);
  cardNewsWrapperProduct.appendChild(buttonCardAdd);

  cardNewsWrapperProduct.className = "cardNewsWrapperProduct";
  containProductInfo.className = "productInfo";

  imgCard.src = card.img;
  nameProductCard.innerHTML = card.nameProduct;
  priceProductCard.innerHTML = card.price;
  buttonCardAdd.href = "";

  card.available === true
    ? (buttonCardAdd.innerHTML = "Añadir")
    : (buttonCardAdd.innerHTML = "Agotado");
});
