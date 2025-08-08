import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="text-center py-5 bg-light">
      <h5 className="fw-bold">Get your 'TO DO' list completed by a real professional!</h5>
      <p>
        We're on a mission to help build long-lasting brands that define an industry through thoughtful design.
      </p>
      <div>
        <button className="btn btn-danger mx-2">Book Now</button>
        <button className="btn btn-outline-secondary">Call Us</button>
      </div>
    </footer>
  );
};

export default Footer;
