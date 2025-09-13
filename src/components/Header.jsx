import React, { useState } from "react";
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">Henrique</a>

        {/* Botão hambúrguer */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/certificates">Certificados</a></li>
          <li><a href="/music">Música</a></li>
          <li><a href="/#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}