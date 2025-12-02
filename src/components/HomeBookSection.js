import React, { useState } from 'react';
import { popularBooks } from '../mock/books';
import BookFormatModal from './BookFormatModal';

const HomeBookSection = ({ setCurrentPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (book, e) => {
    e.stopPropagation();
    if (book.formats && Object.keys(book.formats).length > 1) {
      setSelectedBook(book);
      setIsModalOpen(true);
    } else {
      window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularBooks.length);
  };

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + popularBooks.length) % popularBooks.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-indigo-50 to-gray-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900 relative overflow-hidden">
      {/* Fondo dinámico con blobs y partículas */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-15 pointer-events-none z-0">
        <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-indigo-400/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-purple-400/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        {/* Partículas */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`absolute rounded-full bg-white/10 dark:bg-white/5 blur-md animate-float${i%3+1}`} style={{
            width: `${16 + (i%4)*8}px`,
            height: `${16 + (i%4)*8}px`,
            left: `${Math.random()*90}%`,
            top: `${Math.random()*90}%`,
            animationDelay: `${i*0.7}s`
          }} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 btn-glass text-brand text-sm font-semibold rounded-full mb-4 shadow-lg">
            📚 BIBLIOTECA
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold theme-brand-text mb-4 drop-shadow-lg">
            Libros Populares
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Explora la colección de obras que han tocado miles de corazones
          </p>
        </div>
        <div className="relative flex items-center justify-center h-[420px] md:h-[440px]">
          {popularBooks.map((book, index) => {
            let positionClass = '';
            let opacityClass = '';
            let scaleClass = '';
            let zIndexClass = '';
            let blurClass = '';

            if (index === currentIndex) {
              positionClass = 'translate-x-0';
              opacityClass = 'opacity-100';
              scaleClass = 'scale-110';
              zIndexClass = 'z-20';
              blurClass = 'blur-none';
            } else if (index === (currentIndex + 1) % popularBooks.length) {
              positionClass = 'translate-x-[150%] md:translate-x-[100%]';
              opacityClass = 'opacity-60';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              blurClass = 'blur-sm';
            } else if (index === (currentIndex - 1 + popularBooks.length) % popularBooks.length) {
              positionClass = '-translate-x-[150%] md:-translate-x-[100%]';
              opacityClass = 'opacity-60';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              blurClass = 'blur-sm';
            } else {
              positionClass = 'hidden';
              opacityClass = 'opacity-0';
              scaleClass = 'scale-75';
              zIndexClass = 'z-0';
              blurClass = 'blur-lg';
            }

            return (
              <div
                key={index}
                className={`group absolute w-72 h-[410px] md:w-80 md:h-[440px] rounded-3xl shadow-2xl overflow-visible transform transition-all duration-700 ease-out ${positionClass} ${opacityClass} ${scaleClass} ${zIndexClass} ${blurClass}`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1200px'
                }}
              >
                {/* Glow animado */}
                <div className="halo-brand rounded-3xl z-0"></div>
                {/* Card */}
                <div className="absolute inset-0 surface backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden z-10">
                  {/* Portada con efecto 3D y sombra */}
                  <div className="relative w-full h-[70%] md:h-[68%] flex items-center justify-center overflow-visible">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-44 h-64 md:w-48 md:h-72 object-contain object-center drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: 'drop-shadow(0 8px 32px rgba(80,0,120,0.18))' }}
                    />
                  </div>
                  {/* Info y resumen con animación */}
                  <div className="flex flex-col items-center justify-end h-[30%] md:h-[32%] px-4 pb-6 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold text-center text-base-color mb-1 drop-shadow-sm">{book.title}</h3>
                    <p className="text-sm md:text-base text-center text-muted mb-2">{book.author}</p>
                    {/* Sin descripción en inicio, para que el título se vea claro */}
                    <button
                      onClick={(e) => handleBuyClick(book, e)}
                      className="mt-2 btn-primary px-6 py-2 rounded-full text-sm font-bold hover:scale-110 transition-all duration-300"
                    >
                      Comprar en Amazon
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevBook}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-glass text-base-color p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-30 border-theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextBook}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-glass text-base-color p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-30 border-theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="text-center mt-16">
          <button onClick={() => setCurrentPage('books')} className="px-10 py-4 btn-primary text-lg font-extrabold rounded-full transform hover:scale-110 transition-all duration-300">
            Ver todos los libros
          </button>
        </div>
      </div>
      <BookFormatModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HomeBookSection;