import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Kami', href: '#about' },
    { 
      name: 'Layanan', 
      href: '#services',
      submenu: [
        { name: 'Layanan Email', href: 'https://email.unugha.ac.id/' },
        { name: 'Layanan Wifi', href: 'https://wifi.unugha.ac.id/' },
        { name: 'Layanan Pelatihan SDM', href: 'https://hris.unugha.ac.id' },
        { name: 'Layanan Dokumen', href: 'https://simpan.unugha.ac.id/' },
        { name: 'Layanan Helpdesk', href: 'https://help.unugha.ac.id/' },
        { name: 'Layanan Peminjaman', href: 'https://spjm.unugha.ac.id' }
      ]
    },
    { name: 'Berita', href: '#news' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    }
  };

  const linkBaseClasses = `font-medium transition-colors duration-300`;
  const scrolledLinkClasses = `text-primary hover:text-secondary`;
  const unscrolledLinkClasses = `text-white text-shadow hover:text-neutral-200`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className={`text-2xl font-bold relative inline-block overflow-hidden animate-shimmer transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white text-shadow'}`}>
            SSDI
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.name} className="relative group">
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`${linkBaseClasses} ${isScrolled ? scrolledLinkClasses : unscrolledLinkClasses} flex items-center cursor-pointer`}
                  >
                    {link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                    <div className="py-2">
                    {link.submenu.map(subLink => (
                      <a 
                        key={subLink.name} 
                        href={subLink.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block px-4 py-2 text-sm text-dark hover:bg-neutral hover:text-primary"
                      >
                        {subLink.name}
                      </a>
                    ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)} 
                  className={`${linkBaseClasses} ${isScrolled ? scrolledLinkClasses : unscrolledLinkClasses}`}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white text-shadow'}`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="flex flex-col items-center space-y-1 py-4">
          {navLinks.map((link) => (
             link.submenu ? (
              <div key={link.name} className="w-full text-center">
                <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-dark hover:text-primary transition duration-300 font-medium py-3 flex justify-center items-center"
                    aria-expanded={isServicesOpen}
                >
                    {link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-neutral/50 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col items-center py-2 space-y-1">
                        {link.submenu.map(subLink => (
                             <a 
                                key={subLink.name} 
                                href={subLink.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full text-dark hover:text-primary transition duration-300 font-medium py-2"
                            >
                                {subLink.name}
                            </a>
                        ))}
                    </div>
                </div>
              </div>
            ) : (
                <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)} 
                className="w-full text-center text-dark hover:text-primary transition duration-300 font-medium py-3"
                >
                {link.name}
                </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;