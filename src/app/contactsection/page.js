// ContactSection.jsx
import React from 'react';
import styles from './ContactSection.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.heading}>CONTACT</div>
      <h2 className={styles.title}>Get in Touch with Me!</h2>

      <div className={styles.container}>
        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div className={styles.contact_main}>
              <p className={styles.label}>Our Office:</p>
              <p>Naranpura sola, Ahmedabad, India</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <div className={styles.contact_main}>
              <p className={styles.label}>Contact Number:</p>
              <p>+91 9824391440</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <div className={styles.contact_main}>
              <p className={styles.label}>Email Us:</p>
              <p>deephanani24@gmail.com</p>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputBox}>
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className={styles.inputBox}>
              <label>Email Address</label>
              <input type="email" placeholder="hello@websitename.com" />
            </div>
          </div>

          <div className={styles.inputBox}>
            <label>Your Message</label>
            <textarea placeholder="Write Your message" rows="5"></textarea>
          </div>

          <button type="submit" className={styles.sendButton}>
            Send Me Message <FaArrowRight style={{ marginLeft: '8px' }} />
          </button>
        </form>
      </div>

      <footer className={styles.footer}>
        <p>Copyright ©2023, <span>Kane</span> All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
