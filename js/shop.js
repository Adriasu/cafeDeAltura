import { productsCards } from "../utils/products.js";

const cardsProducts = document.createElement("section")
const cardsConditions = document.getElementById("cardsConditions")
document.getElementsByTagName("body")[0].insertBefore(cardsProducts, cardsConditions)

cardsProducts.id = "cardsProducts"

productsCards.forEach((card) => {
    const cardNewsWrapperProduct = document.createElement("div")
    const imgCard = document.createElement("img")
    const containProductInfo = document.createElement("div")
    const nameProductCard = document.createElement("p")
    const priceProductCard = document.createElement("p")
    const buttonCardAdd = document.createElement("a")

    cardsProducts.appendChild(cardNewsWrapperProduct)
    cardNewsWrapperProduct.appendChild(imgCard)
    cardNewsWrapperProduct.appendChild(containProductInfo)
    containProductInfo.appendChild(nameProductCard)
    containProductInfo.appendChild(priceProductCard)
    cardNewsWrapperProduct.appendChild(buttonCardAdd)

    cardNewsWrapperProduct.className = "cardNewsWrapperProduct"
    containProductInfo.className = "productInfo"

    imgCard.src = card.img
    nameProductCard.innerHTML = card.nameProduct
    priceProductCard.innerHTML = card.price
    buttonCardAdd.innerHTML = "Añadir"
    buttonCardAdd.href = ""
})
