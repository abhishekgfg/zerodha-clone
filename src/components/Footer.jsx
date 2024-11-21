import React from 'react';
import '/src/style/Footer.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-heading">Quick Links</h2>
          <div className="footer-links">
            <a href="/about" className="footer-link footer-separate">About</a>
            <a href="/faq" className="footer-link footer-separate">FAQ</a>
            <a href="/legal" className="footer-link footer-separate">Legal</a>
            <a href="/support" className="footer-link footer-separate">Support</a>
          </div>
        </div>

        <div className="footer-right">
          <h2 className="footer-heading">Contact Us</h2>
          <div className="footer-contact">
            <div className="contact-item">
              <img src="/src/assets/email.png" alt="Email Icon" className="footer-icon" />
              <a href="mailto:abhishek8579013@gmail.com" className="footer-contact-link">abhishek8579013@gmail.com</a>
            </div>
            <div className="contact-item">
              <img src="/src/assets/phone.png" alt="Phone Icon" className="footer-icon" />
              <a href="tel:+91-6202000340" className="footer-contact-link">+91-6202000340</a>
            </div>
          </div>

          <div className="footer-social-links">
            <a href="https://facebook.com" className="social-link">
              <img src="/src/assets/fbimg.png" alt="Facebook" className="social-logo" />
            </a>
            <a href="https://twitter.com" className="social-link">
              <img src="/src/assets/twitter.png" alt="Twitter" className="social-logo" />
            </a>
            <a href="https://linkedin.com" className="social-link">
              <img src="/src/assets/lilogo.png" alt="LinkedIn" className="social-logo" />
            </a>
            <a href="https://instagram.com" className="social-link">
              <img src="/src/assets/instalogo.png" alt="Instagram" className="social-logo" />
            </a>
            <a href="https://youtube.com" className="social-link">
              <img src="/src/assets/youtube.png" alt="YouTube" className="social-logo" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; 2024 Zerodha Clone. All rights reserved. This is a demo project not affiliated with the original Zerodha.
      </p>
    </footer>
  );
});

export default Footer;
