import {
  updateItemsCartFromLocalStorage,
  deleteItemsCartFromLocalStorage,
} from '../local-storage';

export function toggle(state) {
  return { ...state, isModalVisable: !state.isModalVisable };
}

export function addCar(state, action) {
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

  updateItemsCartFromLocalStorage(updatedCartItems);
  return { ...state, cartItems: { ...updatedCartItems } };
}

export function deleteCar(state, action) {
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

  updateItemsCartFromLocalStorage(updatedCartItems);
  return { ...state, cartItems: { ...updatedCartItems } };
}

export function deleteAll(state) {
  deleteItemsCartFromLocalStorage();
  return { ...state, cartItems: { cars: [], totalQuantity: 0 } };
}

export function deleteSpacificItem(state, action) {
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

  updateItemsCartFromLocalStorage(updatedCartItems);
  return { ...state, cartItems: { ...updatedCartItems } };
}
