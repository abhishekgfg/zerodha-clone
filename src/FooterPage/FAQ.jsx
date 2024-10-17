

import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = ({ scrollToFooterInstantly }) => {
  const navigate = useNavigate();

  const handleBackToFooter = () => {
    navigate('/'); // Navigate to homepage (where the footer is)
    setTimeout(() => {
      scrollToFooterInstantly(); // Jump to the footer instantly after navigating
    }, 0);
  };
  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <p>Find answers to commonly asked questions about the Zerodha clone.</p>
      <button onClick={handleBackToFooter} className="back-to-footer-btn">Back to Footer</button>
    </div>
  );
};

export default FAQ;
