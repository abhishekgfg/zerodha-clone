import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '/src/style/ContactSupport.css'; // Add your styles

const ContactSupport = () => {
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission, like sending data to an API
    setSubmitted(true); // Set submission state to true
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navigate to the dashboard
  };

  const handleBackToForm = () => {
    setSubmitted(false); // Reset submission state to show the form again
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
  };

  if (submitted) {
    return (
      <div className="thank-you-message">
        <h2>Thank You!</h2>
        <p>Your message has been submitted successfully.</p>
        <div className="button-container">
          <button onClick={handleBackToDashboard} className="dashboard-button">Back to Dashboard</button>
          <button onClick={handleBackToForm} className="form-button">Back to Form</button> {/* Button to return to the form */}
        </div>
      </div>
    );
  }

  return (
    <div className="contact-support-container">
      <h2>Contact Support</h2>
      <p>If you have any questions or need assistance, feel free to reach out to our support team!</p>
      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required 
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" onClick={handleBackToDashboard} className="back-button">Back to Dashboard</button> {/* Back button to dashboard */}
      </form>
    </div>
  );
};

export default ContactSupport;
