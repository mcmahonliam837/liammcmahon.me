import React from "react";
import * as styles from "../styles/Project.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const Project = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed {
              src
              originalName
            }
          }
        }
      }
    }
  `);


  let image = "";

  try {
    image = data.allFile.nodes.filter((x) => {
      if (x.childImageSharp == null) {
        return false;
      }
      return x.childImageSharp.fixed.originalName === props.icon;
    })[0].childImageSharp.fixed.src;
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }

  // if (props.side === 'left' || dimensions.width <= 1525) {
  //   return LeftProject(props);
  // } else {
  //   return RightProject(props);
  // }
  //

  return (
    <div
      className={styles.projectContents}
      style={{ paddingTop: "100px !important" }}
    >
      <div className={styles.project_img}>
        {/* 
            {dimensions.width > 768 &&
              <img src={props.indexImg} className="ProjectListIndex" alt='' />
            }

*/}
        {props.side === "left" && (
          <div className={styles.project_image_block_left}>
            <img src={image} className={styles.project_image} alt="" />
          </div>
        )}
      </div>

      <div className={styles.projectRightBlock}>
        <div className={styles.projectTitleDiv}>
          <h1 className={styles.projectTitleRight}>{props.title}</h1>
          <StaticImage
            src={"../images/ProjectTitleUnderLine.png"}
            className={styles.projectTitleUnderLineRight}
            alt=""
          />
        </div>
        <p className={styles.projectContentRight}>
          {props.desc}
          <br />
          {(props.learnMore === undefined || props.learnMore) && (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <span className="highlight" style={{ cursor: "pointer" }}>
                Learn more
              </span>
            </a>
          )}
        </p>
      </div>

      {props.side === "right" && (
        <div className={styles.project_image_block_left}>
          <img src={image} className={styles.project_image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Project;
