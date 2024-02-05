import React from 'react';
import styles from './Header.module.css';
import HeaderSubtitle from '../HeaderSubtitle';
import Description from '../Description';
import Padding from '../Padding';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();

  return (
    <>
      <h1 className={styles.name}>Jatin Mehra</h1>
      <HeaderSubtitle>Software Engineer</HeaderSubtitle>
      {location.pathname === '/' && (
        <React.Fragment>
          <Padding value={'3%'} />
          <Description>
            Transforming ideas into functional software | Enjoys hiking in
            nature
          </Description>
        </React.Fragment>
      )}
    </>
  );
};
export default Header;
