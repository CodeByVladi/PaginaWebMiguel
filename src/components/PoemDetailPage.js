import React from 'react';

const PoemDetailPage = ({ poem, setCurrentPage }) => {
  if (!poem) {
    return (
      <section className="py-16 bg-white dark:bg-gray-800 min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-gray-700 dark:text-gray-300">
          <p className="text-xl mb-4">Poema no encontrado.</p>
          <button
            onClick={() => setCurrentPage('poems')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Volver a Poemas
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800 min-h-screen pt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <button
          onClick={() => setCurrentPage('poems')}
          className="mb-8 flex items-center text-purple-600 dark:text-blue-400 hover:underline transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a todos los poemas
        </button>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">{poem.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
            {poem.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoemDetailPage;