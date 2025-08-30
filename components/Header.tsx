
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Berita', href: '#news' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-bold text-primary relative inline-block overflow-hidden animate-shimmer">
            SSDI
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)} 
                className={`text-gray-600 hover:text-primary transition duration-300 font-medium ${isScrolled ? 'text-dark' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? 'text-dark' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)} 
              className="text-dark hover:text-primary transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;