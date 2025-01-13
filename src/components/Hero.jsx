import { Container, Row, Col, Button } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <div className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col className="clo-12 col-md-7 col-lg-6 vh-100 ms-auto d-flex flex-column justify-content-center">
            <div className="text-light text-center text-md-end">
              <h1 className="">
                Find the perfect car <br></br> for you at YourCar.
              </h1>
              <p className="mt-5 mb-5 fs-4 fs-md-2 fs-lg-1 text-light w-lg-75 p-2 rounded ms-auto">
                We offer a wide range of cars that cater to your needs and
                budget. Visit us today and drive away with your dream car!
              </p>
            </div>
            <Button
              href="#"
              variant="outline-light"
              className="align-self-center align-self-md-end d-flex align-items-center gap-2"
            >
              Discover
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
