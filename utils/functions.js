
export function productCount(productSelected, arrayCart) {
  const productsCount = arrayCart.reduce((acc, product) => {
    if (product.id === productSelected.id) {
      product.count++;
      return true;
    }
    return acc;
  }, false);

  if (!productsCount) {
    arrayCart.push(productSelected);
  }

  return arrayCart;
}

export function counterBag(totalOfProducts) {
  if (totalOfProducts > 0) {
    sumProducts.style.display = "flex"
    bag.src ="/assets/images/CarrLleno.png"
  } else {
    sumProducts.style.display = "none"
    bag.src ="/assets/images/Carr.png"
  }
}

//crear card del carrito:

// export function selectedCardCreator(arrayCart, totalOfProducts, sumProducts) {
  
//   arrayCart.forEach((newProduct) => {
//     const card = document.createElement("section");
//     const img = document.createElement("img");
//     const textContain = document.createElement("div");
//     const textName = document.createElement("p");
//     const textPrice = document.createElement("p");
//     const containCounterBtn = document.createElement("div");
//     const buttonCard = document.createElement("img");
//     const counter = document.createElement("p");

//     containSelectedProducts.appendChild(card);
//     card.appendChild(img);
//     card.appendChild(textContain);
//     textContain.appendChild(textName);
//     textContain.appendChild(textPrice);
//     card.appendChild(containCounterBtn);
//     containCounterBtn.appendChild(counter);
//     containCounterBtn.appendChild(buttonCard);

//     card.className = "cardSelected";
//     textContain.className = "textContain";
//     containCounterBtn.className = "containCounterBtn";
//     img.className = "imgCardSelected";
//     textName.className = "textNameCardSelected";
//     buttonCard.className = "deleteCardSelected";

//     img.src = newProduct.img;
//     textName.innerHTML = newProduct.nameProduct;
//     textPrice.innerHTML = newProduct.price;
//     buttonCard.src =
//       "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
//     counter.innerHTML = newProduct.count;

//     buttonCard.addEventListener("click", (event) => {
//       event.target.parentElement.parentElement.remove();

//       const deleteProduct = arrayCart.findIndex((product) => {
//         return product.id === newProduct.id;
//       });
//       arrayCart.splice(deleteProduct, 1);

//       totalOfProducts -= newProduct.count

//       sumProducts.innerHTML = totalOfProducts
//       console.log(totalOfProducts);
//     });
//   });
//   return;
// }

