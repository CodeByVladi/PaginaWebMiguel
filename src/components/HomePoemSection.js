import React from 'react';
import { featuredPoems } from '../mock/poems';

const HomePoemSection = ({ setCurrentPage, setSelectedPoem }) => {
  const handleViewPoem = (poem) => {
    setSelectedPoem(poem);
    setCurrentPage('poemDetail');
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Poemas Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPoems.map((poem, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleViewPoem(poem)}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{poem.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4 line-clamp-4">{poem.content.substring(0, 200)}...</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleViewPoem(poem); }}
                className="text-purple-600 dark:text-blue-400 hover:underline font-medium"
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('poems')}
            className="px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Ver todos los poemas
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePoemSection;