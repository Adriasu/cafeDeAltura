const cards = document.createElement("section");
const titleBag = document.createElement("h2");
const containProductsTotal = document.createElement("div");
const productsSend = document.createElement("div");
const productsTitle = document.createElement("h3")
const containProducts = document.createElement("div")
const dividingLineProducts = document.createElement("hr")
const sendTitle = document.createElement("h3")
const sendFree = document.createElement("div")
const dividingLineSend = document.createElement("hr")
const totalPrice = document.createElement("div");


const copyrightFooter = document.getElementById("copyrightFooter");

document.getElementsByTagName("body")[0].insertBefore(cards, copyrightFooter);
cards.appendChild(titleBag)
cards.appendChild(containProductsTotal)
containProductsTotal.appendChild(productsSend)
containProductsTotal.appendChild(totalPrice)

cards.id = "cardsbag"
containProductsTotal.id = "containProductsTotal"
productsSend.id = "productsSend"
totalPrice.id = "totalPrice"


titleBag.innerHTML= "Cesta (2)"