import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Review({ review }) {
  return (
    <div
      style={{ minHeight: '400px' }}
      className="pt-5 pb-5 ps-2 pe-2 bg-light pe-md-5 ps-md-5 m-3 m-md-4 d-flex flex-column justify-content-center align-items-center gap-3"
    >
      <p className="text-center p-0 m-0">{review.description}</p>

      <ul
        style={{ listStyle: 'none', color: '#EBD8B8' }}
        className="d-flex m-0 p-0 justify-content-center gap-1 "
      >
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} />
        </li>
      </ul>

      <div
        style={{ fontSize: 'Nunito Sans' }}
        className="d-flex justify-content-center align-items-center gap-3"
      >
        <p className="fw-bold fs-3 p-0 m-0">{review.name}</p>
        <p className="text-secondary p-0 m-0">Las Vegas</p>
      </div>
    </div>
  );
}
