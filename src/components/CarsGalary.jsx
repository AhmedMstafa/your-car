import { Row, Col, Image, Card, Button } from 'react-bootstrap';
import Img1 from '../assets/images/galary-car-1.jpg';
import Img2 from '../assets/images/galary-car-2.png';
import Img3 from '../assets/images/galary-car-3.png';
import Img4 from '../assets/images/galary-car-4.png';
import Img5 from '../assets/images/galary-car-5.png';
import Img6 from '../assets/images/galary-car-6.png';
import Img7 from '../assets/images/galary-car-7.png';
import Img8 from '../assets/images/galary-car-8.png';
import Img9 from '../assets/images/galary-car-9.jpg';
import classes from './CarsGalary.module.css';
export default function CarsGalary() {
  return (
    <section className={classes['cars-galary']}>
      <Row className="g-0 row-cols-1 row-cols-md-3 row-cols-lg-3">
        <Col className="d-none d-md-flex">
          <Image src={Img1} />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img2} />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img3} />
        </Col>
        <Col>
          <Image src={Img4} />
        </Col>

        <Col>
          <Card className=" text-white h-100 border-0 ">
            <Card.Img src={Img5} />
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
          <Image src={Img6} />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img7} />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img8} />
        </Col>
        <Col className="d-none d-md-flex">
          <Image src={Img9} />
        </Col>
      </Row>
    </section>
  );
}
