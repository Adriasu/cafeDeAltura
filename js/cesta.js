const cards = document.createElement("section");
const titleBag = document.createElement("h2");
const containProductsTotal = document.createElement("div");
const productsSend = document.createElement("div");
const productsTitle = document.createElement("h3");
const sendTitle = document.createElement("h3");
const sendFree = document.createElement("div");
const containInputFree = document.createElement("div");
const freeSendSelector = document.createElement("input");
const containTextSendFree = document.createElement("div");
const deliveryTimeFree = document.createElement("label");
const descriptionDeliveryTimeFree = document.createElement("p");
const valueSendFree = document.createElement("h3");
const dividingLineSend = document.createElement("hr");
const sendUrgent = document.createElement("div");
const containInputUrgent = document.createElement("div");
const urgentSendSelector = document.createElement("input");
const containTextSendUrgent = document.createElement("div");
const deliveryTimeUrgent = document.createElement("label");
const descriptionDeliveryTimeUrgent = document.createElement("p");
const valueSendUrgent = document.createElement("h3");
const totalPrice = document.createElement("div");
const details = document.createElement("div");
const totalCart = document.createElement("h3");
const dividerLineTotalOne = document.createElement("hr");
const carrDetailsSubTotal = document.createElement("div");
const textSubTotal = document.createElement("p");
const textPriceSubTotal = document.createElement("p");
const carrDetailsSend = document.createElement("div");
const textSend = document.createElement("p");
const textPriceSend = document.createElement("p");
const dividerLineTotalTwo = document.createElement("hr");
const carrDetailsTotal = document.createElement("div");
const textTotal = document.createElement("p");
const cotainTotalPriceIVA = document.createElement("div");
const textPriceTotal = document.createElement("p");
const textIVA = document.createElement("p");
const buttonWrapperTotal = document.createElement("div");
const btnCheckOut = document.createElement("a");
const btnContinueShopping = document.createElement("a");

const copyrightFooter = document.getElementById("copyrightFooter");

document.getElementsByTagName("body")[0].insertBefore(cards, copyrightFooter);
cards.appendChild(titleBag);
cards.appendChild(containProductsTotal);
containProductsTotal.appendChild(productsSend);
productsSend.appendChild(productsTitle);
productsSend.appendChild(sendTitle);
productsSend.appendChild(sendFree);
sendFree.appendChild(containInputFree);
containInputFree.appendChild(freeSendSelector);
sendFree.appendChild(containTextSendFree);
containTextSendFree.appendChild(deliveryTimeFree);
containTextSendFree.appendChild(descriptionDeliveryTimeFree);
sendFree.appendChild(valueSendFree);
productsSend.appendChild(dividingLineSend);
productsSend.appendChild(sendUrgent);
sendUrgent.appendChild(containInputUrgent);
containInputUrgent.appendChild(urgentSendSelector);
sendUrgent.appendChild(containTextSendUrgent);
containTextSendUrgent.appendChild(deliveryTimeUrgent);
containTextSendUrgent.appendChild(descriptionDeliveryTimeUrgent);
sendUrgent.appendChild(valueSendUrgent);
containProductsTotal.appendChild(totalPrice);
totalPrice.appendChild(details);
details.appendChild(totalCart);
details.appendChild(dividerLineTotalOne);
details.appendChild(carrDetailsSubTotal);
carrDetailsSubTotal.appendChild(textSubTotal);
carrDetailsSubTotal.appendChild(textPriceSubTotal);
details.appendChild(carrDetailsSend);
carrDetailsSend.appendChild(textSend);
carrDetailsSend.appendChild(textPriceSend);
details.appendChild(dividerLineTotalTwo);
details.appendChild(carrDetailsTotal);
carrDetailsTotal.appendChild(textTotal);
carrDetailsTotal.appendChild(cotainTotalPriceIVA);
cotainTotalPriceIVA.appendChild(textPriceTotal);
cotainTotalPriceIVA.appendChild(textIVA);
totalPrice.appendChild(buttonWrapperTotal);
buttonWrapperTotal.appendChild(btnCheckOut);
buttonWrapperTotal.appendChild(btnContinueShopping);

// IDs / class

