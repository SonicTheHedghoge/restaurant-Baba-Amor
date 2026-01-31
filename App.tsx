import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiConcierge from './components/AiConcierge';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <Services />
        <Contact />
      </main>
      <AiConcierge />
      <Footer />
    </div>
  );
}

export default App;