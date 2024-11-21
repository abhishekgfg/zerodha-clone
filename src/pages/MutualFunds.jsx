import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import '/src/style/MutualFunds.css';

const mutualFundsData = [
  {
    id: 1,
    name: 'Equity Growth Fund',
    description: 'Invest in a diverse range of high-growth equity stocks.',
    risk: 'High',
    returns: '15% Annual Returns',
    price: 100
  },
  {
    id: 2,
    name: 'Balanced Hybrid Fund',
    description: 'Blend of equity and debt to balance risk and returns.',
    risk: 'Moderate',
    returns: '10% Annual Returns',
    price: 200
  },
  {
    id: 3,
    name: 'Debt Income Fund',
    description: 'Invest in secure government and corporate bonds.',
    risk: 'Low',
    returns: '6% Annual Returns',
    price: 50
  }
];

const MutualFunds = () => {
  const navigate = useNavigate(); // Use navigate instead of history
  const [selectedFund, setSelectedFund] = useState(null);
  const [units, setUnits] = useState(1);
  const [isInvested, setIsInvested] = useState(false);

  const handleFundSelect = (fund) => {
    setSelectedFund(fund);
    setUnits(1); // Reset unit selection when a new fund is selected
    setIsInvested(false); // Reset investment status
  };

  const handleUnitChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setUnits(value);
    } else {
      setUnits(1); // Ensure a minimum of 1 unit
    }
  };

  const handleInvest = () => {
    if (selectedFund) {
      alert(`Successfully invested in ${selectedFund.name} with ${units} units.`);
      setIsInvested(true);
      setSelectedFund(null);
      setUnits(1); // Reset after investment
    }
  };

  const handleLearnMore = () => {
    navigate('/about-mutual-funds'); // Use navigate to redirect
  };

  return (
    <div className="mutual-funds-container">
      <h1>Mutual Funds</h1>
      <button className="learn-button" onClick={handleLearnMore}>Learn About Mutual Funds</button>
      <p>Choose from a wide range of mutual funds to invest and grow your wealth.</p>

      <div className="funds-list">
        {mutualFundsData.map((fund) => (
          <div key={fund.id} className="fund-card" onClick={() => handleFundSelect(fund)}>
            <h2>{fund.name}</h2>
            <p>{fund.description}</p>
            <div className="fund-details">
              <span className={`risk ${fund.risk.toLowerCase()}`}>{fund.risk} Risk</span>
              <span>{fund.returns}</span>
            </div>
            <div className="invest-now">Click to Invest</div>
          </div>
        ))}
      </div>

      {selectedFund && (
        <div className="fund-details-modal">
          <h2>{selectedFund.name}</h2>
          <p>{selectedFund.description}</p>
          <ul>
            <li><strong>Risk:</strong> {selectedFund.risk}</li>
            <li><strong>Expected Returns:</strong> {selectedFund.returns}</li>
            <li><strong>Price per Unit:</strong> ${selectedFund.price}</li>
          </ul>
          <div className="unit-selection">
            <label htmlFor="units">Select Units: </label>
            <input
              type="number"
              id="units"
              value={units}
              min="1"
              onChange={handleUnitChange}
            />
          </div>
          <button onClick={handleInvest} className="invest-button">
            Invest Now
          </button>
          <button onClick={() => setSelectedFund(null)} className="close-button">Close</button>
        </div>
      )}

      {isInvested && (
        <div className="investment-message">
          Thank you for your investment!
        </div>
      )}
    </div>
  );
};

export default MutualFunds;
