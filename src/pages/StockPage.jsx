// import React, { useState } from 'react';
// import '/src/style/StockPage.css';

// // 50 Real Stock Names and Approximate Prices
// const stocksData = [
//   { id: 1, name: 'Apple', price: 150 },
//   { id: 2, name: 'Google', price: 2800 },
//   { id: 3, name: 'Microsoft', price: 300 },
//   { id: 4, name: 'Amazon', price: 3500 },
//   { id: 5, name: 'Tesla', price: 750 },
//   { id: 6, name: 'Facebook', price: 320 },
//   { id: 7, name: 'Netflix', price: 620 },
//   { id: 8, name: 'Nvidia', price: 2200 },
//   { id: 9, name: 'Intel', price: 55 },
//   { id: 10, name: 'AMD', price: 120 },
//   { id: 11, name: 'Salesforce', price: 210 },
//   { id: 12, name: 'Adobe', price: 570 },
//   { id: 13, name: 'PayPal', price: 270 },
//   { id: 14, name: 'Square', price: 160 },
//   { id: 15, name: 'Uber', price: 48 },
//   { id: 16, name: 'Lyft', price: 15 },
//   { id: 17, name: 'Spotify', price: 240 },
//   { id: 18, name: 'Shopify', price: 900 },
//   { id: 19, name: 'Zoom', price: 350 },
//   { id: 20, name: 'Twitter', price: 45 },
//   { id: 21, name: 'Coca-Cola', price: 60 },
//   { id: 22, name: 'PepsiCo', price: 160 },
//   { id: 23, name: 'Procter & Gamble', price: 140 },
//   { id: 24, name: 'Johnson & Johnson', price: 170 },
//   { id: 25, name: 'Pfizer', price: 45 },
//   { id: 26, name: 'Moderna', price: 200 },
//   { id: 27, name: 'Boeing', price: 220 },
//   { id: 28, name: 'Airbnb', price: 170 },
//   { id: 29, name: 'Alibaba', price: 180 },
//   { id: 30, name: 'Baidu', price: 200 },
//   { id: 31, name: 'Tencent', price: 520 },
//   { id: 32, name: 'JD.com', price: 80 },
//   { id: 33, name: 'Sony', price: 120 },
//   { id: 34, name: 'Samsung', price: 80 },
//   { id: 35, name: 'Toyota', price: 160 },
//   { id: 36, name: 'Honda', price: 30 },
//   { id: 37, name: 'Nissan', price: 10 },
//   { id: 38, name: 'Ford', price: 20 },
//   { id: 39, name: 'General Motors', price: 40 },
//   { id: 40, name: 'ExxonMobil', price: 70 },
//   { id: 41, name: 'Chevron', price: 100 },
//   { id: 42, name: 'Shell', price: 60 },
//   { id: 43, name: 'BP', price: 30 },
//   { id: 44, name: 'Walmart', price: 140 },
//   { id: 45, name: 'Target', price: 180 },
//   { id: 46, name: 'Costco', price: 480 },
//   { id: 47, name: 'Starbucks', price: 110 },
//   { id: 48, name: 'McDonald\'s', price: 240 },
//   { id: 49, name: 'Visa', price: 230 },
//   { id: 50, name: 'Mastercard', price: 340 }
// ];

