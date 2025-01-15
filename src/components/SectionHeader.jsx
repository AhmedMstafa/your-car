import classes from './SectionHeader.module.css';

export default function SectionHeader({ title, background, color }) {
  console.log(color);
  return (
    <h3
      className={classes.header}
      style={{ '--color-back': color }}
      data-back={background ? title : ''}
    >
      {title}
    </h3>
  );
}
