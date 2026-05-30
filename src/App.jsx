import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Signature from './components/Signature';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanternOverlay } from './components/LanternOverlay';
import GlowingParticles from './components/GlowingParticles';

function App() {
  return (
    <div className="relative min-h-screen bg-color-bg-darker text-color-text-muted flex flex-col">
      {/* Immersive Background Overlays */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <LanternOverlay />
        <GlowingParticles />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-grow relative" style={{ zIndex: 10 }}>
        <Hero />
        <About />
        <Menu />
        <Signature />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

export default App;
