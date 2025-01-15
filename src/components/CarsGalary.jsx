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

export default function CarsGalary() {
  return (
    <section>
      <Row className="g-0 row-cols-1 row-cols-md-3 row-cols-lg-3">
        <Col>
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left',
            }}
            src={Img1}
            fluid
          />
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={Img2}
            fluid
          />
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={Img3}
            fluid
          />
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={Img4}
          />
        </Col>

        <Col>
          <Card className=" text-white h-100 border-0 ">
            <Card.Img
              src={Img5}
              style={{
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Card.ImgOverlay className="rounded-0 bg-black bg-opacity-75 d-flex flex-column align-items-center justify-content-center">
              <Card.Title className="">Tesla Model 3</Card.Title>
              <Card.Text style={{ fontSize: '14px', textAlign: 'center' }}>
                Disruptive, avant-garde, futuristic, innovative.
              </Card.Text>
              <Button variant="outline-light" href="#" className="mt-2 ">
                Contact
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={Img6}
          />
        </Col>
        <Col style={{ overflow: 'hidden' }}>
          <Image
            style={{
              height: '120%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center -10px',
            }}
            src={Img7}
          />
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              objectPosition: '',
            }}
            src={Img8}
          />
        </Col>
        <Col>
          <Image
            style={{
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left',
            }}
            src={Img9}
            fluid
          />
        </Col>
      </Row>
    </section>
  );
}
