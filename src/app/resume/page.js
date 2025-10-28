import React from 'react';
import styles from './Resume.module.scss';
import { FaRegFileAlt } from 'react-icons/fa';

const ResumeCard = ({ year, title, subtitle }) => (
  <div className={styles.resumeCard}>
    <div className={styles.iconBox}>
      <FaRegFileAlt />
    </div>
    <div>
      <p className={styles.year}>{year}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </div>
);

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.resumeHeader}>
        <p>EXPERIENCE</p>
        <h2>Professional Resume</h2>
      </div>

      <div className={styles.resumeGrid}>
        <div className={styles.resumeColumn}>
          <ResumeCard
            year="8-2023 - Present"
            title="Dvij Infotech LLP"
            subtitle="React Developer"
          />
          <ResumeCard
            year="2-2023"
            title="WELTEC Institute, Vadodra"
            subtitle="Frontend"
          />
          <ResumeCard
            year="07/2019 - 12/2023"
            title="Shantilal Shah Engineering College"
            subtitle="Bachelor of Engineering"
          />
        </div>
        <div className={styles.resumeColumn}>
          <ResumeCard
            year="2017 - 2019"
            title="Saraswati science School"
            subtitle="GSHSEB (Class XII / Science)"
          />
          <ResumeCard
            year="2021 - 2024"
            title="Higher secoundery Education"
            subtitle="Premium College United VC"
          />
          <ResumeCard
            year="2021 - 2024"
            title="Webster College"
            subtitle="UI/UX Design"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
