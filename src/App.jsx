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
    <div className="relative min-h-screen flex flex-col">
      {/* 1. Background Overlays (Behind all sections, zIndex: 1) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Animated Cairo night light rays */}
        <div className="light-ray-overlay" />
        <div className="light-ray-overlay-2" />
      </div>

      {/* 2. Foreground Overlays (Floating directly over all content, zIndex: 12) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 12 }}>
        {/* Floating lanterns & ember sparks in the foreground */}
        <LanternOverlay />
        <GlowingParticles />
      </div>

      {/* Navigation Header (zIndex: 50) */}
      <Navbar />

      {/* Page Sections (zIndex: 10) */}
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
