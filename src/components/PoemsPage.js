import React from 'react';
import { allPoems } from '../mock/poems';

const PoemsPage = ({ setCurrentPage, setSelectedPoem }) => {
  const handleViewPoem = (poem) => {
    setSelectedPoem(poem);
    setCurrentPage('poemDetail');
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Todos los Poemas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPoems.map((poem, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => handleViewPoem(poem)}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{poem.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4 line-clamp-5">{poem.content.substring(0, 200)}...</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleViewPoem(poem); }}
                className="text-purple-600 dark:text-blue-400 hover:underline font-medium"
              >
                Leer poema completo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoemsPage;