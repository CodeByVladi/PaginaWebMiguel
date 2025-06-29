import React from 'react';

const HomeWelcome = ({ poetName, setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        {/* SVG de fondo sutil */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="15" fill="url(#gradient1)" className="animate-pulse-slow" />
          <circle cx="80" cy="40" r="20" fill="url(#gradient2)" className="animate-pulse-slow animation-delay-2000" />
          <circle cx="50" cy="70" r="10" fill="url(#gradient1)" className="animate-pulse-slow animation-delay-4000" />
        </svg>
      </div>
      <div className="relative z-10 text-center p-8 bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-xl backdrop-blur-md max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-fade-in-up">
          Bienvenido al universo poético de <span className="text-purple-600 dark:text-blue-400">{poetName}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-500">
          Donde las palabras danzan y el alma encuentra su eco.
        </p>
        <button
          onClick={() => setCurrentPage('books')}
          className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-1000"
        >
          Explora sus obras
        </button>
      </div>
    </section>
  );
};

export default HomeWelcome;