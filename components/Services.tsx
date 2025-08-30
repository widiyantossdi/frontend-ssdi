import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [isTitleInView, setIsTitleInView] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = titleRef.current;
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
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            id="services-heading" 
            className={`text-3xl font-bold text-primary ${isTitleInView ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            Layanan Kami
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Kami menyediakan berbagai layanan teknologi untuk mendukung aktivitas akademik dan operasional kampus.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;