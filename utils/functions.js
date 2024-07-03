// contador de productos

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

// contador de bolsa

export function counterBag(totalOfProducts) {
  if (totalOfProducts > 0) {
    sumProducts.style.display = "flex";
    bag.src = "/assets/images/CarrLleno.png";
  } else {
    sumProducts.style.display = "none";
    bag.src = "/assets/images/Carr.png";
  }
  return;
}

// ocultar carrito cuando se quede vacio

export function hideCart(containSelectedProducts) {
  if (containSelectedProducts.innerHTML === "") {
    sumProducts.style.display = "none";
    bag.src = "/assets/images/Carr.png";
  }
  return;
}

// texto carrito vacío

export function cartEmpty(arrayCart, containSelectedProducts) {
  if (arrayCart.length === 0) {
    containSelectedProducts.innerHTML = `
      <p class="cartEmpty">El carrito está vacío.</p>
    `;
  }
  return;
}
