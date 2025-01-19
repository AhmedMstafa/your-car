import { Container } from 'react-bootstrap';
import ReviewsSlider from './ReviewsSlider';
import classes from './Testimonials.module.css';
export default function Testimonials() {
  return (
    <section className={`${classes.testimonials} pt-5 pb-5 `}>
      <Container className="p-0">
        <h3 className="mb-4 mt-5 fs-1 text-light fw-simebold text-center">
          Testimonials
        </h3>
        <ReviewsSlider />
      </Container>
    </section>
  );
}
