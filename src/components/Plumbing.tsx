import React, { FC } from 'react';
import img1 from '../assets/fix1.webp';
import img2 from '../assets/fix2.webp';
import img3 from '../assets/fix3.webp';
import img4 from '../assets/fix4.webp';

const Plumbing: FC = () => {
  return (
    <section id="plumbing" className="py-5 text-white" style={{ backgroundColor: '#004080' }}>
      <div className="container">
        <h2 className="mb-4">Plumbing Services</h2>
        <div className="row g-3">
          {[img1, img2, img3, img4].map((img, index) => (
            <div className="col-6 col-md-3" key={index}>
              <img src={img} className="img-fluid" alt={`Thumb ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plumbing;
