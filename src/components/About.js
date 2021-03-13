import React from "react";
import * as styles from "../styles/About.module.css";
import { intro } from "../data/About";

import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  
  return (
    <div className={styles.about_area} id="about_area">
      <div>
        <h1 className="title">
          <span>&#x25A0;&thinsp;&thinsp;</span>;
          Hi there, I’m Liam!
        </h1>
        <p>{intro}</p>
      </div>

      <div className={styles.what_i_do_area}>
        <ul className={styles.whatIDo}>
          <li>
            <StaticImage src={"../images/WebDesignIcon.png"} alt="" />
            <h1>Web Development</h1>
          </li>

          <li>
            <StaticImage src={"../images/MobiIeDesignIcon.png"} alt="" />
            <h1>Mobile Development</h1>
          </li>

          <li>
            <StaticImage src={"../images/EmbeddedSystems.png"} alt="" />
            <h1>Systems Development</h1>
          </li>
        </ul>
      </div>
      <div className={styles.currentAvailability_area}>
        <StaticImage src={"../images/AvailibleSwitch.png"} alt="" class={styles.avl_switch} />
        <h3 className={styles.currentAvailability}>
          I’M CURRENTLY <span className="highlight">AVAILABLE</span> FOR HIRE
        </h3>
      </div>
    </div>
  );
};

export default About;
