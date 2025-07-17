import React from 'react';
import styles from '../styles/aboutme.module.css'

const AboutMe = () => {
  return (
  <section className={styles.aboutme}>
    <p className={styles.textbio}>
      My name is Sabrina Ira, a creative artist turned Software Engineer, with a
      BFA in Painting. Combining my artistic roots with a love for technology, I
      specialize in building dynamic and user-friendly web applications.
    </p>
    <br></br>
    <p className={styles.textbio}>
      Born and raised in New York City, my creative journey began as a freelance
      artist and content creator. Additionally, I've taken other freelance work
      in script writing and transcription. In the midst of it, I ended up
      reigniting my passion for computers and technology, which then inspired me
      to pursue a new career path in web development.
    </p>
    <br></br>
    <p className={styles.textbio}>
      Currently, I've been focusing on developing modern web applications using
      JavaScript, React and Node.js. I'm always eager to continue learning the
      foundations of web programming, as well as learning more modern web
      technologies to help solve real-world problems and design innovative
      solutions.
    </p>
    <br></br>
    <p className={styles.textbio}>
      While my primary goal is to continue growing as a Software Engineer, my
      love for art remains an integral part of who I am. Whether I’m coding or
      creating, I’m driven by curiosity, creativity, and a commitment to
      continuous learning.
    </p>
  </section>
  )
};

export default AboutMe;
