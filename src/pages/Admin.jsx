// src/pages/Admin.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h2>Bem-vindo ao Painel Administrativo</h2>
      </div>
    </div>
  );
};

export default Admin;
