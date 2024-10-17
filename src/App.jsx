import React, { useState, useEffect, useRef } from 'react';
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
import About from '/src/FooterPage/About';
import FAQ from '/src/FooterPage/FAQ';
import Legal from '/src/FooterPage/Legal';
import Support from '/src/FooterPage/Support';

import '/src/style/App.css';

const App = () => {
  const footerRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('token');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  const scrollToFooterInstantly = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<PrivateRoute isAuthenticated={isAuthenticated}><HomePage /></PrivateRoute>} />
        <Route path="/stocks" element={<PrivateRoute isAuthenticated={isAuthenticated}><StockPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated}><DashboardPage /></PrivateRoute>} />
        <Route path="/order" element={<PrivateRoute isAuthenticated={isAuthenticated}><OrderPage /></PrivateRoute>} />
        <Route path="/watchlist" element={<PrivateRoute isAuthenticated={isAuthenticated}><WatchlistPage /></PrivateRoute>} />
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