'use client';

import React, { useRef, useState } from 'react';
import styles from './Home.module.scss';
import About from '../aboutsec/page';
import Resume from '../resume/page';
import ContactSection from '../contactsection/page';
import CreativePortfolio from '../portfolioItems/page';
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaCode } from "react-icons/fa";
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Section refs
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close drawer on click
    }
  };

  return (
    <div className={styles.heroWrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          {/* <img src={my_log.src} alt='my_log' className={styles.logoImg}/> */}
          <FaCode />
        </div>

        {/* Mobile Drawer */}
        <nav className={`${styles.drawer} ${menuOpen ? styles.open : ''}`}>
          <FaTimes className={styles.closeIcon} onClick={() => setMenuOpen(false)} />
          <ul className={styles.navListMobile}>
            <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>

        {/* Desktop Nav */}
        <ul className={styles.navList}>
          <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>

        {/* Menu Icon for Mobile */}
        {!menuOpen && <FaBars className={styles.menuIcon} onClick={() => setMenuOpen(true)} />}
      </header>

      {/* Intro Section */}
      <div className={styles.introSection}>
        <h1>
          IM <span className={styles.outline}>DEEP</span> HANANI
        </h1>
        <div className={styles.roles}>
          <span>React Developer</span>
          <span className={styles.dot}>•</span>
          <span>UI Designer</span>
        </div>
      </div>

      {/* Sections with Refs */}
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={resumeRef}>
        <Resume />
      </div>

      <div ref={projectsRef}>
        <CreativePortfolio />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Hero;
