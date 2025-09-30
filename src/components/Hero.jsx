import React from "react";
import "./Hero.css";

//Hero
export default function Hero(){
    return(
        <section className="hero">
            <div className="hero-container">
                <h1 className="hero-title">Olá, eu sou o Henrique! </h1>
                <p className="hero-subtitle">Bem-vindo ao meu portfólio em React</p>
                <a href="#contact" className="hero-btn">Entre em Contato</a>
            </div>
        </section>
    );
}