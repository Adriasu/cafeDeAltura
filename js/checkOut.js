const textPriceSubTotal = document.getElementById("textPriceSubTotal")
const textPriceSend = document.getElementById("textPriceSend")
const textPriceTotal = document.getElementById("textPriceTotal")
const textIVA = document.getElementById("textIVA")

const subTotal = parseInt(JSON.parse(localStorage.getItem("totalPrice")))

textPriceSubTotal.innerHTML = `${(subTotal).toFixed(2)} €`

const totalDelivery = parseInt(JSON.parse(localStorage.getItem("totalDelivery")))

  if (totalDelivery === 0) {
    textPriceSend.innerHTML = "GRATIS";
  } else if (totalDelivery === 9) {
    textPriceSend.innerHTML = `${(totalDelivery).toFixed(2)} €`;
  }

const sumSubtotalDelivery = (subTotal + totalDelivery).toFixed(2)

textPriceTotal.innerHTML = `${sumSubtotalDelivery} €`

textIVA.innerHTML = `Incluye ${JSON.parse(localStorage.getItem("iva"))}€ de IVA`

