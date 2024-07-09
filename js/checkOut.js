const textPriceSubTotal = document.getElementById("textPriceSubTotal");
const textPriceSend = document.getElementById("textPriceSend");
const textPriceTotal = document.getElementById("textPriceTotal");
const textIVA = document.getElementById("textIVA");
const textCartPaymet = document.getElementById("textCartPaymet");
const card = document.getElementById("card");
const formCardPayment = document.getElementById("formCardPayment");
const textBankTransfer = document.getElementById("textBankTransfer");
const paymentBankTransfer = document.getElementById("paymentBankTransfer");
const textBizum = document.getElementById("textBizum");
const bizumPayment = document.getElementById("bizumPayment");
const holderName = document.getElementById("holderName");
const numCard = document.getElementById("numCard");
const expirationDate = document.getElementById("expirationDate");
const cvc = document.getElementById("cvc");

const subTotal = parseInt(JSON.parse(localStorage.getItem("totalPrice")));

textPriceSubTotal.innerHTML = `${subTotal.toFixed(2)} €`;

const totalDelivery = parseInt(
  JSON.parse(localStorage.getItem("totalDelivery"))
);

if (totalDelivery === 0) {
  textPriceSend.innerHTML = "GRATIS";
} else if (totalDelivery === 9) {
  textPriceSend.innerHTML = `${totalDelivery.toFixed(2)} €`;
}

const sumSubtotalDelivery = (subTotal + totalDelivery).toFixed(2);

textPriceTotal.innerHTML = `${sumSubtotalDelivery} €`;

textIVA.innerHTML = `Incluye ${JSON.parse(
  localStorage.getItem("iva")
)}€ de IVA`;

//------------------------------------//

if (card.checked) {
  textCartPaymet.classList.remove("hidden");
  formCardPayment.style.display = "flex";
  holderName.required = true
  numCard.required = true
  expirationDate.required = true
  cvc.required = true
}

function showHideElement() {
  if (card.checked) {
    textCartPaymet.classList.remove("hidden");
    textBankTransfer.classList.add("hidden");
    textBizum.classList.add("hidden");
    formCardPayment.style.display = "flex";
    holderName.required = true
    numCard.required = true
    expirationDate.required = true
    cvc.required = true
  } else if (paymentBankTransfer.checked) {
    textCartPaymet.classList.add("hidden");
    textBankTransfer.classList.remove("hidden");
    textBizum.classList.add("hidden");
    formCardPayment.style.display = "none";
    holderName.required = false
    numCard.required = false
    expirationDate.required = false
    cvc.required = false
  } else if (bizumPayment.checked) {
    textCartPaymet.classList.add("hidden");
    textBankTransfer.classList.add("hidden");
    textBizum.classList.remove("hidden");
    formCardPayment.style.display = "none";
    holderName.required = false
    numCard.required = false
    expirationDate.required = false
    cvc.required = false
  }
}

card.addEventListener("change", showHideElement);
paymentBankTransfer.addEventListener("change", showHideElement);
bizumPayment.addEventListener("change", showHideElement);
