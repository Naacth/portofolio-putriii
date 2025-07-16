import React from 'react';
import { FaChalkboardTeacher, FaStore, FaCashRegister, FaBuilding } from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Experience.css';

const experiences = [
  {
    icon: <FaChalkboardTeacher className="exp-icon" />,
    image: '/images/ngajar1.jpg',
    title: 'Guru, SDIT AL-HIKMAH (Yayasan Bani Adna)',
    date: 'Agustus 2023 – Mei 2025',
    details: [
      'Menyusun dan menyampaikan RPP untuk siswa SD',
      'Meningkatkan keterlibatan kelas dan hasil belajar',
      'Membimbing siswa dalam kegiatan akademik dan non-akademik',
      'Berkomunikasi efektif dengan orang tua/wali murid',
      'Mengelola kelas dengan disiplin positif dan inklusif',
      'Menggunakan teknologi pendidikan untuk pembelajaran'
    ]
  },
  {
    icon: <FaBuilding className="exp-icon" />,
    image: '/images/magang1.jpg',
    title: 'Magang, Dinas Komunikasi dan Informatika (Kominfo)',
    date: 'Oktober 2024 – Desember 2024',
    details: [
      'Membantu dalam menyusun, mengolah, dan menyebarluaskan informasi program kerja pemerintah daerah',
      'Mengelola media sosial KIM',
      'Berperan dalam penyuluhan literasi digital',
      'Membuat dan melaksanakan program kerja digitalisasi'
    ]
  },
  {
    icon: <FaStore className="exp-icon" />,
    image: null,
    title: 'Kasir, Darfalmart Store',
    date: 'Agustus 2022 – Mei 2023',
    details: [
      'Melayanin transaksi pembayaran tunai/non-tunai',
      'Mengoperasikan mesin kasir (POS system)',
      'Mengecek stok barang dan membantu restock',
      'Memberikan pelayanan ramah',
      'Membantu pembersihan dan penataan toko',
      'Melakukan tutup kasir dan rekonsiliasi harian'
    ]
  },
  {
    icon: <FaCashRegister className="exp-icon" />,
    image: '/images/laundry1.jpg',
    title: 'Kasir Administrasi, Laodra Laundry',
    date: 'Oktober 2021 – April 2022',
    details: [
      'Meningkatkan efisiensi pelacakan pesanan hingga 30%',
      'Melayani transaksi, pencatatan pesanan, dan pembayaran',
      'Memberikan informasi layanan & penanganan komplain',
      'Mengelola administrasi dan laporan keuangan harian',
      'Memastikan proses laundry sesuai jadwal',
      'Menjaga kerapian area pelayanan'
    ]
  }
];

function Experience() {
  return (
    <section className="experience-section" id="experience" data-aos="fade-up">
      <h2>Pengalaman Kerja</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-card" key={idx} data-aos="zoom-in-up">
            {exp.image ? (
              <div className="exp-image">
                <img src={exp.image} alt={exp.title} />
              </div>
            ) : null}
            <div className="exp-content">
              {exp.icon}
              <div>
                <h3>{exp.title}</h3>
                <span>{exp.date}</span>
                <ul>
                  {exp.details.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 