// const StockPage = () => {
//   const [selectedStocks, setSelectedStocks] = useState({});
//   const [message, setMessage] = useState('');
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleStockSelect = (stock, quantity) => {
//     const updatedStocks = { ...selectedStocks };

//     if (quantity === 0) {
//       delete updatedStocks[stock.id]; // Remove stock if quantity is 0
//     } else {
//       updatedStocks[stock.id] = { ...stock, quantity };
//     }

//     setSelectedStocks(updatedStocks);
//     calculateTotalPrice(updatedStocks);
//   };

//   const calculateTotalPrice = (stocks) => {
//     const total = Object.values(stocks).reduce(
//       (acc, stock) => acc + stock.price * stock.quantity,
//       0
//     );
//     setTotalPrice(total);
//   };

//   const handleAddToWatchlist = async () => {
//     if (Object.keys(selectedStocks).length === 0) {
//       setMessage('No stock selected.');
//       return;
//     }
  
//     const stockNames = Object.values(selectedStocks)
//       .map((s) => ({
//         stockName: s.name,
//         price: s.price,
//         quantity: s.quantity,
//       }));
  
//     try {
//       const response = await fetch('http://localhost:5000/api/watchlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(stockNames),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         setMessage(`${data.length} stocks added to watchlist.`);
//       } else {
//         setMessage('Error adding stocks to watchlist.');
//       }
//     } catch (error) {
//       console.error('Error adding stocks to watchlist:', error);
//       setMessage('Error adding stocks to watchlist.');
//     }
//   };
  

//   const handleBuyStock = async () => {
//     if (Object.keys(selectedStocks).length === 0) {
//       setMessage('No stock selected.');
//       return;
//     }

//     const orderData = Object.values(selectedStocks).map(stock => ({
//       stockName: stock.name,
//       price: stock.price,
//       quantity: stock.quantity,
//       total: stock.price * stock.quantity,
//     }));

//     // Send the order to the backend for buying
//     try {
//       const response = await fetch('http://localhost:5000/api/orders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setMessage(`Successfully bought ${data.length} stocks.`);
//         setSelectedStocks({}); // Clear selected stocks after purchase
//         setTotalPrice(0); // Reset the total price
//       } else {
//         setMessage('Error buying stocks.');
//       }
//     } catch (error) {
//       console.error('Error buying stocks:', error);
//       setMessage('Failed to save order.');
//     }
//   };

//   const filteredStocks = stocksData.filter((stock) =>
//     stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="page-container">
//       <h2>Stock Page</h2>
//       <p>Select stocks to add to watchlist or buy.</p>

//       {/* Search Bar */}
//       <div className="search-bar-container">
//         <input
//           type="text"
//           placeholder="Search stocks..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-bar"
//         />
//         <button className="search-button">
//           <i className="fa fa-search"></i>
//         </button>
//       </div>

//       <div className="stock-list">
//         {filteredStocks.map((stock) => (
//           <div key={stock.id} className="stock-item">
//             <h3>{stock.name}</h3>
//             <p>Price: ${stock.price}</p>
//             <div className="quantity-selector">
//               <label htmlFor={`quantity-${stock.id}`}>Quantity:</label>
//               <input
//                 id={`quantity-${stock.id}`}
//                 type="number"
//                 min="0"
//                 value={selectedStocks[stock.id]?.quantity || 0}
//                 onChange={(e) =>
//                   handleStockSelect(stock, parseInt(e.target.value) || 0)
//                 }
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="total-price-box">
//         <h4>Total Price of Selected Stocks:</h4>
//         <div className="total-price-display">${totalPrice}</div>
//       </div>

//       <div className="actions">
//         <button className="watchlist-button" onClick={handleAddToWatchlist}>
//           Add to Watchlist
//         </button>
//         <button className="buy-button" onClick={handleBuyStock}>
//           Buy Selected
//         </button>
//       </div>

//       {message && <div className="message">{message}</div>}
//     </div>
//   );
// };

// export default StockPage;


// 
import React, { useState, useEffect } from 'react';
import '/src/style/StockPage.css';
import { useData } from '../context/useData';

// Function to generate random prices for stocks
const generateRandomPrice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Stock data
const stocksData = [
  'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla', 'Facebook', 'Netflix',
  'Nvidia', 'Intel', 'AMD', 'Salesforce', 'Adobe', 'PayPal', 'Square', 'Uber',
  'Lyft', 'Spotify', 'Shopify', 'Zoom', 'Twitter', 'Coca-Cola', 'PepsiCo',
  'Procter & Gamble', 'Johnson & Johnson', 'Pfizer', 'Moderna', 'Boeing',
  'Airbnb', 'Alibaba', 'Baidu', 'Tencent', 'JD.com', 'Sony', 'Samsung',
  'Toyota', 'Honda', 'Nissan', 'Ford', 'General Motors', 'ExxonMobil',
  'Chevron', 'Shell', 'BP', 'Walmart', 'Target', 'Costco', 'Starbucks',
  'McDonald\'s', 'Visa', 'Mastercard',
];

// Generate stock data with random prices
const generateStocksWithPrices = () =>
  stocksData.map((name, index) => ({
    id: index + 1,
    name,
    price: generateRandomPrice(100, 10000),
  }));

const StockPage = () => {
  const [selectedStocks, setSelectedStocks] = useState({});
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [stocks, setStocks] = useState([]);
  const { apiData } = useData(); // Simulating useData context hook

  useEffect(() => {
    setStocks(generateStocksWithPrices());
  }, []);

  const handleStockSelect = (stock, quantity) => {
    if (quantity < 0) {
      return; // Do not allow negative quantities
    }

    const updatedStocks = { ...selectedStocks };

    if (quantity === 0) {
      delete updatedStocks[stock.id]; // Remove stock if quantity is 0
    } else {
      const updatedPrice = apiData?.[stock.id - 1]?.high || stock.price;
      updatedStocks[stock.id] = { ...stock, quantity, price: updatedPrice };
    }

    setSelectedStocks(updatedStocks);
    calculateTotalPrice(updatedStocks);
  };

  const calculateTotalPrice = (stocks) => {
    const total = Object.values(stocks).reduce(
      (acc, stock) => acc + stock.price * stock.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleAddToWatchlist = async () => {
    if (Object.keys(selectedStocks).length === 0) {
      setMessage('No stock selected.');
      return;
    }

    const stockNames = Object.values(selectedStocks).map((s) => ({
      stockName: s.name,
      price: s.price,
      quantity: s.quantity,
    }));

    try {
      const response = await fetch('http://localhost:5000/api/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockNames),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`${data.length} stocks added to watchlist.`);
      } else {
        setMessage('Error adding stocks to watchlist.');
      }
    } catch (error) {
      console.error('Error adding stocks to watchlist:', error);
      setMessage('Error adding stocks to watchlist.');
    }
  };

  const handleBuyStock = async () => {
    if (Object.keys(selectedStocks).length === 0) {
      setMessage('No stock selected.');
      return;
    }

    const orderData = Object.values(selectedStocks).map((stock) => ({
      stockName: stock.name,
      price: stock.price,
      quantity: stock.quantity,
      total: stock.price * stock.quantity,
    }));

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Successfully bought ${data.length} stocks.`);
        setSelectedStocks({});
        setTotalPrice(0);
      } else {
        setMessage('Error buying stocks.');
      }
    } catch (error) {
      console.error('Error buying stocks:', error);
      setMessage('Failed to save order.');
    }
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2>Stock Page</h2>
      <p>Select stocks to add to watchlist or buy.</p>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="stock-list">
        {filteredStocks.map((stock) => (
          <div key={stock.id} className="stock-item">
            <h3>{stock.name}</h3>
            <p>Price: ₹{apiData?.[stock.id - 1]?.high || stock.price}</p>
            <div className="quantity-selector">
              <label htmlFor={`quantity-${stock.id}`}>Quantity:</label>
              <input
                id={`quantity-${stock.id}`}
                type="number"
                min="0"
                value={selectedStocks[stock.id]?.quantity || 0}
                onChange={(e) =>
                  handleStockSelect(stock, parseInt(e.target.value) || 0)
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="total-price-box">
        <h4>Total Price of Selected Stocks:</h4>
        <div className="total-price-display">₹{totalPrice}</div>
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
