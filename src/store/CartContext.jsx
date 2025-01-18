import { createContext, useReducer } from 'react';
import { getCartFromLocalStorage } from '../local-storage';

import {
  toggle,
  addCar,
  deleteCar,
  deleteAll,
  deleteSpacificItem,
} from './CartContextActions';

const actions = {
  TOGGLE: 'TOGGLE',
  ADD_CAR: 'ADD CAR',
  DELETE_CAR: 'DELETE CAR',
  DELETE_ALL: 'DELETE ALL',
  DELTE_SPACIFIC_ITEM: 'DELTE SPACIFIC ITEM',
};

const CartContext = createContext({
  isModalVisable: false,
  cartItems: {
    cars: [],
    totalQuantity: 0,
  },
  toggleModal: () => {},
  addCar: () => {},
  deleteCar: () => {},
  deleteAll: () => {},
  deleteSpacificItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === actions.TOGGLE) {
    return toggle(state);
  }

  if (action.type === actions.ADD_CAR) {
    return addCar(state, action);
  }
  if (action.type === actions.DELETE_CAR) {
    return deleteCar(state, action);
  }
  if (action.type === actions.DELETE_ALL) {
    return deleteAll(state);
  }

  if (action.type === actions.DELTE_SPACIFIC_ITEM) {
    return deleteSpacificItem(state, action);
  }

  return state;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    getCartFromLocalStorage() ?? {
      isModalVisable: false,
      cartItems: {
        cars: [],
        totalQuantity: 0,
      },
    }
  );

  function toggleModal() {
    dispatch({ type: actions.TOGGLE });
  }

  function addCar(payload) {
    dispatch({ type: actions.ADD_CAR, payload });
  }

  function deleteCar(name) {
    dispatch({ type: actions.DELETE_CAR, name });
  }

  function deleteAll() {
    dispatch({ type: actions.DELETE_ALL });
  }

  function deleteSpacificItem(name) {
    dispatch({ type: actions.DELTE_SPACIFIC_ITEM, name });
  }

  const cartContext = {
    isModalVisable: cart.isModalVisable,
    cartItems: cart.cartItems,
    toggleModal,
    addCar,
    deleteCar,
    deleteAll,
    deleteSpacificItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
