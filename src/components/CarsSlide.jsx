import { Row, Col, Carousel } from 'react-bootstrap';
import classes from './CarsSlide.module.css';
import CartItem from './CarItem';
import DUMMY_Data from '../data.json';
import { useState, useEffect } from 'react';
export default function CarsSlide() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(DUMMY_Data.cars);
  }, []);

  return (
    <Carousel
      indicators={false}
      slide={false}
      className={`${classes['cart-slide']} pt-5`}
    >
      {cars.map((car, index) => {
        let prev = index - 1;
        let next = index + 1;

        if (prev < 0) prev = cars.length - 1;
        if (next >= cars.length) next = 0;
        // console.log(cars[prev], car, cars[next], '----------');
        return (
          <Carousel.Item key={car.name}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
              <Col className="prev d-none d-lg-flex">
                <CartItem car={cars[prev]} />
              </Col>
              <Col>
                <CartItem car={car} />
              </Col>
              <Col className="next d-none d-md-flex">
                <CartItem car={cars[next]} />
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
