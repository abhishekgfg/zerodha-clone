import React, { useEffect, useState } from 'react';
import '/src/style/OrderPage.css';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="page-container">
      <h2>Order Page</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <h3>{order.stockName}</h3>
              <p>Price: ${order.price}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total: ${order.total}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
