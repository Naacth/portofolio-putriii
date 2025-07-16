import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Projects.css';

const projects = [
  {
    image: '/images/digitalbanking.jpg',
    title: 'Website Digital Banking (Laravel)',
    description: 'Final Project: Website Digital Banking berbasis Laravel.'
  },
  {
    image: '/images/mlsampah.jpg',
    title: 'Tempat Sampah Otomatis (IoT + ML)',
    description: 'ESP32 cam, sensor IR, dan Machine Learning untuk klasifikasi sampah organik & non-organik.'
  },
  {
    image: '/images/kominfo.jpg',
    title: 'Program Digitalisasi Masyarakat (Kominfo)',
    description: 'Membuat & melaksanakan program kerja digitalisasi untuk masyarakat.'
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projek</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx} data-aos="zoom-in-up">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 