import React from 'react';
import './AboutUs.css'

const AboutUs: React.FC<{ text: string, colorStyle: string }> = ({ text, colorStyle }) => {
  return (
    <div className={`about-us-body ${colorStyle}`}>
      <h1>{text}</h1>
      <p>Information about the project.</p>
    </div>
  );
};

export default AboutUs;