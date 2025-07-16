import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './components/Navbar.css';
import './components/Projects.css';
import './components/Profile.css';
import './components/Education.css';
import './components/Experience.css';
import './components/Skills.css';
import './components/Certifications.css';
import './components/Contact.css';
import './components/Footer.css';
import './components/Hero.css';
import './components/About.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
