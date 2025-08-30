
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import NewsDetail from './components/NewsDetail';
import { NEWS_ARTICLES } from './constants';

const App: React.FC = () => {
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  const handleSelectArticle = (slug: string) => {
    setSelectedArticleSlug(slug);
  };

  const handleGoHome = () => {
    setSelectedArticleSlug(null);
  };

  useEffect(() => {
    if (selectedArticleSlug) {
      window.scrollTo(0, 0);
    }
  }, [selectedArticleSlug]);

  const selectedArticle = selectedArticleSlug 
    ? NEWS_ARTICLES.find(article => article.slug === selectedArticleSlug) 
    : undefined;

  return (
    <div className="bg-white text-dark font-sans">
      <Header onGoHome={handleGoHome} />
      <main>
        {selectedArticle ? (
          <NewsDetail article={selectedArticle} onGoBack={handleGoHome} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <News onSelectArticle={handleSelectArticle} />
            <Faq />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
