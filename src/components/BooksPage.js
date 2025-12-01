import React, { useState } from 'react';
import { allBooks } from '../mock/books';

// NOTA: Si los libros tienen un campo "year" o "published", usarlo para ordenar por fecha. Si no, se puede agregar después.
const BooksPage = () => {
  const [sortOption, setSortOption] = useState('az');

  // Si los libros tienen un campo "year" o "published", usarlo. Si no, solo ordenar por título.
  const getSortedBooks = () => {
    let books = [...allBooks];
    switch (sortOption) {
      case 'az':
        books.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
        break;
      case 'za':
        books.sort((a, b) => b.title.localeCompare(a.title, 'es', { sensitivity: 'base' }));
        break;
      case 'newest':
        books.sort((a, b) => {
          // Si ambos tienen published, comparar fechas completas descendente
          if (a.published && b.published) return b.published.localeCompare(a.published);
          if (b.published && !a.published) return 1;
          if (a.published && !b.published) return -1;
          return 0;
        });
        break;
      case 'oldest':
        books.sort((a, b) => {
          if (a.published && b.published) return a.published.localeCompare(b.published);
          if (a.published && !b.published) return -1;
          if (b.published && !a.published) return 1;
          return 0;
        });
        break;
      default:
        break;
    }
    return books;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/30 dark:to-purple-950/30 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in gap-4">
          <div className="text-center md:text-left">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg mb-2">
              Biblioteca Completa
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">Todos los Libros</h2>
          </div>
          <div className="flex justify-center md:justify-end">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/60 px-4 py-2 rounded-full shadow border border-indigo-100 dark:border-gray-700">
              Ordenar por:
              <select
                className="ml-2 bg-transparent outline-none text-indigo-700 dark:text-purple-300 font-semibold"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value="az">Título (A-Z)</option>
                <option value="za">Título (Z-A)</option>
                <option value="newest">Más nuevo primero</option>
                <option value="oldest">Más viejo primero</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getSortedBooks().map((book, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-indigo-500/50 dark:hover:border-purple-500/50 animate-fade-in-up"
              style={{animationDelay: `${index * 100}ms`, transformStyle: 'preserve-3d', perspective: '1000px'}}
            >
              <div className="w-full h-72 flex items-center justify-center overflow-hidden relative group/image">
                {/* Fondo degradado animado y glow */}
                <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-2xl group-hover/image:blur-3xl transition-all duration-500"></div>
                {/* Glow animado al hacer hover */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-pulse-slow rounded-xl"></div>
                </div>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="relative z-20 max-h-full max-w-full object-contain object-center drop-shadow-xl group-hover/image:scale-105 group-hover/image:drop-shadow-2xl transition-all duration-500"
                  style={{ background: 'transparent' }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{book.author}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{book.summary}</p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  Comprar en Amazon
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksPage;