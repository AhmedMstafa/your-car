import { createContext, useReducer } from 'react';

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

function toggle(state) {
  return { ...state, isModalVisable: !state.isModalVisable };
}

function addCar(state, action) {
  const exsitingCartItem = state.cartItems.cars.findIndex(
    (car) => car.name === action.payload.name
  );

  const updatedCartItems = {
    totalQuantity: state.cartItems.totalQuantity + 1,
    cars: [],
  };

  if (exsitingCartItem > -1) {
    let updatedCars = [...state.cartItems.cars];
    let exsitingCarData = updatedCars[exsitingCartItem];

    updatedCars[exsitingCartItem] = {
      ...exsitingCarData,
      quantity: exsitingCarData.quantity + 1,
    };

    updatedCartItems.cars = [...updatedCars];
  } else {
    updatedCartItems.cars = [...state.cartItems.cars];
    updatedCartItems.cars.push({ ...action.payload, quantity: 1 });
  }

  return { ...state, cartItems: { ...updatedCartItems } };
}

function deleteCar(state, action) {
  const exsitingCartItem = state.cartItems.cars.findIndex(
    (car) => car.name === action.name
  );

  if (exsitingCartItem === -1) {
    return state;
  }

  const updatedCartItems = {
    totalQuantity: state.cartItems.totalQuantity - 1,
    cars: [],
  };

  const currentCartItem = state.cartItems.cars[exsitingCartItem];

  updatedCartItems.cars = [...state.cartItems.cars];
  if (currentCartItem.quantity > 1) {
    const exsitingCarData = updatedCartItems.cars[exsitingCartItem];

    updatedCartItems.cars[exsitingCartItem] = {
      ...exsitingCarData,
      quantity: exsitingCarData.quantity - 1,
    };
  } else {
    updatedCartItems.cars.splice(exsitingCartItem, 1);
  }

  return { ...state, cartItems: { ...updatedCartItems } };
}

function deleteAll(state) {
  return { ...state, cartItems: { cars: [], totalQuantity: 0 } };
}

function deleteSpacificItem(state, action) {
  const exsitingCartItem = state.cartItems.cars.findIndex(
    (car) => car.name === action.name
  );

  if (exsitingCartItem === -1) {
    return state;
  }

  const updatedCartItems = {
    totalQuantity: state.cartItems.totalQuantity,
    cars: [],
  };

  updatedCartItems.cars = [...state.cartItems.cars];
  const exsitingCarData = updatedCartItems.cars[exsitingCartItem];

  updatedCartItems.totalQuantity -= exsitingCarData.quantity;
  updatedCartItems.cars.splice(exsitingCartItem, 1);

  return { ...state, cartItems: { ...updatedCartItems } };
}

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
  const [cart, dispatch] = useReducer(cartReducer, {
    isModalVisable: false,
    cartItems: {
      cars: [],
      totalQuantity: 0,
    },
  });

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
