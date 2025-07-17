import React from 'react';
import aboutMeData from '../data/about.json';

const AboutMe = () => {
  return (
    <section className='aboutme'>
      <div className='aboutme-container'>
        {aboutMeData.paragraphs2.map((paragraph, index) => (
          <p className='aboutme-text' key={index}>{paragraph}</p>
          ))}
      </div>
    </section>
  );
};

export default AboutMe;
