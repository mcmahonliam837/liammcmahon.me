import React from "react";
import * as styles from "../styles/ProjectArea.module.css";
import Project from "./Project";

import { projects, project_into } from "../data/Projects";

const ProjectArea = () => {

  return (
    <div className={styles.project_area} id='project_area'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h1 className="title">
                <span>&#x25A0;&thinsp;&thinsp;</span>
                PROJECTS{" "}
          </h1>
          <p>{project_into}</p>
        </div>
        <div className={styles.projectList}>
          {projects.map((p, i) => {
            return (
              <Project
                side={i % 2 === 0 ? "left" : "right"}
                title={p.title}
                desc={p.desc}
                icon={p.image}
                learnMore={p.github !== undefined}
                url={p.github}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.moreButtonArea}>
        <a
          href="https://github.com/mcmahonliam837"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.moreButton} onClick={() => {}}>
            AND MORE
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectArea;
