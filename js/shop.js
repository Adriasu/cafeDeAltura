import { counterBag, productCount } from "../utils/functions.js";
import { productsCards } from "../utils/products.js";

const cardsProducts = document.createElement("section");
const h2 = document.createElement("h2");
const cart = document.createElement("div");
const containCardsProducts = document.createElement("div");
const btnClear = document.createElement("a");
const containSelectedProducts = document.createElement("div");
const containBtnClearTotal = document.createElement("div");
const totalPrice = document.createElement("p");
const cardsConditions = document.getElementById("cardsConditions");
const sumProducts = document.getElementById("sumProducts");
const bag = document.getElementById("bag");

document
  .getElementsByTagName("body")[0]
  .insertBefore(cardsProducts, cardsConditions);
document.getElementsByTagName("nav")[0].appendChild(cart);
cart.appendChild(containSelectedProducts);
cart.appendChild(containBtnClearTotal);
containBtnClearTotal.appendChild(totalPrice);
containBtnClearTotal.appendChild(btnClear);

containBtnClearTotal.id = "containBtnClearTotal";
containSelectedProducts.id = "containSelectedProducts";
cart.id = "cart";
cardsProducts.id = "cardsProducts";
cardsProducts.appendChild(h2);
cardsProducts.appendChild(containCardsProducts);
btnClear.innerHTML = "Clear";

h2.innerHTML = "Últimos orígenes";
containCardsProducts.id = "containCardsProducts";
totalPrice.innerHTML = "Total: 0 €";

bag.addEventListener("click", () => {
  cart.style.display === "flex"
    ? (cart.style.display = "none")
    : (cart.style.display = "flex");
});

const arrayCart = [];
let total = 0;
let totalOfProducts = 0;

btnClear.addEventListener("click", () => {
  containSelectedProducts.innerHTML = "";
  arrayCart.splice(0, arrayCart.length);
  totalOfProducts = 0;
  sumProducts.innerHTML = totalOfProducts;
  total = 0;
  totalPrice.innerHTML = "Total: 0 €";
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
  priceProductCard.innerHTML = card.price;

  card.available === true
    ? (buttonCardAdd.innerHTML = "Añadir")
    : (buttonCardAdd.innerHTML = "Agotado");

  if (card.available === false) {
    buttonCardAdd.classList.add("notActive");
    buttonCardAdd.classList.remove("hoverBtn");
    cardNewsWrapperProduct.classList.remove("hoverCards");
  }
  buttonCardAdd.addEventListener("click", () => {
    const productSelected = {
      id: card.id,
      img: card.img,
      nameProduct: card.nameProduct,
      price: card.price,
      count: 1,
    };

    let numPrice = productSelected.price.split(" ");
    total += parseInt(productSelected.count * numPrice[0]);
    totalPrice.innerHTML = `Total: ${total.toFixed(2)} €`;

    totalOfProducts += productSelected.count;
    sumProducts.innerHTML = totalOfProducts;

    productCount(productSelected, arrayCart);
    containSelectedProducts.innerHTML = "";

    arrayCart.forEach((newProduct) => {
      const card = document.createElement("section");
      const img = document.createElement("img");
      const textContain = document.createElement("div");
      const textName = document.createElement("p");
      const textPrice = document.createElement("p");
      const containCounterBtn = document.createElement("div");
      const buttonCard = document.createElement("img");
      const counter = document.createElement("p");

      containSelectedProducts.appendChild(card);
      card.appendChild(img);
      card.appendChild(textContain);
      textContain.appendChild(textName);
      textContain.appendChild(textPrice);
      card.appendChild(containCounterBtn);
      containCounterBtn.appendChild(counter);
      containCounterBtn.appendChild(buttonCard);

      card.className = "cardSelected";
      textContain.className = "textContain";
      containCounterBtn.className = "containCounterBtn";
      img.className = "imgCardSelected";
      textName.className = "textNameCardSelected";
      buttonCard.className = "deleteCardSelected";

      img.src = newProduct.img;
      textName.innerHTML = newProduct.nameProduct;
      textPrice.innerHTML = newProduct.price;
      buttonCard.src =
        "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
      counter.innerHTML = newProduct.count;

      buttonCard.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.remove();

        const deleteProduct = arrayCart.findIndex((product) => {
          return product.id === newProduct.id;
        });
        arrayCart.splice(deleteProduct, 1);

        totalOfProducts -= newProduct.count;
        sumProducts.innerHTML = totalOfProducts;

        console.log(newProduct.count);
        console.log(numPrice[0]);

        total -= parseInt(newProduct.count * numPrice[0]);

        console.log(total);
        totalPrice.innerHTML = `Total: ${total.toFixed(2)} €`;
      });
    });
    counterBag(totalOfProducts);
  });
});
