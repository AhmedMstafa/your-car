import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import Img1 from '../assets/images/galary-car-1.jpg';
import Img2 from '../assets/images/galary-car-2.jpg';
import Img3 from '../assets/images/galary-car-3.jpg';
import Img4 from '../assets/images/galary-car-4.jpg';
import Img5 from '../assets/images/galary-car-5.jpg';
import Img6 from '../assets/images/galary-car-6.jpg';
import Img7 from '../assets/images/galary-car-7.jpg';
import Img8 from '../assets/images/galary-car-8.jpg';
import Img9 from '../assets/images/galary-car-9.jpg';
import classes from './CarsGalary.module.css';
export default function CarsGalary() {
  return (
    <section className={classes['cars-galary']}>
      <Row className="g-0 row-cols-1 row-cols-md-3 row-cols-lg-3">
        <Col className="d-none d-md-flex">
          <Image src={Img1} loading="lazy" />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img2} loading="lazy" />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img3} loading="lazy" />
        </Col>
        <Col>
          <Image src={Img4} loading="lazy" />
        </Col>

        <Col>
          <Card className=" text-white h-100 border-0 ">
            <Card.Img src={Img5} loading="lazy" />
            <Card.ImgOverlay className="rounded-0 bg-black bg-opacity-75 d-flex flex-column align-items-center justify-content-center">
              <Card.Title className="text-center">Tesla Model 3</Card.Title>
              <Card.Text className="text-center">
                Disruptive, avant-garde, futuristic, innovative.
              </Card.Text>
              <Button
                variant="outline-light"
                href="#contact-us"
                className="mt-2 "
              >
                Contact
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Image src={Img6} loading="lazy" />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img7} loading="lazy" />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img8} loading="lazy" />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img9} loading="lazy" />
        </Col>
      </Row>
    </section>
  );
}
