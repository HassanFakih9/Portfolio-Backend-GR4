import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import styles from './LoginPage.module.css'; // Use the correct path
import axios from 'axios';

const LoginPage = () => {

  const [checkUsername, setCheckUsername] = useState('');
  const [checkPass, setCheckPass] = useState('');
  
  const [checkMessage, setCheckMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  

  const handleCheck = async () => {
    try {
      // Send a POST request to the backend to check for existing users
      const response = await axios.post('http://localhost:5000/api/users/check', {
        username: checkUsername, // Use the check username
        pass: checkPass,         // Use the check password
      });

      if (response.data.message === 'success') {
        setCheckMessage('Login Successful');
        setAuthenticated(true);
      } else {
        setCheckMessage('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  };
  if (authenticated) {
    return (
      <div>
          <Dashboard />
      </div>
  );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer }> {/* Apply form-container class here */}
        <h2>Login Form</h2>
        <input
          type="text"
          placeholder="username"
          value={checkUsername}
          onChange={(e) => setCheckUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Password"
          value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleCheck} className={styles.button}>Login</button>
        <p className={styles.message}>{checkMessage}</p>
      </div>
    </div>
  );
  
  
};

export default LoginPage;

