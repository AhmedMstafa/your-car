import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import Moda from './Modal';

export default function Cart() {
  const cart = useContext(CartContext);

  function handleToggleModal() {
    cart.toggleModal();
  }

  return (
    <>
      <button
        onClick={handleToggleModal}
        className="btn-cart btn text-light position-relative"
      >
        <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
      </button>
      <Moda />
    </>
  );
}
