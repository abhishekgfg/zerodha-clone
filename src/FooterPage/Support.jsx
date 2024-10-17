import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support= ({ scrollToFooterInstantly }) => {
  const navigate = useNavigate();

  const handleBackToFooter = () => {
    navigate('/'); // Navigate to homepage (where the footer is)
    setTimeout(() => {
      scrollToFooterInstantly(); // Jump to the footer instantly after navigating
    }, 0);
  };
  return (
    <div className="support-section">
      <h1>Support</h1>
      <p>If you need any help, feel free to reach out to us on our support page.</p>
      <button onClick={handleBackToFooter} className="back-to-footer-btn">Back to Footer</button>
    </div>
  );
};

export default Support;
