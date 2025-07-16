import React from 'react';
import './Hero.css';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <img src="/images/pribadi1.jpg" alt="Putri Anggriyani" className="hero-img" />
      <h1>Putri Anggriyani</h1>
      <p className="hero-headline">Mahasiswa Ilmu Komputer & Web Developer</p>
      <div className="hero-social">
        <a href="https://linkedin.com/in/putri-anggriyani-pay" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:putrianggriyani354@gmail.com"><FaEnvelope /></a>
        <a href="tel:+6281210700662"><FaPhone /></a>
      </div>
    </section>
  );
}
export default Hero; 