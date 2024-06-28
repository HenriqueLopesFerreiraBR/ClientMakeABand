// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin">Início</Link>
      <Link to="/search-bands">Buscar Bandas</Link>
      <Link to="/profile">Perfil</Link>
      <Link to="/logout">Sair</Link>
    </div>
  );
};

export default Sidebar;
