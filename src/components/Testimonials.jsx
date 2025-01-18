import { Container } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import ReviewsSlider from './ReviewsSlider';
export default function Testimonials() {
  return (
    <section
      style={{ backgroundColor: 'var(--main-color)' }}
      className="pt-5 pb-5 "
    >
      <Container className="p-0 pt-5 ">
        <div className="pt-5 text-light">
          <SectionHeader
            title="Testimonials"
            background
            color="rgb(235 235 235 / 14%)"
          />
        </div>
        <ReviewsSlider />
      </Container>
    </section>
  );
}
