import { Image, Col, Row, Button, ButtonGroup } from 'react-bootstrap';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ModalItem({ car, onAdd, onDelete, onDeleteSpecific }) {
  return (
    <Row
      style={{ color: 'var(--main-color)' }}
      className="bg-light  pt-2 pb-2 ps-1 pe-1 p-md-3"
    >
      <Col className="d-flex flex-column justify-content-between">
        <h4 className="fs-5 fs-md-3 mb-1">{car.name}</h4>
        <p className="mb-1 mb-auto">{car.class}</p>
        <div className="d-flex gap-2 gap-md-3">
          <ButtonGroup aria-label="Basic example">
            <Button
              onClick={() => onAdd(car)}
              style={{ background: '#741906', border: 'none' }}
              variant="secondary"
            >
              +
            </Button>
            <div
              style={{ width: '25px', color: '#12273D' }}
              className="align-self-center text-center fs-5"
            >
              {car.quantity}
            </div>
            <Button
              onClick={() => onDelete(car.name)}
              style={{ background: '#741906', border: 'none' }}
              variant="secondary"
            >
              -
            </Button>
          </ButtonGroup>
          <Button
            onClick={() => onDeleteSpecific(car.name)}
            className="bg-transparent border-0 p-0"
          >
            <FontAwesomeIcon
              style={{ color: 'var(--main-color)' }}
              icon={faTrashCan}
              fontSize={25}
            />
          </Button>
        </div>
      </Col>
      <Col className="col-6">
        <Image
          style={{ height: '100%', objectFit: 'contain' }}
          src={car.image}
          fluid
          loading="lazy"
        />
      </Col>
    </Row>
  );
}
