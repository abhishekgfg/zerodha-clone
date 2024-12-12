import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import '/src/style/HomePage.css';
import axios from 'axios';
import { useData } from '../context/useData';

const HomePage = () => {
  const {apiData,setApiData} = useData();
  const [email, setEmail] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle the email submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setEmailSuccess(true);
    setEmail(''); // Clear the input after submission
  };

  // Scroll to "Our Services" section
  const handleGetStarted = () => {
    const servicesSection = document.querySelector('.features-section');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Navigate to specific pages
  const handleNavigateToStock = () => {
    navigate('/stocks'); // Replace with the actual route for the stock page
  };

  const handleNavigateToMutualFunds = () => {
    navigate('/mutual-funds'); // Replace with the actual route for the mutual funds page
  };

  const handleNavigateToIPO = () => {
    navigate('/ipo'); // Replace with the actual route for the IPO page
  };
  const fetchData = async ()=>{
    try {
      const response = await axios.get("https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=53022a12d5f047c0bb72b7bb07d2ecc1");
      if (response.status===200) {
        console.log(response.data);
        setApiData(response.data?.AAPL?.values);
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
fetchData();    
  },[])
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Effortless Stocks</h1>
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
            <p>{apiData[0]?.volume} <span className={`${(apiData[0]?.high-apiData[0]?.low)>0?"market-up":"market-down"}`}>{(apiData[0]?.high-apiData[0]?.low)>0?"+":"-"}{(apiData[0]?.high-apiData[0]?.low).toFixed(2)}%</span></p>
          </div>
          <div className="market-item">
            <h3>SENSEX</h3>
            {/* <p>{apiData[1]?.volume}<span className="market-down">-0.87%</span></p> */}
             <p>{apiData[1]?.volume} <span className={`${(apiData[1]?.high-apiData[1]?.low)>0?"market-up":"market-down"}`}>{(apiData[1]?.high-apiData[1]?.low)>2?"+":"-"}{(apiData[1]?.high-apiData[1]?.low).toFixed(2)}%</span></p>
          </div>
          <div className="market-item">
            <h3>Bank Nifty</h3>
            {/* <p>{apiData[2]?.volume} <span className="market-up">+0.92%</span></p> */}
             <p>{apiData[2]?.volume} <span className={`${(apiData[2]?.high-apiData[2]?.low)>0?"market-up":"market-down"}`}>{(apiData[2]?.high-apiData[2]?.low)>2?"+":"-"}{(apiData[2]?.high-apiData[2]?.low).toFixed(2)}%</span></p>
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
            <button onClick={handleNavigateToStock}>Learn More</button>
          </div>
          <div className="feature-item">
            <h3>Mutual Funds</h3>
            <p>Invest in a variety of mutual funds and grow your portfolio.</p>
            <button onClick={handleNavigateToMutualFunds}>Learn More</button>
          </div>
          <div className="feature-item">
            <h3>IPO</h3>
            <p>Access initial public offerings (IPO) and participate in the latest stock listings.</p>
            <button onClick={handleNavigateToIPO}>Learn More</button>
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
