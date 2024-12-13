// // import React, { useEffect, useState } from 'react';
// // import '/src/style/OrderPage.css';

// // const OrderPage = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/api/orders');
// //         const data = await response.json();
// //         setOrders(data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching orders:', error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="page-container">
// //       <h2>Order Page</h2>
// //       {loading ? (
// //         <p>Loading orders...</p>
// //       ) : orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         <div className="order-list">
// //           {orders.map((order) => (
// //             <div key={order._id} className="order-item">
// //               <h3>{order.stockName}</h3>
// //               <p>Price: ${order.price}</p>
// //               <p>Quantity: {order.quantity}</p>
// //               <p>Total: ${order.total}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrderPage;

// import React, { useEffect, useState } from 'react';
// import '/src/style/OrderPage.css';

// const OrderPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedOrders, setSelectedOrders] = useState([]);
//   const [showCheckboxes, setShowCheckboxes] = useState(false);
//   const [isSelling, setIsSelling] = useState(false);
//   const [quantityToSell, setQuantityToSell] = useState({});
//   const [totalPriceInINR, setTotalPriceInINR] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const USD_TO_INR = 82; // Conversion rate

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/orders');
//         const data = await response.json();
//         setOrders(data);
//         calculateTotal(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const calculateTotal = (orders) => {
//     const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
//     const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
//     setTotalPriceInINR(total * USD_TO_INR);
//     setTotalItems(totalQuantity);
//   };

//   const handleSelectOrder = (orderId) => {
//     setSelectedOrders((prevSelected) =>
//       prevSelected.includes(orderId)
//         ? prevSelected.filter((id) => id !== orderId)
//         : [...prevSelected, orderId]
//     );
//   };

//   const handleDeleteSelected = async () => {
//     try {
//       const updatedOrders = orders.filter(
//         (order) => !selectedOrders.includes(order._id)
//       );

//       await Promise.all(
//         selectedOrders.map((id) =>
//           fetch(`http://localhost:5000/api/orders/${id}`, { method: 'DELETE' })
//         )
//       );

//       setOrders(updatedOrders);
//       setSelectedOrders([]);
//       setShowCheckboxes(false);
//       calculateTotal(updatedOrders);
//     } catch (error) {
//       console.error('Error deleting orders:', error);
//     }
//   };

//   const handleSelectAll = () => {
//     if (selectedOrders.length === orders.length) {
//       setSelectedOrders([]);
//     } else {
//       setSelectedOrders(orders.map((order) => order._id));
//     }
//   };

//   const handleQuantityChange = (orderId, quantity) => {
//     setQuantityToSell((prev) => ({
//       ...prev,
//       [orderId]: quantity,
//     }));
//   };

//   const handleSellOrders = async () => {
//     setErrorMessage('');

//     const invalidOrders = selectedOrders.filter((orderId) => {
//       const order = orders.find((order) => order._id === orderId);
//       const quantityToSellValue = quantityToSell[orderId] || 0;
//       return quantityToSellValue > order.quantity;
//     });

//     if (invalidOrders.length > 0) {
//       setErrorMessage('Error: Quantity exceeds available stock.');
//       return;
//     }

//     try {
//       const updatedOrders = orders.map((order) => {
//         if (selectedOrders.includes(order._id)) {
//           const quantityToSellValue = quantityToSell[order._id] || 0;

//           if (quantityToSellValue > 0 && quantityToSellValue <= order.quantity) {
//             order.quantity -= quantityToSellValue;
//             order.total = order.quantity * order.price;
//           }
//         }
//         return order;
//       }).filter((order) => order.quantity > 0);

//       setOrders(updatedOrders);
//       setSelectedOrders([]);
//       setIsSelling(false);
//       setShowCheckboxes(false);
//       calculateTotal(updatedOrders);

//       setSuccessMessage('Sell operation successful!');
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 3000);
//     } catch (error) {
//       console.error('Error selling orders:', error);
//     }
//   };

