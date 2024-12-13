
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '/src/style/WatchlistPage.css'; // Add CSS file for styling

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [newPrice, setNewPrice] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/watchlist');
        const data = await response.json();
        setWatchlist(data);
        calculateTotal(data); // Calculate total stock value and items
      } catch (error) {
        setMessage('Error fetching watchlist.');
      }
    };

    fetchWatchlist();
  }, []);

  const calculateTotal = (stocks) => {
    const total = stocks.reduce((sum, stock) => sum + stock.price * stock.quantity, 0);
    const totalQuantity = stocks.reduce((sum, stock) => sum + stock.quantity, 0);
    setTotalValue(total);
    setTotalItems(totalQuantity);
  };

  const handleCheckboxChange = (id) => {
    setSelectedStocks((prev) =>
      prev.includes(id) ? prev.filter((stockId) => stockId !== id) : [...prev, id]
    );
  };

  const handleRemoveSelected = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/watchlist/bulk-delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedStocks }),
      });
      if (response.ok) {
        setWatchlist((prev) => prev.filter((item) => !selectedStocks.includes(item._id)));
        setSelectedStocks([]);
        setMessage('Selected stocks removed successfully.');
        calculateTotal(watchlist);
      } else {
        setMessage('Failed to remove selected stocks.');
      }
    } catch (error) {
      setMessage('Error removing selected stocks.');
    }
  };

  const handleSelectAll = () => {
    if (selectedStocks.length === watchlist.length) {
      setSelectedStocks([]); // Deselect all
    } else {
      setSelectedStocks(watchlist.map((item) => item._id)); // Select all
    }
  };


  return (
    <div className="watchlist-container">
      <h2 className="watchlist-title">My Watchlist</h2>

      <div className="header-menu">
        <button className="sell-page-button" onClick={() => navigate('/sell')}>
          Sell Page
        </button>
        <button className="three-dot-button" onClick={() => setShowMenu(!showMenu)}>
          &#x22EE;
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={() => setShowCheckboxes((prev) => !prev)}>
              {showCheckboxes ? 'Hide Checkboxes' : 'Select for Remove'}
            </button>
            <button onClick={handleSelectAll}>
              {selectedStocks.length === watchlist.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        )}
      </div>

      {message && <div className="message">{message}</div>}

      <p className="total-summary">Total Stocks: {totalItems}</p>
      <p className="total-value">Total Value: ₹{totalValue.toFixed(2)}</p>

      {watchlist.length > 0 ? (
        <div className="watchlist-items">
          {watchlist.map((item) => (
            <div key={item._id} className="watchlist-item">
              {showCheckboxes && (
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedStocks.includes(item._id)}
                  onChange={() => handleCheckboxChange(item._id)}
                />
              )}
              <div className="stock-details">
                <h3>{item.stockName}</h3>
                <p>
                  Price: <span>₹{item.price}</span>
                </p>
                <p>
                  Quantity: <span>{item.quantity}</span>
                </p>
                <p>
                  Total: <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </p>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-stocks">No stocks in your watchlist.</p>
      )}

      {selectedStocks.length > 0 && (
        <button className="remove-selected-btn" onClick={handleRemoveSelected}>
          Remove Selected
        </button>
      )}
    </div>
  );
};

export default Watchlist;

