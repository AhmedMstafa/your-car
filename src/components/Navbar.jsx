import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from './Navbar.module.css';
import { useState } from 'react';
export default function Navbar() {
  const [isNavVisable, setNavVisiblity] = useState(false);
  function toggleNavHandler() {
    setNavVisiblity((prev) => !prev);
  }
  return (
    <nav className={`${classes.nav} position-fixed top-0 w-100`}>
      <Container className="mt-auto mb-auto">
        <div className="d-flex align-items-center">
          <p className="m-0 fs-4 fw-medium text-light">
            Your
            <span className="fw-normal">Car</span>
          </p>
          <div className="d-flex gap-2 ms-auto align-items-center flex-row-reverse flex-lg-row">
            <ul
              className={`${
                isNavVisable ? classes.show : classes.hidden
              } d-lg-flex m-0 d-flex gap-4 flex-column p-5 pe-0 flex-lg-row p-lg-0`}
            >
              <li className="mt-5 m-lg-0">
                <a
                  className="text-light fw-medium d-block ps-5 pt-3 pb-3 "
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-light fw-medium d-block ps-5 pt-3 pb-3 "
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-light fw-medium d-block ps-5 pt-3 pb-3 "
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-light fw-medium d-block ps-5 pt-3 pb-3 "
                  href="#"
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  className="text-light fw-medium d-block ps-5 pt-3 pb-3 "
                  href="#"
                >
                  Contact us
                </a>
              </li>
            </ul>
            <button
              onClick={toggleNavHandler}
              className="btn ms-auto d-lg-none text-light"
            >
              <FontAwesomeIcon icon={faBars} fontSize={25} />
            </button>
            <button className="btn text-light">
              <FontAwesomeIcon icon={faCartShopping} fontSize={25} />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