//   return (
//     <div className="order-page-container">
//       <h2 className="order-page-title">Order Management</h2>
//       {loading ? (
//         <p className="loading-message">Loading orders...</p>
//       ) : (
//         <>
//           <div className="header-menu">
//             <button
//               className="three-dot-button"
//               onClick={() => setShowCheckboxes((prev) => !prev)}
//             >
//               &#x22EE;
//             </button>
//             <div className={`dropdown ${showCheckboxes ? 'active' : ''}`}>
//               <button onClick={handleSelectAll}>
//                 {selectedOrders.length === orders.length
//                   ? 'Deselect All'
//                   : 'Select All'}
//               </button>
//               <button
//                 onClick={handleDeleteSelected}
//                 disabled={selectedOrders.length === 0}
//               >
//                 Delete Selected
//               </button>
//               <button
//                 onClick={() => setIsSelling((prev) => !prev)}
//                 disabled={selectedOrders.length === 0}
//               >
//                 {isSelling ? 'Cancel Sell' : 'Sell Selected'}
//               </button>
//               {isSelling && (
//                 <button
//                   onClick={handleSellOrders}
//                   disabled={selectedOrders.length === 0}
//                 >
//                   Confirm Sell
//                 </button>
//               )}
//             </div>
//           </div>
//           <p className="total-orders">Total Orders: {totalItems}</p>
//           <p className="total-price">
//             Total Price: ₹{totalPriceInINR.toFixed(2)}
//           </p>
//           {successMessage && (
//             <p className="success-message">{successMessage}</p>
//           )}
//           {errorMessage && (
//             <p className="error-message">{errorMessage}</p>
//           )}
//           {orders.length === 0 ? (
//             <p className="no-orders-message">No orders found.</p>
//           ) : (
//             <div className="order-list">
//               {orders.map((order) => (
//                 <div key={order._id} className="order-item">
//                   {(showCheckboxes || isSelling) && (
//                     <input
//                       type="checkbox"
//                       className="order-select-checkbox"
//                       checked={selectedOrders.includes(order._id)}
//                       onChange={() => handleSelectOrder(order._id)}
//                     />
//                   )}
//                   <div className="order-details">
//                     <h3 className="order-stock-name">{order.stockName}</h3>
//                     <p>
//                       Price: <span className="order-price">₹{(order.price * USD_TO_INR).toFixed(2)}</span>
//                     </p>
//                     <p>
//                       Quantity: <span className="order-quantity">{order.quantity}</span>
//                     </p>
//                     <p>
//                       Total: <span className="order-total">₹{(order.total * USD_TO_INR).toFixed(2)}</span>
//                     </p>
//                     {isSelling && selectedOrders.includes(order._id) && (
//                       <div className="quantity-selector">
//                         <label htmlFor={`quantity-${order._id}`}>Quantity:</label>
//                         <input
//                           type="number"
//                           id={`quantity-${order._id}`}
//                           value={quantityToSell[order._id] || ''}
//                           onChange={(e) =>
//                             handleQuantityChange(order._id, parseInt(e.target.value, 10))
//                           }
//                           max={order.quantity}
//                           min={1}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OrderPage



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '/src/style/OrderPage.css';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [isSelling, setIsSelling] = useState(false);
  const [quantityToSell, setQuantityToSell] = useState({});
  const [totalPriceInINR, setTotalPriceInINR] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const USD_TO_INR = 82; // Conversion rate
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setOrders(data);
        calculateTotal(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const calculateTotal = (orders) => {
    const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
    const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
    setTotalPriceInINR(total * USD_TO_INR);
    setTotalItems(totalQuantity);
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(orderId)
        ? prevSelected.filter((id) => id !== orderId)
        : [...prevSelected, orderId]
    );
  };

  const handleDeleteSelected = async () => {
    try {
      const updatedOrders = orders.filter(
        (order) => !selectedOrders.includes(order._id)
      );

      await Promise.all(
        selectedOrders.map((id) =>
          fetch(`http://localhost:5000/api/orders/${id}`, { method: 'DELETE' })
        )
      );

      setOrders(updatedOrders);
      setSelectedOrders([]);
      setShowCheckboxes(false);
      calculateTotal(updatedOrders);
    } catch (error) {
      console.error('Error deleting orders:', error);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order._id));
    }
  };

  const handleQuantityChange = (orderId, quantity) => {
    setQuantityToSell((prev) => ({
      ...prev,
      [orderId]: quantity,
    }));
  };

  const handleSellOrders = async () => {
    setErrorMessage('');

    const invalidOrders = selectedOrders.filter((orderId) => {
      const order = orders.find((order) => order._id === orderId);
      const quantityToSellValue = quantityToSell[orderId] || 0;
      return quantityToSellValue > order.quantity;
    });

    if (invalidOrders.length > 0) {
      setErrorMessage('Error: Quantity exceeds available stock.');
      return;
    }

    try {
      const updatedOrders = orders.map((order) => {
        if (selectedOrders.includes(order._id)) {
          const quantityToSellValue = quantityToSell[order._id] || 0;

          if (quantityToSellValue > 0 && quantityToSellValue <= order.quantity) {
            order.quantity -= quantityToSellValue;
            order.total = order.quantity * order.price;
          }
        }
        return order;
      }).filter((order) => order.quantity > 0);

      setOrders(updatedOrders);
      setSelectedOrders([]);
      setIsSelling(false);
      setShowCheckboxes(false);
      calculateTotal(updatedOrders);

      setSuccessMessage('Sell operation successful!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error selling orders:', error);
    }
  };

  // Navigate to Sell Page
  const navigateToSellPage = () => {
    navigate('/sell');
  };

  return (
    <div className="order-page-container">
      <h2 className="order-page-title">Order Management</h2>
      {loading ? (
        <p className="loading-message">Loading orders...</p>
      ) : (
        <>
          <div className="header-menu">
            <button className="sell-page-button" onClick={navigateToSellPage}>
              Sell Page
            </button>
            <button
              className="three-dot-button"
              onClick={() => setShowCheckboxes((prev) => !prev)}
            >
              &#x22EE;
            </button>
            <div className={`dropdown ${showCheckboxes ? 'active' : ''}`}>
              <button onClick={handleSelectAll}>
                {selectedOrders.length === orders.length
                  ? 'Deselect All'
                  : 'Select All'}
              </button>
              <button
                onClick={handleDeleteSelected}
                disabled={selectedOrders.length === 0}
              >
                Delete Selected
              </button>
              <button
                onClick={() => setIsSelling((prev) => !prev)}
                disabled={selectedOrders.length === 0}
              >
                {isSelling ? 'Cancel Sell' : 'Sell Selected'}
              </button>
              {isSelling && (
                <button
                  onClick={handleSellOrders}
                  disabled={selectedOrders.length === 0}
                >
                  Confirm Sell
                </button>
              )}
            </div>
          </div>
          <p className="total-orders">Total Orders: {totalItems}</p>
          <p className="total-price">
            Total Price: ₹{totalPriceInINR.toFixed(2)}
          </p>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          {orders.length === 0 ? (
            <p className="no-orders-message">No orders found.</p>
          ) : (
            <div className="order-list">
              {orders.map((order) => (
                <div key={order._id} className="order-item">
                  {(showCheckboxes || isSelling) && (
                    <input
                      type="checkbox"
                      className="order-select-checkbox"
                      checked={selectedOrders.includes(order._id)}
                      onChange={() => handleSelectOrder(order._id)}
                    />
                  )}
                  <div className="order-details">
                    <h3 className="order-stock-name">{order.stockName}</h3>
                    <p>
                      Price: <span className="order-price">₹{(order.price * USD_TO_INR).toFixed(2)}</span>
                    </p>
                    <p>
                      Quantity: <span className="order-quantity">{order.quantity}</span>
                    </p>
                    <p>
                      Total: <span className="order-total">₹{(order.total * USD_TO_INR).toFixed(2)}</span>
                    </p>
                    {isSelling && selectedOrders.includes(order._id) && (
                      <div className="quantity-selector">
                        <label htmlFor={`quantity-${order._id}`}>Quantity:</label>
                        <input
                          type="number"
                          id={`quantity-${order._id}`}
                          value={quantityToSell[order._id] || ''}
                          onChange={(e) =>
                            handleQuantityChange(order._id, parseInt(e.target.value, 10))
                          }
                          max={order.quantity}
                          min={1}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderPage;
