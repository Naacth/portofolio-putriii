import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Education.css';

function Education() {
  return (
    <section className="education-section" id="education" data-aos="fade-up">
      <h2>Pendidikan</h2>
      <div className="education-list">
        <div className="education-item">
          <FaUniversity className="edu-icon" />
          <div>
            <h3>Universitas Yatsi Madani</h3>
            <p>S1 Ilmu Komputer | Semester 4 | IPK: 3.75 / 4.00</p>
            <span>Desember 2023 – Sekarang</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education; 