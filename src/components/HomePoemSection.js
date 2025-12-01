import React, { useState } from 'react';
import { featuredPoems } from '../mock/poems';

const HomePoemSection = ({ setCurrentPage, setSelectedPoem }) => {
  const [current, setCurrent] = useState(0);
  const handleViewPoem = (poem) => {
    setSelectedPoem(poem);
    setCurrentPage('poemDetail');
  };

  const next = () => setCurrent((prev) => (prev + 1) % featuredPoems.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredPoems.length) % featuredPoems.length);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header con animación */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full mb-4">
            📖 DESTACADOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Poemas Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Sumérgete en la profundidad de las palabras y deja que cada verso toque tu corazón
          </p>
        </div>

        {/* Modo móvil: carrusel de 1 poema con flechas */}
        <div className="block md:hidden">
          <div
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 cursor-pointer animate-fade-in-up"
            onClick={() => handleViewPoem(featuredPoems[current])}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white dark:bg-gray-800 m-[2px] rounded-2xl p-6">
              <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {current + 1}/{featuredPoems.length}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 pr-12">
                {featuredPoems[current].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-5 line-clamp-4 leading-relaxed">
                {featuredPoems[current].content.substring(0, 200)}...
              </p>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="px-4 py-2 rounded-full border border-purple-300 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
                >
                  ←
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleViewPoem(featuredPoems[current]); }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold"
                >
                  Leer más
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="px-4 py-2 rounded-full border border-purple-300 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modo escritorio: grid intacto */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPoems.map((poem, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleViewPoem(poem)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 m-[2px] rounded-2xl p-8 h-full">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pr-12 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 line-clamp-4 leading-relaxed">
                  {poem.content.substring(0, 200)}...
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleViewPoem(poem); }}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Leer más
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón CTA mejorado */}
        <div className="text-center mt-16">
          <button
            onClick={() => setCurrentPage('poems')}
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Ver todos los poemas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePoemSection;