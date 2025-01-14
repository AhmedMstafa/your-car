import { createContext, useState } from 'react';

const CartContext = createContext({
  isModalVisable: false,
  toggleModal: () => {},
});

export function CartProvider({ children }) {
  const [isModalVisable, setModalVisable] = useState(false);

  function toggleModal() {
    setModalVisable((prev) => !prev);
  }

  const cartContext = {
    isModalVisable,
    toggleModal,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
