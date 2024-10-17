import React from 'react';
import '/src/style/Footer.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <div className="footer-links">

          <a href="/about" className="footer-link">About</a>
          <a href="/faq" className="footer-link">FAQ</a>
          <a href="/legal" className="footer-link">Legal</a>
          <a href="/support" className="footer-link">Support</a>
        </div>

        <div className="footer-contact">
          <h2>contact us</h2>
           <p>
           <img src="/src/assets/email.png" alt="Email Icon" className="footer-icon" />
            <a href="mailto:abhishek8579013@gmail.com" className="footer-contact-link">abhishek8579013@gmail.com</a>
          </p>
          <p>
            <img src="/src/assets/phone.png" alt="Phone Icon" className="footer-icon" />
            <a href="tel:+123456789" className="footer-contact-link">+91-6202000340</a>
          </p>
        </div>

        <div className="footer-social-links">
          <a href="https://facebook.com" className="social-link">
            <img src="/facebook-logo.png" alt="Facebook" className="social-logo" />
          </a>
          <a href="https://twitter.com" className="social-link">
            <img src="/twitter-logo.png" alt="Twitter" className="social-logo" />
          </a>
          <a href="https://linkedin.com" className="social-link">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://instagram.com" className="social-link">
            <img src="/src/assets/instalogo.png" alt="Instagram" className="social-logo" />
          </a>
          <a href="https://youtube.com" className="social-link">
            <img src="/youtube-logo.png" alt="YouTube" className="social-logo" />
          </a>
        </div>

        <p className="footer-copyright">
          &copy; 2024 Zerodha Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
