import { useContext, useEffect, useRef } from 'react';
import CartContext from '../store/CartContext';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

export default function Moda() {
  const cart = useContext(CartContext);
  const ref = useRef();

  useEffect(() => {
    if (cart.isModalVisable) {
      ref.current.show();
      return;
    }
    ref.current.close();
  }, [cart.isModalVisable]);

  return createPortal(
    <dialog
      ref={ref}
      className={`${classes.modal} text-light m-0 ms-auto position-fixed p-5 border-0`}
    >
      Some Dummy Data
    </dialog>,
    document.getElementById('modal')
  );
}
