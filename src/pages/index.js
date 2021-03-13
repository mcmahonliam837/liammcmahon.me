import React from "react";
import * as styles from "../styles/Home.module.css";
import ParallaxArea from "../components/ParallaxArea";
import About from "../components/About";
import ProjectArea from "../components/ProjectArea";

import { StaticImage } from "gatsby-plugin-image";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  

  return (
    <div className={styles.App}>
      <ParallaxArea
        title="BUILDING THE FUTURE TODAY"
        subtitle="WITH EFFICIENT, POWERFUL, AND ELEGANT SOLUTIONS"
        logo={"../images/icon.png"}
        bg={"../images/toronto-skyline.jpg"}
      />
      <div className={styles.app_contents}>
        <About />
        <ProjectArea />
      </div>

      <div id="contact_area">
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <a
                href="https://github.com/mcmahonliam837"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src={"../images/git.png"}
                  className={styles.socialMediaIcon}
                  alt=""
                />

                <h2 className={styles.socialMediaTitle}>mcmahonliam837</h2>
              </a>
            </li>

            <li>
              <a
                href="https://ca.linkedin.com/in/lmmcmahon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src={"../images/linkedin.png"}
                  className="socialMediaIcon"
                  alt=""
                />
                <h2 className={styles.socialMediaTitle}>/lmmcmahon</h2>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.email}>
          <h2 style={{ fontSize: 24, textAlign: 'center' }}>
            Shoot me an email
            <span className="highlight">
              <a
                href="mailto:lm@liammcmahon.me"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                {" "}
                here!{" "}
              </a>
            </span>
            Or take a look at my
            <span className="highlight">
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                <span className="highlight"> resume!</span>
              </a>
            </span>
          </h2>
        </div>

        <div>
          <div className={styles.copyRightArea}>
            <table>
              <colgroup>
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th></th>
                  <th>COPYRIGHT 2017</th>
                  <th>
                    CODED WITH <span className="highlight">&#9829;</span> BY
                    LIAM MCMAHON
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
