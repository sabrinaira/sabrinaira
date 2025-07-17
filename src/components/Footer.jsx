import React from 'react';
import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <a
      href='https://github.com/sabrinaira'
      target='_self'
      rel='noopener noreferrer'
    >
      Return to Sabrina's Github
    </a>

    <p>&copy; 2024 - 2025 Sabrina Ira</p>
  </footer>
);

export default Footer;
