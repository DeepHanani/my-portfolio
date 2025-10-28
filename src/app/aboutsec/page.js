import React from "react";
import styles from "./About.module.scss";
import profileImg from "../../../assets/creative_image.png";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.card}>
        <img
          src={profileImg.src}
          alt="Kane Walker"
          className={styles.profileImg}
        />
        {/* <h2>Deep Hanani</h2> */}
        <div className={styles.status}>
          Available for Work <span className={styles.dot}></span>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/deep-hanani-658897246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/DeepHanani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h1>
          Hello, I’m Deep Hanani,
          <br />
          <span className={styles.highlight}>
            Software Engineer | React Developer
          </span>{" "}
          and Web Designer
        </h1>

        <a href="/Deep_Hanani_Resume_React.js_2Years.pdf" download>
          <button className={styles.cvButton}>
            Download CV <FaDownload />
          </button>
        </a>

        <div className={styles.skills}>
          <ul>
            <li>
              <FaExternalLinkAlt /> React
            </li>
            <li>
              <FaExternalLinkAlt /> Next Js
            </li>
            <li>
              <FaExternalLinkAlt /> Javascript
            </li>
          </ul>
          <ul>
            <li>
              <FaExternalLinkAlt /> HTML
            </li>
            <li>
              <FaExternalLinkAlt /> Css, Scss, Tailwind{" "}
            </li>
            <li>
              <FaExternalLinkAlt />
              Github
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
