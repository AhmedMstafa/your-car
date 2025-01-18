import { Container } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import CarsSlide from './CarsSlide';

export default function Cars() {
  return (
    <section id="cars" className=" pt-5 pb-5">
      <Container>
        <div style={{ color: '#741906' }} className="pt-5 pb-5">
          <SectionHeader title="Cars" background color="rgb(223 223 223)" />
          <CarsSlide />
        </div>
      </Container>
    </section>
  );
}
