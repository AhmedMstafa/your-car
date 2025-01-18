import ModalItem from './ModalItem';
import { Button } from 'react-bootstrap';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
export default function ModalItems() {
  const cart = useContext(CartContext);

  function addToCartHandler(car) {
    cart.addCar({ name: car.name, class: car.class, image: car.image });
  }

  function deleteFromCartHandler(name) {
    cart.deleteCar(name);
  }

  function clearCartHandler() {
    cart.deleteAll();
  }

  function delteSpecificItemHandler(name) {
    cart.deleteSpacificItem(name);
  }

  return (
    <div className="h-100 d-flex flex-column gap-3">
      {cart.cartItems.cars.map((item) => (
        <ModalItem
          key={item.name}
          car={item}
          onAdd={addToCartHandler}
          onDelete={deleteFromCartHandler}
          onDeleteSpecific={delteSpecificItemHandler}
        />
      ))}
      <Button
        onClick={clearCartHandler}
        style={{
          background: 'var(--secondary-color)',
          fontFamily: 'Nunito Sans',
        }}
        className="mt-auto text-light border-0 d-flex gap-2 justify-content-center pt-2 pb-2 "
      >
        <strong className="fw-normal fs-5">Delete All</strong>
        <FontAwesomeIcon icon={faTrashCan} fontSize={25} />
      </Button>
    </div>
  );
}
