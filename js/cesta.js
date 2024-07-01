const cards = document.createElement("section");
const titleBag = document.createElement("h2");
const containProductsTotal = document.createElement("div");
const products = document.createElement("div");
const totalPrice = document.createElement("div");

const copyrightFooter = document.getElementById("copyrightFooter");

document.getElementsByTagName("body")[0].insertBefore(cards, copyrightFooter);
cards.appendChild(titleBag)
cards.appendChild(containProductsTotal)
containProductsTotal.appendChild(products)
containProductsTotal.appendChild(totalPrice)

cards.id = "cardsbag"
containProductsTotal.id = "containProductsTotal"


titleBag.innerHTML= "Cesta (2)"