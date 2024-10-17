import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ scrollToFooterInstantly }) => {
  const navigate = useNavigate();

  const handleBackToFooter = () => {
    navigate('/'); // Navigate to homepage (where the footer is)
    setTimeout(() => {
      scrollToFooterInstantly(); // Jump to the footer instantly after navigating
    }, 0);
  };

  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>This is the About page of the Zerodha clone.</p>
      <button onClick={handleBackToFooter} className="back-to-footer-btn">Back to Footer</button>
    </div>
  );
};

export default About;
