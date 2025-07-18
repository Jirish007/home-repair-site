import React from 'react';
import heroImg from '../assets/lady.webp'; // replace with your image path

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center text-white" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '70vh' }}>
      <div className="container d-flex justify-content-between align-items-center flex-wrap py-5">
        <div className="text-start">
          <h2>House Repair <strong>SERVICES</strong></h2>
          <div className="d-flex gap-4 mt-3">
            <div><i className="bi bi-brush"></i> Painting</div>
            <div><i className="bi bi-bucket"></i> Cleaning</div>
            <div><i className="bi bi-droplet"></i> Plumbing</div>
          </div>
        </div>
      
      </div>
    </section>
  );
}