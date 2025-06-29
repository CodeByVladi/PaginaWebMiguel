import React, { useState } from 'react';
import { popularBooks } from '../mock/books';

const HomeBookSection = ({ setCurrentPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularBooks.length);
  };

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + popularBooks.length) % popularBooks.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Libros Populares</h2>
        <div className="relative flex items-center justify-center h-[400px]">
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
              opacityClass = 'opacity-70';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              blurClass = 'blur-sm';
            } else if (index === (currentIndex - 1 + popularBooks.length) % popularBooks.length) {
              positionClass = '-translate-x-[150%] md:-translate-x-[100%]';
              opacityClass = 'opacity-70';
              scaleClass = 'scale-90';
              zIndexClass = 'z-10';
              blurClass = 'blur-sm';
            } else {
              positionClass = 'hidden'; // Oculta los demás libros
              opacityClass = 'opacity-0';
              scaleClass = 'scale-75';
              zIndexClass = 'z-0';
              blurClass = 'blur-lg';
            }

            return (
              <div
                key={index}
                className={`absolute w-64 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out ${positionClass} ${opacityClass} ${scaleClass} ${zIndexClass} ${blurClass}`}
              >
                <img
                  src={book.cover} // Aquí se usará la imagen que tu papá suba
                  alt={book.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-center mb-2">{book.title}</h3>
                  <p className="text-sm text-center mb-4">{book.author}</p>
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Comprar en Amazon
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevBook}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 dark:bg-gray-200/50 text-white dark:text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors z-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextBook}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 dark:bg-gray-200/50 text-white dark:text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors z-30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('books')}
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Ver todos los libros
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBookSection;