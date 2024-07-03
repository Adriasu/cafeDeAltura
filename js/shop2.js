import {
  cartEmpty,
  counterBag,
  hideCart,
  productCount,
} from "../utils/functions.js";
import { productsCards } from "../utils/products.js";

const cardsProducts = document.createElement("section");
const h2 = document.createElement("h2");
const containCardsProducts = document.createElement("div");
const cart = document.createElement("div");
const titleCart = document.createElement("h2");
const containSelectedProducts = document.createElement("div");
const containBtnClearTotal = document.createElement("div");
const btnClear = document.createElement("a");
const totalPrice = document.createElement("a");

const cardsConditions = document.getElementById("cardsConditions");
const sumProducts = document.getElementById("sumProducts");
const bag = document.getElementById("bag");

// contenedor cards

document
  .getElementsByTagName("body")[0]
  .insertBefore(cardsProducts, cardsConditions);
cardsProducts.id = "cardsProducts";
cardsProducts.appendChild(h2);
h2.innerHTML = "Últimos orígenes";
cardsProducts.appendChild(containCardsProducts);
containCardsProducts.id = "containCardsProducts";

// carrito

document.getElementsByTagName("nav")[0].appendChild(cart);
cart.id = "cart";
cart.appendChild(titleCart);
titleCart.innerHTML = "Cesta";
cart.appendChild(containSelectedProducts);
containSelectedProducts.id = "containSelectedProducts";
cart.appendChild(containBtnClearTotal);
containBtnClearTotal.id = "containBtnClearTotal";
containBtnClearTotal.appendChild(totalPrice);
totalPrice.innerHTML = "Check-Out: 0 €";
totalPrice.href = "/pages/cesta.html";
containBtnClearTotal.appendChild(btnClear);
btnClear.innerHTML = "Clear";

// ver/ocultar carrrito

bag.addEventListener("click", () => {
  cart.style.display === "flex"
    ? (cart.style.display = "none")
    : (cart.style.display = "flex");
});

const arrayCart = [];
let total = 0;
let totalOfProducts = 0;

// btnClear

btnClear.addEventListener("click", () => {
  containSelectedProducts.innerHTML = "";
  arrayCart.splice(0, arrayCart.length);
  cartEmpty(arrayCart, containSelectedProducts);
  totalOfProducts = 0;
  sumProducts.innerHTML = totalOfProducts;
  total = 0;
  totalPrice.innerHTML = "check out: 0,00 €";
  counterBag(totalOfProducts);
});

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

  buttonCardAdd.addEventListener("click", () => {
    const productSelected = {
      id: card.id,
      img: card.img,
      nameProduct: card.nameProduct,
      price: card.price,
      count: 1,
    };

    totalOfProducts += productSelected.count;
    sumProducts.innerHTML = totalOfProducts;

    total += productSelected.count * productSelected.price;
    totalPrice.innerHTML = `check out: ${total.toFixed(2)} €`;

    productCount(productSelected, arrayCart);
    containSelectedProducts.innerHTML = "";

    arrayCart.forEach((selectedProduct) => {
      const card = document.createElement("section");
      const img = document.createElement("img");
      const textContain = document.createElement("div");
      const textName = document.createElement("p");
      const textPrice = document.createElement("p");
      const containCounterBtn = document.createElement("div");
      const counter = document.createElement("p");
      const btnAdd = document.createElement("img");
      const btnSubtract = document.createElement("img");

      containSelectedProducts.appendChild(card);
      card.appendChild(img);
      card.appendChild(textContain);
      textContain.appendChild(textName);
      textContain.appendChild(textPrice);
      card.appendChild(containCounterBtn);
      containCounterBtn.appendChild(btnAdd);
      containCounterBtn.appendChild(counter);
      containCounterBtn.appendChild(btnSubtract);

      card.className = "cardSelected";
      textContain.className = "textContain";
      containCounterBtn.className = "containCounterBtn";
      img.className = "imgCardSelected";
      textName.className = "textNameCardSelected";
      btnAdd.className = "btnAdd";
      btnSubtract.className = "btnSubtract";

      img.src = selectedProduct.img;
      textName.innerHTML = selectedProduct.nameProduct;
      textPrice.innerHTML = `${selectedProduct.price.toFixed(2)} €`;
      btnAdd.src = "/assets/images/heroicons-outline_plus-sm.png";
      counter.innerHTML = selectedProduct.count;
      btnSubtract.src = "/assets/images/heroicons-outline_minus-sm.png";

      btnAdd.addEventListener("click", () => {
        totalOfProducts++;
        sumProducts.innerHTML = totalOfProducts;

        selectedProduct.count++;
        counter.innerHTML = selectedProduct.count;

        total += selectedProduct.price;
        totalPrice.innerHTML = `check out: ${total.toFixed(2)} €`;
      });

      btnSubtract.addEventListener("click", (event) => {
        if (selectedProduct.count > 1) {
          selectedProduct.count--;
          counter.innerHTML = selectedProduct.count;
        } else {
          event.target.parentElement.parentElement.remove();
          const deleteProduct = arrayCart.findIndex((product) => {
            return product.id === selectedProduct.id;
          });
          arrayCart.splice(deleteProduct, 1);
        }
        totalOfProducts -= productSelected.count;
        sumProducts.innerHTML = totalOfProducts;

        total -= selectedProduct.price;
        totalPrice.innerHTML = `check out: ${total.toFixed(2)} €`;

        hideCart(containSelectedProducts);
        cartEmpty(arrayCart, containSelectedProducts);
      });
    });
    counterBag(totalOfProducts);
  });
});

cartEmpty(arrayCart, containSelectedProducts);
