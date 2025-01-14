import { Container, Row, Col, Image } from 'react-bootstrap';
import Img from '../assets/images/about-car-back.png';
import classes from './About.module.css';
export default function About() {
  return (
    <section className={`${classes.about} vh-100 pt-5 pb-5`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="mt-auto mb-auto">
            <div>
              <h3 className="mb-5 fs-1 fw-simebold text-center text-md-start">
                About
              </h3>
              <p className="mb-4">
                YourCar is a luxury car dealership that offers a personalized
                and first-class experience to its clients. Our team of
                experienced professionals is dedicated to providing exceptional
                service and finding the perfect vehicle to match our
                clients&apos; unique preferences and requirements. We have an
                extensive selection of high-end vehicles, ranging from sports
                cars to SUVs, all of which are maintained to the highest
                standards of quality and safety YourCar.
              </p>
              <p>
                . At YourCar, we are committed to creating a stress-free and
                enjoyable car buying experience. We understand that purchasing a
                luxury car can be a significant investment, which is why we
                offer flexible financing options to make the process more
                manageable. Our team is available to answer any questions and
                provide guidance throughout the entire buying process. We take
                pride in our outstanding customer service and attention to
                detail, and we are confident that our clients will be satisfied
                with their experience at
              </p>
            </div>
          </Col>
          <Col
            className={`${classes.images} d-none position-relative d-md-flex h-100 pt-5 pb-5`}
          >
            <Image className="ms-auto me-auto" src={Img} fluid></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
