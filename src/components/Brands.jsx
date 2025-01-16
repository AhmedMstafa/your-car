import { Container, Row, Col, Image } from 'react-bootstrap';
import Img1 from '../assets/images/logo-1.png';
import Img2 from '../assets/images/logo-2.png';
import Img3 from '../assets/images/logo-3.png';
import Img4 from '../assets/images/logo-4.png';
import Img5 from '../assets/images/logo-5.png';
import Img6 from '../assets/images/logo-6.png';
import Img7 from '../assets/images/logo-7.png';
import Img8 from '../assets/images/logo-8.png';
export default function Brands() {
  return (
    <section
      style={{ backgroundColor: '#EBEBEB' }}
      className="pt-3 pb-3 pt-md-4 pb-md-4 pt-lg-5 pb-lg-5"
    >
      <Container>
        <Row className="gx-lg-5">
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img1}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img2}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img3}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img4}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img5}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img6}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img7}
              fluid
            />
          </Col>
          <Col>
            <Image
              style={{ height: '100%', objectFit: 'contain' }}
              src={Img8}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
