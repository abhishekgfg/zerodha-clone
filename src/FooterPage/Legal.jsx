import React from 'react';
import { useNavigate } from 'react-router-dom';

const Legal = ({ scrollToFooterInstantly }) => {
  const navigate = useNavigate();

  const handleBackToFooter = () => {
    navigate('/'); // Navigate to homepage (where the footer is)
    setTimeout(() => {
      scrollToFooterInstantly(); // Jump to the footer instantly after navigating
    }, 0);
  };



  return (
    <div className="legal-section">
      <h1>Legal Information</h1>
      <p>This page provides legal information regarding the Zerodha clone project.</p>
      <button onClick={handleBackToFooter} className="back-to-footer-btn">Back to Footer</button>
    </div>
  );
};

export default Legal;
