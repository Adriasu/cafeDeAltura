import { btnClearFn, createCart } from "../utils/cart.js";
import { createCards } from "../utils/functions.js";
import { productsCards } from "../utils/products.js";

const cardsProducts = document.createElement("section");
const h2 = document.createElement("h2");
const containCardsProducts = document.createElement("div");

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

createCart();

// ver/ocultar carrrito

bag.addEventListener("click", () => {
  cart.style.display === "flex"
    ? (cart.style.display = "none")
    : (cart.style.display = "flex");
});

// array y contadores

const arrayCart = [];
JSON.stringify(arrayCart);
localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
const arrayCartLS = JSON.parse(localStorage.getItem("arrayCart"));
console.log(arrayCartLS);
let total = 0;
let totalOfProducts = 0;

// cards

createCards(productsCards);
