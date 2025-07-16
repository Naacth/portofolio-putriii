import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import 'aos/dist/aos.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo Putri! Saya ingin menghubungi kamu.

Nama: ${formData.name}
Email: ${formData.email}
Pesan: ${formData.message}

*Pesan dari website portofolio*`;

    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/6281210700662?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <h2>Kontak</h2>
      <div className="contact-info">
        <ul>
          <li><FaEnvelope /> putrianggriyani354@gmail.com</li>
          <li><FaPhone /> +62 812-1070-0662</li>
          <li><FaLinkedin /> <a href="https://linkedin.com/in/putri-anggriyani-pay" target="_blank" rel="noopener noreferrer">linkedin.com/in/putri-anggriyani-pay</a></li>
          <li><FaWhatsapp /> <a href="https://wa.me/6281210700662" target="_blank" rel="noopener noreferrer">WhatsApp: +62 812-1070-0662</a></li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Nama" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message"
          placeholder="Pesan" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Kirim ke WhatsApp</button>
      </form>
    </section>
  );
}

export default Contact; 