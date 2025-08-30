import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

    const currentRef = imageContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-neutral" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={imageContainerRef} className="md:w-1/2 rounded-lg shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Tim SSDI" 
              className={`w-full transition-transform duration-1000 ease-out ${isInView ? 'scale-105' : 'scale-100'}`}
            />
          </div>
          <div className="md:w-1/2">
            <h2 id="about-heading" className="text-3xl font-bold text-primary mb-4">Tentang SSDI</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              UPT Sistem dan Sumber Daya Informasi (SSDI) adalah unit pusat yang bertanggung jawab atas perencanaan, pengembangan, pengelolaan, dan pemeliharaan seluruh infrastruktur dan sistem teknologi informasi di Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Visi Kami</h3>
                <p className="text-gray-600">Menjadi pusat teknologi informasi yang inovatif dan terdepan dalam mendukung tridharma perguruan tinggi dan mewujudkan smart campus.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Misi Kami</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Menyediakan layanan IT yang prima dan andal.</li>
                  <li>Mengembangkan sistem informasi yang terintegrasi.</li>
                  <li>Memastikan keamanan data dan informasi akademik.</li>
                  <li>Mendorong pemanfaatan teknologi untuk inovasi pembelajaran.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;