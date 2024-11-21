import React, { useState } from 'react';
import '/src/style/IPOPage.css'; // Import your CSS file for styles

const IPOPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIPO, setSelectedIPO] = useState(null);
  const [investmentMessage, setInvestmentMessage] = useState('');

  const upcomingIPOs = [
    {
      name: 'Tech Innovations Inc.',
      date: 'November 15, 2024',
      priceRange: '$15 - $20',
      description: 'Tech Innovations Inc. focuses on AI-driven solutions for businesses.',
    },
    {
      name: 'Green Energy Corp.',
      date: 'November 22, 2024',
      priceRange: '$25 - $30',
      description: 'Green Energy Corp. is dedicated to renewable energy solutions and sustainable practices.',
    },
    {
      name: 'Health Solutions Ltd.',
      date: 'December 1, 2024',
      priceRange: '$10 - $12',
      description: 'Health Solutions Ltd. offers innovative healthcare technologies.',
    },
  ];

  const handleInvest = (ipo) => {
    setSelectedIPO(ipo);
    setIsModalOpen(true);
  };

  const confirmInvestment = () => {
    // Investment logic can be added here
    setInvestmentMessage(`Successfully invested in ${selectedIPO.name}!`);
    setIsModalOpen(false);
    
    // Automatically hide the investment message after 3 seconds
    setTimeout(() => {
      setInvestmentMessage('');
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInvestmentMessage(''); // Clear the message when modal closes
  };

  return (
    <div className="ipo-page-container">
      <h1 className="ipo-title">Initial Public Offerings (IPO)</h1>
      <p className="ipo-introduction">
        Initial Public Offerings (IPOs) allow companies to raise capital by selling shares to the public. 
        Investing in an IPO can be a lucrative opportunity, but it comes with its risks. 
        Here’s everything you need to know about participating in IPOs.
      </p>

      <section className="ipo-benefits">
        <h2>Benefits of Investing in IPOs</h2>
        <ul>
          <li><strong>Potential for High Returns:</strong> Early investment in a promising company can lead to significant profits.</li>
          <li><strong>Diversification:</strong> Adding IPOs to your portfolio can help diversify your investments.</li>
          <li><strong>Access to Innovative Companies:</strong> Invest in the next big thing before it goes mainstream.</li>
        </ul>
      </section>

      <section className="upcoming-ipos">
        <h2>Upcoming IPOs</h2>
        <div className="ipo-list">
          {upcomingIPOs.map((ipo, index) => (
            <div key={index} className="ipo-card">
              <h3>{ipo.name}</h3>
              <p><strong>Launch Date:</strong> {ipo.date}</p>
              <p><strong>Price Range:</strong> {ipo.priceRange}</p>
              <p>{ipo.description}</p>
              <button className="invest-button" onClick={() => handleInvest(ipo)}>Invest Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="ipo-investment-guide">
        <h2>How to Invest in an IPO</h2>
        <ol>
          <li>Research the Company: Understand the business model, market potential, and financial health.</li>
          <li>Check the IPO Details: Look for price range, number of shares offered, and subscription dates.</li>
          <li>Place Your Order: Use a broker or trading platform to place your IPO order during the subscription period.</li>
          <li>Wait for Allotment: After the subscription period, wait for shares to be allotted to you.</li>
        </ol>
      </section>

      {/* Investment Confirmation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Investment</h2>
            <p>Are you sure you want to invest in {selectedIPO.name}?</p>
            <button className="confirm-button" onClick={confirmInvestment}>Confirm Investment</button>
            <button className="cancel-button" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}

      {investmentMessage && (
        <div className="investment-message">
          {investmentMessage}
        </div>
      )}
    </div>
  );
};

export default IPOPage;
