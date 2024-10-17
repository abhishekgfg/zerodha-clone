// import React from 'react';
// import '/src/style/HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="page-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Zerodha Clone</h1>
//           <p>Invest in stocks, mutual funds, and more with zero hassle.</p>
//           <button className="cta-button">Get Started</button>
//         </div>
//       </section>

//       {/* Market Section */}
//       <section className="market-section">
//         <h2>Market Overview</h2>
//         <div className="market-data">
//           <div className="market-item">
//             <h3>NIFTY 50</h3>
//             <p>18,234.65 <span className="market-up">+1.45%</span></p>
//           </div>
//           <div className="market-item">
//             <h3>SENSEX</h3>
//             <p>61,432.12 <span className="market-down">-0.87%</span></p>
//           </div>
//           <div className="market-item">
//             <h3>Bank Nifty</h3>
//             <p>39,123.89 <span className="market-up">+0.92%</span></p>
//           </div>
//         </div>
//       </section>

//       {/* Home Page Content (Similar to Zerodha) */}
//       <section className="features-section">
//         <h2>Our Services</h2>
//         <div className="features-grid">
//           <div className="feature-item">
//             <h3>Stocks & Trading</h3>
//             <p>Buy and sell stocks with our easy-to-use platform.</p>
//           </div>
//           <div className="feature-item">
//             <h3>Mutual Funds</h3>
//             <p>Invest in a variety of mutual funds and grow your portfolio.</p>
//           </div>
//           <div className="feature-item">
//             <h3>IPO</h3>
//             <p>Access initial public offerings (IPO) and participate in the latest stock listings.</p>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="newsletter-section">
//         <h2>Subscribe to Our Newsletter</h2>
//         <p>Stay updated with the latest market trends and insights.</p>
//         <form className="newsletter-form">
//           <input type="email" placeholder="Enter your email" />
//           <button type="submit" className="subscribe-button">Subscribe</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import '/src/style/HomePage.css';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  // Handle the email submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call to your backend
    console.log(`Email submitted: ${email}`);
    setEmailSuccess(true);
    setEmail(''); // Clear the input after submission
  };

  // Handle the Get Started button click
  const handleGetStarted = () => {
    // Redirect to the signup page or any other action
    // Example: window.location.href = '/signup';
    console.log('Get Started button clicked');
  };

  return (
    <div className="page-container">
      {/* Hero Section */}

      <section className="hero-section">
        
        <div className="hero-content">
          
          <h1>Zerodha Clone</h1>
          <p>Invest in stocks, mutual funds, and more with zero hassle.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>

      {/* Market Section */}
      <section className="market-section">
        <h2>Market Overview</h2>
        <div className="market-data">
          <div className="market-item">
            <h3>NIFTY 50</h3>
            <p>18,234.65 <span className="market-up">+1.45%</span></p>
          </div>
          <div className="market-item">
            <h3>SENSEX</h3>
            <p>61,432.12 <span className="market-down">-0.87%</span></p>
          </div>
          <div className="market-item">
            <h3>Bank Nifty</h3>
            <p>39,123.89 <span className="market-up">+0.92%</span></p>
          </div>
        </div>
      </section>

      {/* Home Page Content (Similar to Zerodha) */}
      <section className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Stocks & Trading</h3>
            <p>Buy and sell stocks with our easy-to-use platform.</p>
          </div>
          <div className="feature-item">
            <h3>Mutual Funds</h3>
            <p>Invest in a variety of mutual funds and grow your portfolio.</p>
          </div>
          <div className="feature-item">
            <h3>IPO</h3>
            <p>Access initial public offerings (IPO) and participate in the latest stock listings.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest market trends and insights.</p>
        <form className="newsletter-form" onSubmit={handleEmailSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
        {emailSuccess && <p className="success-message">Thank you for subscribing!</p>}
      </section>
    </div>
  );
};

export default HomePage;
