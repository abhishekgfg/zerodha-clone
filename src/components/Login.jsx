// // // src/components/Login.jsx
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import '/src/style/Login.css';

// // const sampleUsers = [
// //   { email: 'abhi@123', password: '123' },
// //   { email: 'user2@example.com', password: 'password456' },
// // ];

// // const Login = ({ onLogin }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     const user = sampleUsers.find((user) => user.email === email && user.password === password);
// //     if (user) {
// //       onLogin(); // Update authentication state
// //       navigate('/home'); // Redirect to the Home Page on successful login
// //     } else {
// //       setError('Invalid email or password');
// //     }
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         {error && <p className="error">{error}</p>}
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '/src/style/Login.css'; // Import your CSS file

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       const token = res.data.token;
//       localStorage.setItem('token', token); // Save token in local storage
//       navigate('/dashboard'); // Redirect to dashboard after login
//     } catch (err) {
//       setError('Login failed. Check your credentials.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '/src/style/Login.css'; // Import your CSS file

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       const token = res.data.token;
//       localStorage.setItem('token', token); // Save token in local storage
//       navigate('/home'); // Redirect to dashboard after login
//     } catch (err) {
//       // Check if the error response has a message
//       if (err.response && err.response.data) {
//         setError(err.response.data.message || 'Login failed. Check your credentials.');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/src/style/Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const token = res.data.token;
      
      if (token) {
        localStorage.setItem('token', token); // Store the token
        navigate('/home'); // Navigate to home page after login
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
    </div>
  );
};

export default LoginPage;
