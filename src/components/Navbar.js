import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Putri Anggriyani</div>
      <ul className="navbar-links">
        <li><a href="#projects">Projek</a></li>
        <li><a href="#profile">Profil</a></li>
        <li><a href="#education">Pendidikan</a></li>
        <li><a href="#experience">Pengalaman</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Sertifikasi</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 