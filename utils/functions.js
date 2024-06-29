//crear card del carrito:

export function selectedCardCreator(arrayCart) {
  arrayCart.forEach((newProduct) => {
    const card = document.createElement("section");
    const img = document.createElement("img");
    const textContain = document.createElement("div");
    const textName = document.createElement("p");
    const textPrice = document.createElement("p");
    const containCounterBtn = document.createElement("div");
    const buttonCard = document.createElement("img");
    const counter = document.createElement("p");

    cart.appendChild(card);
    card.appendChild(img);
    card.appendChild(textContain);
    textContain.appendChild(textName);
    textContain.appendChild(textPrice);
    card.appendChild(containCounterBtn);
    containCounterBtn.appendChild(counter);
    containCounterBtn.appendChild(buttonCard);

    img.src = newProduct.img;
    textName.innerHTML = newProduct.nameProduct;
    textPrice.innerHTML = newProduct.price;
    buttonCard.src =
      "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
    counter.innerHTML = 1;

    buttonCard.addEventListener("click", (event) => {
      event.target.parentElement.parentElement.remove();

      const deleteProduct = arrayCart.findIndex((product) => {
        return product.id === newProduct.id;
      });
      arrayCart.splice(deleteProduct, 1);
    });
  });
  return;
}
