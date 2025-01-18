import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import calsses from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import Moda from './Modal';

export default function Cart() {
  const cart = useContext(CartContext);
  const itemsQuantity = cart.cartItems.totalQuantity;
  function handleToggleModal() {
    cart.toggleModal();
  }

  return (
    <>
      <button
        onClick={handleToggleModal}
        className={`${calsses.cart} ${
          cart.isModalVisable ? calsses.focus : ''
        } btn-cart btn text-light position-relative`}
      >
        <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
        <span className="position-absolute top-0 fw-semibold text-center">
          {itemsQuantity}
        </span>
      </button>
      <Moda />
    </>
  );
}
