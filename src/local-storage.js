const CART = 'CART';

export function updateCartFromLocalStorage(cartData) {
  const data = JSON.stringify(cartData);
  window.localStorage.setItem(CART, data);
}

export function getCartFromLocalStorage() {
  const data = JSON.parse(window.localStorage.getItem(CART));

  return data;
}

export function deleteCartFromLocalStorage() {
  window.localStorage.removeItem(CART);
}
