// import React, { useState, useEffect } from 'react';

// const Watchlist = () => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/watchlist');
//         const data = await response.json();
//         setWatchlist(data);
//       } catch (error) {
//         setMessage('Error fetching watchlist.');
//       }
//     };

//     fetchWatchlist();
//   }, []);

//   return (
//     <div className="watchlist-container">
//       <h2>My Watchlist</h2>
//       {message && <div className="message">{message}</div>}
//       {watchlist.length > 0 ? (
//         <div>
//           {watchlist.map((item) => (
//             <div key={item._id} className="watchlist-item">
//               <p>Stock: {item.stockName}</p>
//               <p>Price: ${item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Total Value: ${item.totalValue}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No stocks in your watchlist.</p>
//       )}
//     </div>
//   );
// };

// export default Watchlist;



import React, { useState, useEffect } from 'react';
import '/src/style/WatchlistPage.css'; // Add CSS file for styling

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const convertToRupees = (priceInDollars) => {
    const exchangeRate = 82; // Example exchange rate (1 USD = 82 INR)
    return (priceInDollars * exchangeRate).toFixed(2);
  };

  return (
    <div className="watchlist-container">
      <div className="header">
        <div className="menu-dots" onClick={() => setShowMenu(!showMenu)}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <h2>My Watchlist</h2>
        {selectedStocks.length > 0 && (
          <button className="remove-selected-btn" onClick={handleRemoveSelected}>
            Remove Selected
          </button>
        )}
      </div>

      {showMenu && (
        <div className="dropdown-menu">
          <button className="small-button" onClick={() => setShowCheckboxes(true)}>
            Select for Remove
          </button>
          <button className="small-button" onClick={handleSelectAll}>
            {selectedStocks.length === watchlist.length ? 'Deselect All' : 'Select All'}
          </button>
        </div>
      )}

      {message && <div className="message">{message}</div>}

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
                <p><strong>Stock:</strong> {item.stockName}</p>
                <p><strong>Price:</strong> ₹{convertToRupees(item.price)}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Total Value:</strong> ₹{convertToRupees(item.totalValue)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-stocks">No stocks in your watchlist.</p>
      )}
    </div>
  );
};

export default Watchlist;
