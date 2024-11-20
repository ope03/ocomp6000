"use client";
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';


export default function Login() {
  const [activeTab, setActiveTab] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const showTab = (tab) => {
    setActiveTab(tab);
    setError('');
  };

  const loginUser = () => {
    console.log("Login User has been initialised")
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError('');

    const autherization = async () => {
      try {
        //Send the POST request using fetch
        const formData = JSON.stringify({username,password});
        const response = await fetch('http://localhost:3000/api/loginuser/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: formData
        });

        const data = await response.json();
        console.log(data.authenticated);

        // Simulate login process with fixed credentials
        if (data.authenticated === true) {
          setSuccess(true);
          router.push('/genpage');
          //setTimeout(() => window.location.reload(), 1500);  // Simulate redirect
        } else {
          setLoading(false);
          setError('Invalid username or password.');
        }
      } catch (error) {
        setSuccess(false);
        setError(error.message);
      }
    }; 
      autherization(); 
      setLoading(false);

  };

  const loginAdmin = () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);

      // Simulate login process with fixed admin credentials
      if (username === 'admin' && password === 'adminpass') {
        setSuccess(true);
        setTimeout(() => window.location.reload(), 1500);  // Simulate redirect
      } else {
        setError('Invalid admin username or password.');
      }
    }, 2000);
  };

  
  return (
    <div className="login-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => showTab('user')}
        >
          User Login
        </div>
        <div
          className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => showTab('admin')}
        >
          Admin Login
        </div>
      </div>

      {activeTab === 'user' && (
        <div className="login-form">
          <form id="userForm">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="login-btn" onClick={loginUser}>
              Log In
            </button>
          </form>
          {loading && <div className="spinner"></div>}
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {activeTab === 'admin' && (
        <div className="login-form">
          <input
            type="text"
            className="input-field"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" className="login-btn" onClick={loginAdmin}>
            Log In as Admin
          </button>
          {loading && <div className="spinner"></div>}
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {success && <p className="success-message">Login successful! Redirecting...</p>}
    </div>
  );
};

