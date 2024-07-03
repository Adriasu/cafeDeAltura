import { cartEmpty, counterBag } from "./functions.js";

export function createCart() {
  const cart = document.createElement("div");
  const titleCart = document.createElement("h2");
  const containSelectedProducts = document.createElement("div");
  const containBtnClearTotal = document.createElement("div");
  const btnClear = document.createElement("a");
  const totalPrice = document.createElement("a");

  document.getElementsByTagName("nav")[0].appendChild(cart);
  cart.id = "cart";
  cart.appendChild(titleCart);
  titleCart.innerHTML = "Cesta";
  cart.appendChild(containSelectedProducts);
  containSelectedProducts.id = "containSelectedProducts";
  cart.appendChild(containBtnClearTotal);
  containBtnClearTotal.id = "containBtnClearTotal";
  containBtnClearTotal.appendChild(totalPrice);
  totalPrice.id = "totalPrice"
  totalPrice.innerHTML = "Check-Out: 0 €";
  totalPrice.href = "/pages/cesta.html";
  containBtnClearTotal.appendChild(btnClear);
  btnClear.id = "btnClear"
  btnClear.innerHTML = "Clear";
}

export function viewHideCart(bag) {
  bag.addEventListener("click", () => {
    cart.style.display === "flex"
      ? (cart.style.display = "none")
      : (cart.style.display = "flex");
  });
}

export function btnClearFn(btn) {
  btn.addEventListener("click", () => {
    containSelectedProducts.innerHTML = "";
    arrayCart.splice(0, arrayCart.length);
    cartEmpty(arrayCart, containSelectedProducts);
    totalOfProducts = 0;
    sumProducts.innerHTML = totalOfProducts;
    total = 0;
    totalPrice.innerHTML = "check out: 0,00 €";
    counterBag(totalOfProducts);
  });
  return
}
