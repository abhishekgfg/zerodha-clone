import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get passed data

const Watchlist = () => {
  const location = useLocation(); // Get stock data from the passed state
  const { stock } = location.state || {}; // Destructure stock from state

  return (
    <div className="watchlist-container">
      <h2>Watchlist</h2>
      {stock ? (
        <div>
          <p>Stock Name: {stock.name}</p>
          <p>Price: ${stock.price}</p>
        </div>
      ) : (
        <p>No stock selected.</p>
      )}
    </div>
  );
};

export default Watchlist;
