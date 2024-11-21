import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '/src/style/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <main className="dashboard-content">
        <section className="market-overview-section">
          <h2>Market Overview</h2>
          <div className="market-info">
            <div className="market-item">
              <h4>Nifty 50</h4>
              <p>₹17,500.00</p>
              <p>Change: +0.5%</p>
            </div>
            <div className="market-item">
              <h4>Sensex</h4>
              <p>₹59,000.00</p>
              <p>Change: +0.4%</p>
            </div>
            {/* More market items */}
          </div>
        </section>

        <section className="balance-section">
          <div className="balance-box">
            <h3>Available Funds</h3>
            <p>₹50,000.00</p>
          </div>
          <div className="balance-box">
            <h3>Total Investments</h3>
            <p>₹1,20,000.00</p>
          </div>
          <div className="balance-box">
            <h3>Today's P&L</h3>
            <p>₹1,000.00</p>
          </div>
        </section>
        
        <section className="portfolio-section">
          <h2>Your Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <h4>Reliance</h4>
              <p>10 Shares @ ₹2,300</p>
              <p>Value: ₹23,000.00</p>
              <button className="view-details-btn">View Details</button>
            </div>
            <div className="portfolio-item">
              <h4>TCS</h4>
              <p>5 Shares @ ₹3,200</p>
              <p>Value: ₹16,000.00</p>
              <button className="view-details-btn">View Details</button>
            </div>
            {/* More portfolio items */}
          </div>
        </section>

        <section className="watchlist-section">
          <h2>Watchlist</h2>
          <div className="watchlist-grid">
            <div className="watchlist-item">
              <h4>Infosys</h4>
              <p>₹1,500.00</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="watchlist-item">
              <h4>HDFC Bank</h4>
              <p>₹1,200.00</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            {/* More watchlist items */}
          </div>
        </section>

        <section className="recent-transactions-section">
          <h2>Recent Transactions</h2>
          <div className="transaction-list">
            <div className="transaction-item">
              <p>Buy - Reliance</p>
              <p>10 Shares @ ₹2,300</p>
            </div>
            <div className="transaction-item">
              <p>Sell - TCS</p>
              <p>5 Shares @ ₹3,200</p>
            </div>
            {/* More transactions */}
          </div>
        </section>

        <section className="help-section">
          <h2>Need Help?</h2>
          <p>Contact our support team for any assistance. You can also refer to our FAQ or tutorials for quick help.</p>
          <Link to="/contact-support" className="support-btn">Contact Support</Link>
         
        </section>
      </main>
      
     
    </div>
  );
};

export default DashboardPage;
