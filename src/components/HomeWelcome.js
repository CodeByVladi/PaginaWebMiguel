import React, { useEffect, useState } from 'react';

const HomeWelcome = ({ poetName, setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800 dark:from-gray-900 dark:via-purple-900 dark:to-black animate-gradient-shift"></div>
      
      {/* Partículas flotantes animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Efecto de luz en movimiento */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Contenido principal con parallax */}
      <div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Badge flotante */}
        <div className="inline-block mb-6 animate-bounce-slow">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 shadow-lg">
            ✨ Poesía que toca el alma
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          Bienvenido al universo poético de{' '}
          <span className="block mt-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-text-shimmer">
            {poetName}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 animate-fade-in-up animation-delay-300 font-light max-w-3xl mx-auto">
          Donde las palabras danzan, el alma encuentra su eco y cada verso abre una puerta al infinito
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={() => setCurrentPage('books')}
            className="group px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Explora sus obras</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Explora sus obras →</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('poems')}
            className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white/50 backdrop-blur-sm hover:bg-white/10 hover:border-white transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Ver poemas
          </button>
        </div>

        {/* Indicador de scroll animado */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcome;