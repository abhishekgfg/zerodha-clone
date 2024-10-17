import React, { useState } from 'react';
import '/src/style/StockPage.css';

// 50 Real Stock Names and Approximate Prices
const stocksData = [
  { id: 1, name: 'Apple', price: 150 },
  { id: 2, name: 'Google', price: 2800 },
  { id: 3, name: 'Microsoft', price: 300 },
  { id: 4, name: 'Amazon', price: 3500 },
  { id: 5, name: 'Tesla', price: 750 },
  { id: 6, name: 'Facebook', price: 320 },
  { id: 7, name: 'Netflix', price: 620 },
  { id: 8, name: 'Nvidia', price: 2200 },
  { id: 9, name: 'Intel', price: 55 },
  { id: 10, name: 'AMD', price: 120 },
  { id: 11, name: 'Salesforce', price: 210 },
  { id: 12, name: 'Adobe', price: 570 },
  { id: 13, name: 'PayPal', price: 270 },
  { id: 14, name: 'Square', price: 160 },
  { id: 15, name: 'Uber', price: 48 },
  { id: 16, name: 'Lyft', price: 15 },
  { id: 17, name: 'Spotify', price: 240 },
  { id: 18, name: 'Shopify', price: 900 },
  { id: 19, name: 'Zoom', price: 350 },
  { id: 20, name: 'Twitter', price: 45 },
  { id: 21, name: 'Coca-Cola', price: 60 },
  { id: 22, name: 'PepsiCo', price: 160 },
  { id: 23, name: 'Procter & Gamble', price: 140 },
  { id: 24, name: 'Johnson & Johnson', price: 170 },
  { id: 25, name: 'Pfizer', price: 45 },
  { id: 26, name: 'Moderna', price: 200 },
  { id: 27, name: 'Boeing', price: 220 },
  { id: 28, name: 'Airbnb', price: 170 },
  { id: 29, name: 'Alibaba', price: 180 },
  { id: 30, name: 'Baidu', price: 200 },
  { id: 31, name: 'Tencent', price: 520 },
  { id: 32, name: 'JD.com', price: 80 },
  { id: 33, name: 'Sony', price: 120 },
  { id: 34, name: 'Samsung', price: 80 },
  { id: 35, name: 'Toyota', price: 160 },
  { id: 36, name: 'Honda', price: 30 },
  { id: 37, name: 'Nissan', price: 10 },
  { id: 38, name: 'Ford', price: 20 },
  { id: 39, name: 'General Motors', price: 40 },
  { id: 40, name: 'ExxonMobil', price: 70 },
  { id: 41, name: 'Chevron', price: 100 },
  { id: 42, name: 'Shell', price: 60 },
  { id: 43, name: 'BP', price: 30 },
  { id: 44, name: 'Walmart', price: 140 },
  { id: 45, name: 'Target', price: 180 },
  { id: 46, name: 'Costco', price: 480 },
  { id: 47, name: 'Starbucks', price: 110 },
  { id: 48, name: 'McDonald\'s', price: 240 },
  { id: 49, name: 'Visa', price: 230 },
  { id: 50, name: 'Mastercard', price: 340 }
];

const StockPage = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle multiple stock selection
  const handleStockSelect = (stock) => {
    if (!selectedStocks.includes(stock)) {
      const newSelection = [...selectedStocks, stock];
      setSelectedStocks(newSelection);
      calculateTotalPrice(newSelection);
    } else {
      const newSelection = selectedStocks.filter((s) => s.id !== stock.id);
      setSelectedStocks(newSelection);
      calculateTotalPrice(newSelection);
    }
  };

  // Calculate the total price of selected stocks
  const calculateTotalPrice = (stocks) => {
    const total = stocks.reduce((acc, stock) => acc + stock.price, 0);
    setTotalPrice(total);
  };

  // Handle adding to watchlist
  const handleAddToWatchlist = () => {
    if (selectedStocks.length === 0) {
      setMessage('No stock selected.');
    } else {
      setMessage(`${selectedStocks.map((s) => s.name).join(', ')} added to watchlist.`);
    }
  };

  // Handle buying stocks
  const handleBuyStock = () => {
    if (selectedStocks.length === 0) {
      setMessage('No stock selected.');
    } else {
      setMessage(`Successfully bought ${selectedStocks.map((s) => s.name).join(', ')}.`);
      setSelectedStocks([]);
      setTotalPrice(0);
    }
  };

  return (
    <div className="page-container">
      <h2>Stock Page</h2>
      <p>Select stocks to add to watchlist or buy.</p>

      <div className="stock-list">
        {stocksData.map((stock) => (
          <div key={stock.id} className={`stock-item ${selectedStocks.includes(stock) ? 'selected' : ''}`}>
            <h3>{stock.name}</h3>
            <p>Price: ${stock.price}</p>
            <button onClick={() => handleStockSelect(stock)}>
              {selectedStocks.includes(stock) ? 'Deselect' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      <div className="total-price-box">
        <h4>Total Price of Selected Stocks:</h4>
        <div className="total-price-display">${totalPrice}</div>
      </div>

      <div className="actions">
        <button className="watchlist-button" onClick={handleAddToWatchlist}>
          Add to Watchlist
        </button>
        <button className="buy-button" onClick={handleBuyStock}>
          Buy Selected
        </button>
      </div>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default StockPage;
