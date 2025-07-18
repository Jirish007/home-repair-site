import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">REPAIR-IT!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#plumbing">Plumbing</a></li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}