cards.id = "cardsbag";
containProductsTotal.id = "containProductsTotal";
productsSend.id = "productsSend";
totalPrice.id = "totalPrice";
sendFree.id = "sendFree";
sendUrgent.id = "sendUrgent";
containInputFree.className = "selectorDelivery";
containInputUrgent.className = "selectorDelivery";
containTextSendFree.className = "containText";
containTextSendUrgent.className = "containText";
containTextSendUrgent.id = "containTextSendUrgent";
details.id = "details";
carrDetailsSubTotal.id = "carrDetailsSubTotal";
carrDetailsSend.id = "carrDetailsSend";
carrDetailsTotal.id = "carrDetailsTotal";
cotainTotalPriceIVA.id = "cotainTotalPriceIVA";
buttonWrapperTotal.id = "buttonWrapperTotal";
textSubTotal.className = "subTotalAndSend";
textSend.className = "subTotalAndSend";
textPriceSubTotal.className = "textblodTotalCarr";
textPriceSend.className = "textblodTotalCarr";
textTotal.className = "textblodTotalCarr";
textPriceTotal.className = "textblodTotalCarr";
textIVA.id = "textIVA";
btnCheckOut.id = "btnCheckOut";
btnContinueShopping.id = "btnContinueShopping";

// Titulos

titleBag.innerHTML = "Cesta (2)";
productsTitle.innerHTML = "Productos";
sendTitle.innerHTML = "Seleccionar envío ";

// Seccion del total

totalCart.innerHTML = "Total del carrito";
textSubTotal.innerHTML = "SUBTOTAL";
textPriceSubTotal.innerHTML = "0.00 €";
textSend.innerHTML = "ENVÍO";
textPriceSend.innerHTML = "GRATIS";
textTotal.innerHTML = "TOTAL";
textPriceTotal.innerHTML = "0.00 €";
textIVA.innerHTML = "Incluye 0.00 € de IVA";
btnCheckOut.innerHTML = "Ir a checkout";
btnContinueShopping.innerHTML = "Seguir comprando";

const ivaLs = JSON.parse(localStorage.getItem("iva"));

console.log(ivaLs);

if (ivaLs === null) {
  textIVA.innerHTML = "Incluye 0.00 € de IVA";
} else {
  totalIva();
}

// productos

const sumProducts = document.getElementById("sumProducts");

const lsArray = JSON.parse(localStorage.getItem("arrayCart"));
const totalPriceLs = JSON.parse(localStorage.getItem("totalPrice"));
const totalOfProductsLs = JSON.parse(localStorage.getItem("totalProducts"));

console.log(totalPriceLs);

let arrayCart = [];
let total = 0;
let totalOfProducts = 0;

if (lsArray !== null) {
  arrayCart = lsArray;
}

if (totalPriceLs !== null) {
  total = totalPriceLs;
  textPriceSubTotal.innerHTML = `${total.toFixed(2)} €`;
} 

if (totalOfProductsLs !== null) {
  totalOfProducts = totalOfProductsLs;
  sumProducts.innerHTML = totalOfProducts;
  titleBag.innerHTML = `Cesta (${totalOfProducts})`;
}

arrayCart.forEach((selectedProduct, index) => {
  const card = document.createElement("section");
  const img = document.createElement("img");
  const textContain = document.createElement("div");
  const textName = document.createElement("p");
  const textDescription = document.createElement("p");
  const textPrice = document.createElement("p");
  const containCounterBtn = document.createElement("div");
  const counter = document.createElement("p");
  const btnAdd = document.createElement("img");
  const btnSubtract = document.createElement("img");

  productsSend.insertBefore(card, sendTitle);
  card.appendChild(containCounterBtn);
  card.appendChild(img);
  card.appendChild(textContain);
  textContain.appendChild(textName);
  textContain.appendChild(textDescription);
  card.appendChild(textPrice);
  containCounterBtn.appendChild(btnSubtract);
  containCounterBtn.appendChild(counter);
  containCounterBtn.appendChild(btnAdd);

  card.className = "cardSelected";
  textContain.className = "textContain";
  containCounterBtn.className = "containCounterBtn";
  img.className = "imgCardSelected";
  textName.className = "textNameCardSelected";
  textDescription.className = "textDescriptionCardSelected";
  textPrice.className = "textPriceCardSelected";
  btnAdd.className = "btnAdd";
  btnSubtract.className = "btnSubtract";

  img.src = selectedProduct.img;
  textName.innerHTML = selectedProduct.nameProduct;
  textDescription.innerHTML = "Paquete de café, 250 gr";
  textPrice.innerHTML = `${selectedProduct.price.toFixed(2)} €`;
  btnAdd.src = "/assets/images/heroicons-outline_plus-sm.png";
  counter.innerHTML = selectedProduct.count;
  btnSubtract.src = "/assets/images/heroicons-outline_minus-sm.png";

  if (index > 0) {
    card.className = "selectedMoreCards";
  }

  btnAdd.addEventListener("click", () => {
    totalOfProducts++;
    sumProducts.innerHTML = totalOfProducts;
    titleBag.innerHTML = `Cesta (${totalOfProducts})`;
    localStorage.setItem("totalProducts", JSON.stringify(totalOfProducts));

    selectedProduct.count++;
    localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
    counter.innerHTML = selectedProduct.count;

    total += selectedProduct.price;
    textPriceSubTotal.innerHTML = `${total.toFixed(2)} €`;
    localStorage.setItem("totalPrice", JSON.stringify(total));

    sumTotalProductsShipping();
    totalIva();
  });

  btnSubtract.addEventListener("click", (event) => {
    if (selectedProduct.count > 1) {
      selectedProduct.count--;
      localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
      counter.innerHTML = selectedProduct.count;
    } else {
      event.target.parentElement.parentElement.remove();
      const deleteProduct = arrayCart.findIndex((product) => {
        return product.id === selectedProduct.id;
      });
      arrayCart.splice(deleteProduct, 1);
      localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
    }
    totalOfProducts--;
    sumProducts.innerHTML = totalOfProducts;
    titleBag.innerHTML = `Cesta (${totalOfProducts})`;
    localStorage.setItem("totalProducts", JSON.stringify(totalOfProducts));

    total -= selectedProduct.price;
    textPriceSubTotal.innerHTML = `${total.toFixed(2)} €`;
    localStorage.setItem("totalPrice", JSON.stringify(total));

    sumTotalProductsShipping();
    totalIva();
  });
});

