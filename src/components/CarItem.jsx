import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { faSuitcase, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export default function CartItem({ car }) {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    import(car.image)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((err) => console.error('Error loading image', err));
  }, [car]);
  return (
    <>
      <Card
        style={{ height: '600px', fontFamily: 'Nunito Sans ' }}
        className="border-0"
      >
        <div className="h-50">
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title
            style={{ color: '#741906' }}
            className="text-center pb-0 mt-auto fs-3"
          >
            {car.class}
            <p
              style={{ fontSize: '12px' }}
              className="text-dark m-0 p-0 d-block text-center"
            >
              {car.name}
            </p>
          </Card.Title>
          <Card.Text className="pb-1 mt-auto">{car.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div>
                <FontAwesomeIcon icon={faSuitcase} />
                <span
                  style={{ fontSize: '12px', color: '#741906' }}
                  className="ms-3"
                >
                  {car.seats} Seats
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span
                  style={{ fontSize: '12px', color: '#741906' }}
                  className="ms-3"
                >
                  {car.luggage} Luggage
                </span>
              </div>
            </div>
            <ButtonGroup aria-label="Basic example">
              <Button
                style={{ background: '#741906', border: 'none' }}
                variant="secondary"
              >
                +
              </Button>
              <div
                style={{ width: '30px', color: '#12273D' }}
                className="align-self-center text-center fs-5"
              >
                1
              </div>
              <Button
                style={{ background: '#741906', border: 'none' }}
                variant="secondary"
              >
                -
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
