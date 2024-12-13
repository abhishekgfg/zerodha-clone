import React, { useEffect, useState } from 'react';

const SellPage = () => {
  const [soldOrders, setSoldOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoldOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders/sold');
        const data = await response.json();
        console.log(data); // Log the fetched data

        // Ensure that the data is an array and contains valid objects
        if (Array.isArray(data.soldOrders) && data.soldOrders.length > 0) {
          setSoldOrders(data.soldOrders);
        } else {
          console.error('Invalid or empty soldOrders data:', data);
          setSoldOrders([]); // Set to empty array if no valid data
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching sold orders:', error);
        setLoading(false);
      }
    };

    fetchSoldOrders();
  }, []);

  // A helper function to safely render values
  const safeRender = (value, fallback = 'N/A') => {
    return value !== undefined && value !== null ? value : fallback;
  };

  return (
    <div className="sell-page-container">
      <h2 className="sell-page-title">Sold Orders</h2>

      {loading ? (
        <p>Loading sold orders...</p>
      ) : (
        <div className="sold-orders-list">
          {soldOrders.length === 0 ? (
            <p>No sold orders found.</p>
          ) : (
            soldOrders.map((soldOrder) => (
              <div key={soldOrder._id} className="sold-order-item">
                {/* Assuming orderId is an object, display its stockName */}
                <h3>Order ID: {safeRender(soldOrder.orderId?._id, 'No ID')}</h3> {/* Safe render for orderId._id */}
                <p>Stock Name: {safeRender(soldOrder.orderId?.stockName, 'No Stock Name')}</p> {/* Safe render for stockName */}
                <p>Quantity Sold: {safeRender(soldOrder.quantitySold)}</p> {/* Safe render for quantitySold */}
                <p>Total Price: ₹{safeRender(soldOrder.totalPrice?.toFixed(2))}</p> {/* Safe render for totalPrice */}
                <p>Sale Date: {safeRender(soldOrder.saleDate ? new Date(soldOrder.saleDate).toLocaleDateString() : null)}</p> {/* Safe render for saleDate */}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SellPage;
