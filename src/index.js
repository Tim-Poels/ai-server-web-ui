import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
