import { Carousel } from 'react-bootstrap';
import Review from './Review';
import classes from './ReviewsSlider.module.css';
import DUMMY_DATA from '../data.json';
import { useEffect, useState } from 'react';
export default function ReviewsSlider() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(DUMMY_DATA.testimonials);
  }, []);

  return (
    <Carousel
      fade
      className={`${classes['reviews-slider']} pb-5 position-relative`}
    >
      {reviews.map((review) => (
        <Carousel.Item key={review.name}>
          <Review review={review} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
