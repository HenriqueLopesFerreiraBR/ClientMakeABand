import React from 'react';
import { redirect, redirectDocument } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import '../css/logout.css';

const Logout = () => {
  //const history = useHistory();

  const handleLogout = () => {
    return redirect("/")
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h2>Você realmente deseja sair?</h2>
        <button onClick={handleLogout}> <a href="/admin">Não</a></button>
        <button onClick={handleLogout}> <a href="/">Sim</a></button>
      </div>
    </div>
  );
};

export default Logout;