// envio gratis

freeSendSelector.type = "radio";
freeSendSelector.id = "free";
freeSendSelector.name = "send";
freeSendSelector.value = 0;
freeSendSelector.checked = true;
deliveryTimeFree.innerHTML = "Envío 5-7 días";
deliveryTimeFree.setAttribute("for", "free");
descriptionDeliveryTimeFree.innerHTML = "Opción estándar sin seguimiento";
valueSendFree.innerHTML = "GRATIS";

// envio urgente

urgentSendSelector.type = "radio";
urgentSendSelector.id = "urgent";
urgentSendSelector.name = "send";
urgentSendSelector.value = (9).toFixed(2);
deliveryTimeUrgent.innerHTML = "Envío urgente 24h";
deliveryTimeUrgent.setAttribute("for", "urgent");
descriptionDeliveryTimeUrgent.innerHTML =
  "Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).";
valueSendUrgent.innerHTML = "9,00 €";

// precio envio

const totalDelivery = parseInt(
  JSON.parse(localStorage.getItem("totalDelivery"))
);

if (totalDelivery !== null) {
  textPriceTotal.innerHTML = parseInt(
    JSON.parse(localStorage.getItem("totalPrice")) + totalDelivery
  ).toFixed(2);
  if (totalDelivery === 0) {
    freeSendSelector.checked = true;
    textPriceSend.innerHTML = "GRATIS";
  } else if (totalDelivery === 9) {
    urgentSendSelector.checked = true;
    textPriceSend.innerHTML = `${urgentSendSelector.value} €`;
  } else {
    textPriceTotal.innerHTML = "0.00 €";
  }
}

function selectedDelivery() {
  if (freeSendSelector.checked === true) {
    textPriceSend.innerHTML = "GRATIS";
    textPriceTotal.innerHTML = (
      parseInt(freeSendSelector.value) +
      JSON.parse(localStorage.getItem("totalPrice"))
    ).toFixed(2);

    localStorage.setItem(
      "totalDelivery",
      JSON.stringify(freeSendSelector.value)
    );
  } else {
    textPriceSend.innerHTML = `${urgentSendSelector.value} €`;
    textPriceTotal.innerHTML = (
      parseInt(urgentSendSelector.value) +
      JSON.parse(localStorage.getItem("totalPrice"))
    ).toFixed(2);

    localStorage.setItem(
      "totalDelivery",
      JSON.stringify(urgentSendSelector.value)
    );
  }
}

freeSendSelector.addEventListener("change", selectedDelivery);
urgentSendSelector.addEventListener("change", selectedDelivery);

function sumTotalProductsShipping() {
  textPriceTotal.innerHTML = (
    parseInt(JSON.parse(localStorage.getItem("totalPrice"))) +
    parseInt(JSON.parse(localStorage.getItem("totalDelivery")))
  ).toFixed(2);
  return;
}

// IVA

const totalLs = (
  parseInt(JSON.parse(localStorage.getItem("totalPrice"))) +
  parseInt(JSON.parse(localStorage.getItem("totalDelivery")))
).toFixed(2);

function totalIva() {
  const iva =
    ((parseInt(JSON.parse(localStorage.getItem("totalPrice"))) +
      parseInt(JSON.parse(localStorage.getItem("totalDelivery")))) *
      21) /
    100;
  localStorage.setItem("iva", JSON.stringify(iva));
  textIVA.innerHTML = `Incluye ${iva} € de IVA`;
  return;
}
