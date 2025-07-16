import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Certifications.css';

const certifications = [
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai1.jpg',
    title: 'AI Praktis untuk Produktivitas',
    year: 'Jun 2025 - Jun 2028',
    description: 'Dicoding Indonesia | ID: MEPJQ4M1WX3V | Artificial Intelligence (AI)'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai2.jpg',
    title: 'Belajar Penggunaan Generative AI',
    year: 'Jun 2025',
    description: 'Dicoding Indonesia | ID: QLZ93WOGMZ5D | Generative AI'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai3.jpg',
    title: 'Belajar Dasar AI',
    year: 'Apr 2025',
    description: 'Dicoding Indonesia | ID: KEXL7JJ10XG2 | Artificial Intelligence (AI)'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai4.jpg',
    title: 'Belajar Dasar Data Science',
    year: 'Apr 2025',
    description: 'Dicoding Indonesia | ID: N9ZO9J8L8XG5 | Data Science'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai5.jpg',
    title: 'Belajar Dasar Structured Query Language (SQL)',
    year: 'Apr 2025',
    description: 'Dicoding Indonesia | ID: 2VX3K3N0JXYQ | SQL'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai6.jpg',
    title: 'Belajar Dasar Visualisasi Data',
    year: 'Apr 2025 - Apr 2028',
    description: 'Dicoding Indonesia | ID: 07Z636KMYZQR | Data Visualization'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai7.jpg',
    title: 'Control Design Onramp with Simulink',
    year: 'Apr 2025',
    description: 'MathWorks | MATLAB · Simulink · Mathworks'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai8.jpg',
    title: 'MATLAB Onramp',
    year: 'Apr 2025',
    description: 'MathWorks | MATLAB'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai9.jpg',
    title: 'Memulai Pemrograman dengan Python',
    year: 'Apr 2025',
    description: 'Dicoding Indonesia | ID: JMZVE52EOPN9 | Python (Programming Language)'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai10.jpg',
    title: 'Fundamental SQL Using SELECT Statement',
    year: 'Des 2024',
    description: 'DQLab'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai11.jpg',
    title: 'Python Fundamental for Data Science',
    year: 'Des 2024',
    description: 'DQLab'
  },
  {
    icon: <FaCertificate className="cert-icon" />,
    image: '/images/ai12.jpg',
    title: 'R Fundamental for Data Science',
    year: 'Des 2024',
    description: 'DQLab'
  }
];

const kimCert = {
  icon: <FaCertificate className="cert-icon" />,
  image: '/images/kim.jpg',
  title: 'Sertifikat Magang KIM',
  year: '2024',
  description: 'Magang/PKL Kominfo, Program Pendampingan KIM Tangerang'
};

function Certifications() {
  return (
    <section className="certifications-section" id="certifications" data-aos="fade-up">
      <h2>Pelatihan & Sertifikasi</h2>
      <div className="kim-cert-center">
        <div className="cert-card" data-aos="zoom-in-up">
          <div className="cert-image">
            <img src={kimCert.image} alt={kimCert.title} />
          </div>
          <div className="cert-content">
            <div className="cert-header">
              {kimCert.icon}
              <div>
                <h3>{kimCert.title}</h3>
                <span className="cert-year">{kimCert.year}</span>
              </div>
            </div>
            <p className="cert-description">{kimCert.description}</p>
          </div>
        </div>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx} data-aos="zoom-in-up">
            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="cert-content">
              <div className="cert-header">
                {cert.icon}
                <div>
                  <h3>{cert.title}</h3>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications; 