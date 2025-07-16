import React from 'react';
import 'aos/dist/aos.css';

const gallery = [
  { src: '/images/ngajar1.jpg', label: 'Pengalaman Ngajar' },
  { src: '/images/magang1.jpg', label: 'Magang Kominfo' },
  { src: '/images/kampus1.jpg', label: 'Bersama Kampus' },
  { src: '/images/pribadi1.jpg', label: 'Foto Pribadi' },
  { src: '/images/ml1.jpg', label: 'ML - Tempat Sampah' },
  { src: '/images/fotografi1.jpg', label: 'Fotografi' },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery" data-aos="fade-up">
      <h2>Galeri Pengalaman</h2>
      <div className="gallery-grid">
        {gallery.map((item, idx) => (
          <div className="gallery-card" key={idx} data-aos="zoom-in-up">
            <img src={item.src} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery; 