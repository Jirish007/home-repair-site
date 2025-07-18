import React from 'react';
import img1 from '../assets/fix1.webp';
import img2 from '../assets/fix2.webp';

export default function Services() {
  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <h3>How Can We Help You?</h3>
        <p>We specialize in plumbing, maintenance, and emergency repair. Call us today to learn how simple our process is!</p>
        <a href="#" className="btn btn-danger">Book Now</a>

        <div className="row mt-5">
          <div className="col-md-6">
            <img src={img1} alt="Plumber" className="img-fluid mb-2" />
            <p>By planning ahead, you can avoid stress. Our services are trusted throughout Johannesburg.</p>
          </div>
          <div className="col-md-6">
            <img src={img2} alt="Repair" className="img-fluid mb-2" />
            <h5>Need Help Right Away?</h5>
            <p>Call us now: <strong className="text-danger">0607173434</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}