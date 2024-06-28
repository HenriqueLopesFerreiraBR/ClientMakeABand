// src/pages/Login.js
import React from 'react';
import '../css/login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form action='/admin'>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
