import React, { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Plumbing = lazy(() => import('./components/Plumbing'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <Navbar />
      <Hero />
      <Services />
      <Plumbing />
      <Footer />
    </Suspense>
  );
}

export default App;
