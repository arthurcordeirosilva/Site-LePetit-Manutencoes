import React from 'react';
import '../styles/Header.css';
import logo from '../img/LePetit.jpg'
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">Manutenção</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre-nos">Sobre Nós</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#localizacao">Localização</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;