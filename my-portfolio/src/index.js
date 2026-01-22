import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🔥 Scroll reveal animation for all pages
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Run once on load also
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

reportWebVitals();
