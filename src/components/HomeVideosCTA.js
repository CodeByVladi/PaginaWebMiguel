import React from 'react';

const HomeVideosCTA = ({ setCurrentPage }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4">
          🎬 Momentos en video
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¿Quieres sentir los versos en voz viva?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Descubre recitaciones, presentaciones y fragmentos que dan vida a la poesía.
        </p>
        <button
          onClick={() => setCurrentPage('videos')}
          className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transition-transform"
        >
          Ir a Videos →
        </button>
      </div>
    </section>
  );
};

export default HomeVideosCTA;
