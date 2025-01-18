const ITEMS_CART = 'ITEMS_CART';

export function updateItemsCartFromLocalStorage(cartData) {
  const data = JSON.stringify(cartData);
  window.localStorage.setItem(ITEMS_CART, data);
}

export function getItemsCartFromLocalStorage() {
  const data = JSON.parse(window.localStorage.getItem(ITEMS_CART));

  return data;
}

export function deleteItemsCartFromLocalStorage() {
  window.localStorage.removeItem(ITEMS_CART);
}
