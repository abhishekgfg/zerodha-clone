// src/App.jsx
import React, { useState, useEffect ,useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import HomePage from '/src/pages/HomePage';
import StockPage from '/src/pages/StockPage';
import DashboardPage from '/src/pages/DashboardPage';
import OrderPage from '/src/pages/OrderPage';
import WatchlistPage from '/src/pages/WatchlistPage';
import Login from '/src/components/Login';
import Signup from '/src/components/Signup';
import PrivateRoute from './components/PrivateRoute';
import About from '/src/FooterPage/About'; // Import About page
import FAQ from '/src/FooterPage/FAQ'; // Import FAQ page
import Legal from '/src/FooterPage/Legal'; // Import Legal page
import Support from '/src/FooterPage/Support'; // Import Support page

import '/src/style/App.css';

const App = () => {
  const footerRef = useRef(null); // Reference to the footer

  const scrollToFooterInstantly = () => {
    if (footerRef.current) {
      // Instantly scroll to footer (no smooth scrolling)
      footerRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication state on initial load from localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store login state in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove login state from localStorage
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        {/* Redirect to Home Page if already authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
         <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/stocks"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <StockPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <WatchlistPage />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/about" element={<About scrollToFooterInstantly={scrollToFooterInstantly} />} />
          <Route path="/faq" element={<FAQ scrollToFooterInstantly={scrollToFooterInstantly} />} />
          <Route path="/legal" element={<Legal scrollToFooterInstantly={scrollToFooterInstantly} />} />
          <Route path="/support" element={<Support scrollToFooterInstantly={scrollToFooterInstantly} />} />
      </Routes>
      <Footer ref={footerRef} />
    </Router>
  );
};

export default App;