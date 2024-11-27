import React, { useState, useEffect } from 'react';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/watchlist');
        const data = await response.json();
        setWatchlist(data);
      } catch (error) {
        setMessage('Error fetching watchlist.');
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>
      {message && <div className="message">{message}</div>}
      {watchlist.length > 0 ? (
        <div>
          {watchlist.map((item) => (
            <div key={item._id} className="watchlist-item">
              <p>Stock: {item.stockName}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Value: ${item.totalValue}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No stocks in your watchlist.</p>
      )}
    </div>
  );
};

export default Watchlist;
