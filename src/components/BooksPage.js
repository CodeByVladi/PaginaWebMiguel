import React from 'react';
import { allBooks } from '../mock/books';

const BooksPage = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Todos los Libros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allBooks.map((book, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={book.cover} // Aquí se usará la imagen que tu papá suba
                alt={book.title}
                className="w-full h-72 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{book.author}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">{book.summary}</p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Comprar en Amazon
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