import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faSquareXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact-us" className={`${classes.footer} pt-5 pb-5`}>
      <Container>
        <Row className="row-cols-1 row-cols-md-3 text-center text-md-start justify-content-md-center gap-3 gap-md-0">
          <Col>
            <div className="ps-5 pe-5 p-md-0">
              <h4 className="fw-bold fs-2">
                Your<span className="fw-normal">Car</span>
              </h4>
              <p>
                We are known for luxurious and premium chaffeur services
                worldwide. We are simply the best you can find.
              </p>
              <p>
                we are dedicated to providing our customers with a first-class
                car buying, selling, and renting experience.
              </p>
            </div>
          </Col>
          <Col>
            <div className="ps-5 pe-5 p-md-0">
              <h4>News Letter</h4>
              <p>
                Subscribe to our news letter for updates, news and exclusive
                offers
              </p>
              <div className="d-flex flex-wrap-reverse flex-ls-nowrap justify-content-center justify-content-md-start gap-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="p-1"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="border-0 fs-5 pt-2 pb-2 pe-4 ps-4  text-light"
                />
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center align-items-lg-start">
            <h4>Contact</h4>
            <div className="d-flex flex-column gap-3 mt-2">
              <a
                className=" d-flex align-items-center justify-content-start text-start gap-3"
                href="http://maps.google.com/?q=2038 2nd Avenue, 
              Las Vegas, United States"
                target="_blanck"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                2038 2nd Avenue,
                <br /> Las Vegas, United States
              </a>

              <a
                className="d-flex align-items-center justify-content-start text-start gap-3"
                href="tel:01444773421423"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>
                  01444773421423 <br /> 01477678449405
                </span>
              </a>

              <a
                className=" d-flex align-items-center justify-content-start text-start gap-3"
                href="mailto:info@YourCar.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                info@YourCar.com
              </a>
            </div>
          </Col>
        </Row>
        <div className="mt-5">
          <div className="d-flex justify-content-center gap-3">
            <a href="#">
              <FontAwesomeIcon fontSize={30} icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon fontSize={30} icon={faSquareXTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon fontSize={30} icon={faInstagram} />
            </a>
          </div>
          <hr className="opacity-100 ms-auto me-auto " />
          <small className="d-block text-center">
            &copy; Copyright 2023 - <span className="fw-bold">YourCar</span> All
            right reserved
          </small>
        </div>
      </Container>
    </footer>
  );
}
