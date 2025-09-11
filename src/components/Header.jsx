import React from "react";
import "./Header.css";

export default function Header(){
    return(
        <nav className="navbar">
            <div className="container">
                <a href="/" className="logo">Henrique</a>
                <ul className="nav-links">
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