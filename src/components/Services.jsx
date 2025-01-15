import { Container, Row, Col } from 'react-bootstrap';
import {
  faGem,
  faHandshakeAngle,
  faSplotch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeader from './SectionHeader';
import classes from './Services.module.css';
export default function Services() {
  return (
    <section className={`${classes.services} pt-5 pb-5`}>
      <Container className="pt-5 pb-5 h-100">
        <div className="pt-5 mt-5">
          <SectionHeader
            className="pt-5"
            title="Services"
            background
            color="rgb(235 235 235 )"
          />
        </div>
        <Row className="row-cols-1 row-cols-md-3 h-100 align-items-center pt-5 mt-5">
          <Col className="text-center">
            <FontAwesomeIcon icon={faSplotch} fontSize={70} />
            <h5 className="pt-4 pb-2">Car sales</h5>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale.
              Whether you&apos;re in the market for a sleek sports car or a
              spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </Col>
          <Col className="text-center">
            <FontAwesomeIcon icon={faHandshakeAngle} fontSize={70} />
            <h5 className="pt-4 pb-2">Car rental</h5>
            <p>
              If you&apos;re in need of a luxury car rental, look no further
              than YourCar. Our fleet of high-end vehicles is regularly
              maintained and serviced to ensure that you have a safe and
              comfortable driving experience.
            </p>
          </Col>
          <Col className="text-center">
            <FontAwesomeIcon icon={faGem} fontSize={70} />
            <h5 className="pt-4 pb-2">Car selling</h5>
            <p>
              At YourCar, we make it easy to sell your car. Simply bring your
              vehicle in for an appraisal, and we&apos;ll handle the rest. We
              offer fair prices and a hassle-free selling process, so you can
              get your vehicle with minimal effort.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
