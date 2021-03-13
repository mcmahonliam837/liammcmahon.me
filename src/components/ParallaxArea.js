import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import * as styles from "../styles/ParallaxArea.module.css";


const navBtnClick = (location) => {
    window.scrollTo({
      left: 0,
      top: document.getElementById(location + '_area').offsetTop,
      behavior: 'smooth'
    });
};


const ParallaxArea = (props) => {
  return (
    <div className={styles.parallax_area} style={{ backgroundImage: props.bg }}>
      <div className={styles.parallax_area_overlay}>
        <StaticImage src={'../images/Logo.png'} alt="" className={styles.logo} />
        <button className={styles.contactButtonTop} onClick={() => navBtnClick('contact')}>Contact</button>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>

        <div className={styles.navContainer}>
          <ul className={styles.nav}>
            <li>
              <button onClick={() => navBtnClick('about')}>About</button>
              <p>&#9632;</p>
            </li>
            <li>
              <button onClick={() => navBtnClick('project')}>Projects</button>
              <p>&#9632;</p>
            </li>
            <li>
              <button onClick={() => navBtnClick('contact')}>Contact</button>
              <p>&#9632;</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};



export default ParallaxArea;
