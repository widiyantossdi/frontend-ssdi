
import React from 'react';
import { NewsArticle } from '../types';

interface NewsDetailProps {
  article: NewsArticle;
  onGoBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ article, onGoBack }) => {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onGoBack} 
          className="mb-8 text-primary font-semibold hover:underline flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </button>

        <article>
          <div className="w-full h-64 md:h-96 rounded-lg shadow-lg mb-8 overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
            <span className="font-semibold text-secondary bg-green-100 px-3 py-1 rounded-full">{article.category}</span>
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">{article.title}</h1>
          <div 
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </article>
      </div>
    </section>
  );
};

export default NewsDetail;