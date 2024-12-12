import React, { useState } from 'react';
import '/src/style/ApplyForm.css';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Your application has been submitted successfully!');
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <div className="apply-form-section">
      <h1>Apply to Join Us</h1>
      <form onSubmit={handleSubmit} className="apply-form">
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cover Letter:
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Resume:
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
