import classes from './SectionHeader.module.css';

export default function SectionHeader({ title, background }) {
  return (
    <h3 className={classes.header} data-back={background ? title : ''}>
      {title}
    </h3>
  );
}
