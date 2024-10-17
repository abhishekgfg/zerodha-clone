// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '/src/style/Header.css'; // Make sure this path matches your project structure

// const Header = ({ isAuthenticated, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/'); // Redirect to login page after logout
//   };

//   return (
//     <header className="header-container">
//       <div className="logo-container">
//         <img src="/src/assets/logo.png" alt="Project Logo" className="project-logo" />
//         <h1 className="project-name">Effortless Stocks</h1> {/* Updated to include project name */}
//       </div>
//       <nav className="nav-links">
//         <Link to="/home">Home</Link>
//         <Link to="/stocks">Stocks</Link>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/watchlist">Watchlist</Link>
//         <Link to="/portfolio">Portfolio</Link>
//         {isAuthenticated && <button onClick={handleLogout} className="logout-button">Logout</button>}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/src/style/Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="/src/assets/zrdh.png" alt="Project Logo" className="project-logo animated-logo" />
        <h1 className="project-name animated-text">Effortless Stocks</h1>
      </div>
      <nav className="nav-links">
        <Link to="/home" className="nav-link animated-link">Home</Link>
        <Link to="/stocks" className="nav-link animated-link">Stocks</Link>
        <Link to="/dashboard" className="nav-link animated-link">Dashboard</Link>
        <Link to="/watchlist" className="nav-link animated-link">Watchlist</Link>
        <Link to="/order" className="nav-link animated-link">Order</Link>
        {isAuthenticated && (
          <button onClick={handleLogout} className="logout-button animated-button">Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
