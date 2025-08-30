
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-dark font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <News />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;