import { Container, Row, Col, Image } from 'react-bootstrap';

import Img1 from '/images/logo-1.png';
import Img2 from '/images/logo-2.png';
import Img3 from '/images/logo-3.png';
import Img4 from '/images/logo-4.png';
import Img5 from '/images/logo-5.png';
import Img6 from '/images/logo-6.png';
import Img7 from '/images/logo-7.png';
import Img8 from '/images/logo-8.png';

export default function Brands() {
  return (
    <section
      style={{ backgroundColor: '#EBEBEB' }}
      className="pt-3 pb-3 pt-md-4 pb-md-4 pt-lg-5 pb-lg-5"
    >
      <Container>
        <Row className="row-cols-1 row-cols-md-2 gap-4 gap-md-0 justify-content-between justify-content-evenly">
          <Row>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img1}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img2}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img3}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img4}
                fluid
                loading="lazy"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img5}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img6}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img7}
                fluid
                loading="lazy"
              />
            </Col>
            <Col>
              <Image
                style={{ height: '100%', objectFit: 'contain' }}
                src={Img8}
                fluid
                loading="lazy"
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
}
