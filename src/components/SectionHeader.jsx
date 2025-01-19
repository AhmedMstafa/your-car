import classes from './SectionHeader.module.css';

export default function SectionHeader({ title, background, color, position }) {
  return (
    <h3
      className={`${classes.header} mb-4 mt-5 fs-1 fw-simebold text-center `}
      style={{ '--color-back': color, '--position-back': position ?? '50%' }}
      data-back={background ? title : ''}
    >
      {title}
    </h3>
  );
}
