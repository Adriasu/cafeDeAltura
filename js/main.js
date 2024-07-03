import { productsCards } from "../utils/products.js";

const cardsNewsWrapper = document.getElementById("cardsNewsWrapper")

productsCards.slice(0, 4).forEach((card) =>{

const cardNewsWrapperProduct = document.createElement("div");
  const imgCard = document.createElement("img");
  const containProductInfo = document.createElement("div");
  const nameProductCard = document.createElement("p");
  const priceProductCard = document.createElement("p");
  const buttonCardAdd = document.createElement("a");

  cardsNewsWrapper.appendChild(cardNewsWrapperProduct);
  cardNewsWrapperProduct.appendChild(imgCard);
  cardNewsWrapperProduct.appendChild(containProductInfo);
  containProductInfo.appendChild(nameProductCard);
  containProductInfo.appendChild(priceProductCard);
  cardNewsWrapperProduct.appendChild(buttonCardAdd);

  cardNewsWrapperProduct.className = "cardNewsWrapperProduct hoverCards";
  containProductInfo.className = "productInfo";
  buttonCardAdd.className = "Active hoverBtn";

  imgCard.src = card.img;
  nameProductCard.innerHTML = card.nameProduct;
  priceProductCard.innerHTML = `${card.price.toFixed(2)} €`;
  card.available === true
    ? (buttonCardAdd.innerHTML = "Añadir")
    : (buttonCardAdd.innerHTML = "Agotado");
  if (card.available === false) {
    buttonCardAdd.classList.add("notActive");
    buttonCardAdd.classList.remove("hoverBtn");
    cardNewsWrapperProduct.classList.remove("hoverCards");
    containProductInfo.style.opacity = "40%";
  }






})
