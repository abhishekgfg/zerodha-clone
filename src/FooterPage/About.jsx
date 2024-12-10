import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/style/About.css';

const About = ({ scrollToFooterInstantly }) => {
  const navigate = useNavigate();

  const handleBackToFooter = () => {
    navigate('/'); // Navigate to the homepage (where the footer is)
    setTimeout(() => {
      scrollToFooterInstantly(); // Jump to the footer instantly after navigating
    }, 0);
  };

  const handleApplyNow = () => {
    navigate('/apply'); // Navigate to the Apply Form page
  };

  return (
    <div className="about-section">
      <header className="about-header">
        <h1>About Effortless Stock Market</h1>
        <h3>Innovation, Transparency, and Empowerment</h3>
        <p>Empowering individuals to trade smarter and invest better.</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify trading and investing for everyone. By building intuitive and reliable tools, 
          we help users navigate the complexities of the stock market effortlessly.
        </p>

        <h2>Core Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Bringing cutting-edge features to stock trading.</li>
          <li><strong>Transparency:</strong> Keeping processes clear and user-friendly.</li>
          <li><strong>Empowerment:</strong> Equipping users with tools to make informed decisions.</li>
        </ul>

        <h2>Features</h2>
        <p>Effortless Stock Market is designed with you in mind:</p>
        <ul>
          <li>Real-time stock updates and tracking.</li>
          <li>Comprehensive portfolio management.</li>
          <li>Dynamic mutual fund investment tools.</li>
          <li>Integrated watchlist and stock alerts.</li>
          <li>Educational resources for beginner and advanced traders.</li>
        </ul>

        <h2>Meet Our Team</h2>
        <h3>Abhishek Kumar Pandey (Developer)</h3>
        <p>
          A passionate group of developers, financial experts, and designers dedicated to making 
          trading accessible for everyone.
        </p>
      </section>

      <section className="about-cta">
        <h3>Join Us on Our Journey</h3>
        <p>Ready to elevate your trading experience? Start today with Effortless Stock Market.</p>
        <button onClick={handleBackToFooter} className="back-to-footer-btn">Back to Footer</button>
        <button onClick={handleApplyNow} className="apply-now-btn">Apply Now</button>
      </section>
    </div>
  );
};

export default About;
