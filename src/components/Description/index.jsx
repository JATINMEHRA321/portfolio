import styles from './Description.module.css';

const Description = ({ children, style, onClick }) => (
  <p className={styles.description} style={style} onClick={onClick}>
    {children}
  </p>
);

export default Description;
