import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimationProvider from './components/AnimationProvider';

function App() {
  return (
    <AnimationProvider>
      <div className="font-sans text-gray-800 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;