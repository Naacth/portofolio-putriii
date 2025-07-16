import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css';

function Profile() {
  return (
    <section className="profile-section" id="profile" data-aos="fade-up">
      <h2>Profil</h2>
      <div className="profile-main">
        <div className="profile-info">
          <h3>Putri Anggriyani</h3>
          <p>Mahasiswa Ilmu Komputer berpengalaman dalam pengembangan web (front-end: HTML, CSS, JavaScript; back-end: PHP, Laravel) dan pengembangan mobile (Kotlin dasar). Berpengalaman sebagai tenaga pendidik dan administrator, serta mahir dokumentasi teknis. Aktif mengikuti perkembangan teknologi modern, tertarik di bidang Web Development, Mobile Development, Data Science, dan Data Analysis.</p>
          <ul className="profile-contacts">
            <li><FaEnvelope /> putrianggriyani354@gmail.com</li>
            <li><FaPhone /> +62 812-1070-0662</li>
            <li><FaLinkedin /> <a href="https://linkedin.com/in/putri-anggriyani-pay" target="_blank" rel="noopener noreferrer">linkedin.com/in/putri-anggriyani-pay</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Profile; 