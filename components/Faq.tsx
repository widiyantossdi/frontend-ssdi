
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FaqItem } from '../types';

interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ item, isOpen, onClick, index }) => {
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="border-b border-gray-200">
      <button
        id={questionId}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-medium text-dark">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) {
      return FAQ_ITEMS;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return FAQ_ITEMS.filter(item =>
      item.question.toLowerCase().includes(lowercasedTerm) ||
      item.answer.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            id="faq-heading" 
            className={`text-3xl font-bold text-primary ${isTitleInView ? 'animate-fadeInUp' : 'opacity-0'}`}
          >
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-gray-600 mt-2">Temukan jawaban cepat untuk pertanyaan yang sering diajukan.</p>
        </div>

        <div className="mb-8 max-w-xl mx-auto">
            <label htmlFor="faq-search" className="sr-only">Cari Pertanyaan</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    type="search"
                    id="faq-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Ketik untuk mencari di pertanyaan..."
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                />
            </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <FaqItemComponent
                key={index}
                index={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              <p>Tidak ada hasil yang ditemukan untuk pencarian Anda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
