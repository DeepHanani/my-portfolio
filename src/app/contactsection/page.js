'use client';

import React, { useState } from 'react';
import styles from './ContactSection.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.status === 'success') {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Something went wrong!');
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.heading}>CONTACT</div>
      <h2 className={styles.title}>Get in Touch with Me!</h2>

      <div className={styles.container}>
        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div className={styles.contact_main}>
              <p className={styles.label}>Address:</p>
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

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputBox}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="hello@websitename.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputBox}>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write Your message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.sendButton}>
            Send Me Message <FaArrowRight style={{ marginLeft: '8px' }} />
          </button>

          {/* Status Message */}
          {status && <p style={{ marginTop: '12px', color: 'green' }}>{status}</p>}
        </form>
      </div>

      <footer className={styles.footer}>
        <p>
          Copyright ©2023, <span>D.H. Portfolio.</span> All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
