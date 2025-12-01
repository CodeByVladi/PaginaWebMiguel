import React from 'react';
import { allPoems } from '../mock/poems';

const PoemsPage = ({ setCurrentPage, setSelectedPoem }) => {
  const handleViewPoem = (poem) => {
    setSelectedPoem(poem);
    setCurrentPage('poemDetail');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-purple-950/20 dark:to-indigo-950/20 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg mb-4">
            Colección Poética
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12 animate-fade-in-up">Todos los Poemas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPoems.map((poem, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-purple-500/50 dark:hover:border-indigo-500/50 animate-fade-in-up relative overflow-hidden"
              style={{animationDelay: `${index * 100}ms`}}
              onClick={() => handleViewPoem(poem)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:to-indigo-500/5 transition-all duration-300"></div>
              <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{poem.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4 line-clamp-5">{poem.content.substring(0, 200)}...</p>
              <button
                onClick={(e) => { e.stopPropagation(); handleViewPoem(poem); }}
                className="group/btn inline-flex items-center gap-2 text-purple-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Leer poema completo
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoemsPage;