import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        className="btn-cart btn text-light position-relative"
      >
        <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
        <span
          style={{
            backgroundColor: '#F8D7A4',
            fontFamily: 'var(Nunito Sans)',
            minWidth: '20px',
            color: 'var(--main-color)',
            borderRadius: '2px',
            fontSize: '12px',
            padding: '1px 0',
            right: '10px',
          }}
          className="position-absolute top-0 fw-semibold text-center"
        >
          {itemsQuantity}
        </span>
      </button>
      <Moda />
    </>
  );
}
