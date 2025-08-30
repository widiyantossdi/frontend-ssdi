import React, { useState, useEffect, useRef } from 'react';
import { NEWS_ARTICLES } from '../constants';

interface NewsProps {
  onSelectArticle: (slug: string) => void;
}

const News: React.FC<NewsProps> = ({ onSelectArticle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState(new Set([0]));
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

  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' style='background-color:%23F3F4F6'%3E%3C/svg%3E";

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? NEWS_ARTICLES.length - 1 : currentIndex - 1;
    setLoadedIndexes(prev => new Set(prev).add(newIndex));
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === NEWS_ARTICLES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setLoadedIndexes(prev => new Set(prev).add(newIndex));
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setLoadedIndexes(prev => new Set(prev).add(slideIndex));
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="news" className="py-20 bg-neutral" aria-labelledby="news-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            id="news-heading" 
            className={`text-3xl font-bold text-primary ${isTitleInView ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            Berita & Pengumuman
          </h2>
          <p className="text-gray-600 mt-2">Informasi terkini seputar layanan dan sistem di SSDI.</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative group" role="region" aria-roledescription="carousel" aria-label="Berita dan Pengumuman">
          <div className="relative overflow-hidden w-full h-[28rem]">
            <div
              className="flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {NEWS_ARTICLES.map((article, index) => (
                <div key={article.slug} className="w-full flex-shrink-0 h-full" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${NEWS_ARTICLES.length}`} aria-hidden={currentIndex !== index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full mx-2">
                    <div className="overflow-hidden h-56 bg-neutral">
                      <img 
                        src={loadedIndexes.has(index) ? article.imageUrl : placeholderImage} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-secondary">{article.category}</span>
                          <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-dark mb-2 flex-grow">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      <a href="#" onClick={(e) => { e.preventDefault(); onSelectArticle(article.slug); }} className="mt-auto text-primary font-semibold hover:underline">Baca Selengkapnya &rarr;</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
              Menampilkan berita {currentIndex + 1} dari {NEWS_ARTICLES.length}: {NEWS_ARTICLES[currentIndex].title}
          </div>
          
          {/* Left Arrow */}
          <button onClick={prevSlide} aria-label="Previous slide" className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 p-3 bg-white/70 hover:bg-white rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button onClick={nextSlide} aria-label="Next slide" className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 p-3 bg-white/70 hover:bg-white rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center pt-6" role="tablist" aria-label="Carousel Navigation">
             {NEWS_ARTICLES.map((_, slideIndex) => (
               <button
                 key={slideIndex}
                 onClick={() => goToSlide(slideIndex)}
                 role="tab"
                 aria-selected={currentIndex === slideIndex}
                 aria-label={`Go to slide ${slideIndex + 1}`}
                 className={`h-2 w-2 rounded-full mx-1.5 transition-all duration-300 focus:outline-none ${currentIndex === slideIndex ? 'w-4 bg-primary' : 'bg-gray-400'}`}
               ></button>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default News;