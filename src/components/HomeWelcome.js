import React, { useEffect, useRef, useState } from 'react';

const HomeWelcome = ({ poetName, setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [lightVideoReady, setLightVideoReady] = useState(false);
  const [darkVideoReady, setDarkVideoReady] = useState(false);
  const lightVideoRef = useRef(null);
  const darkVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fuentes de video libres (Pixabay) para atardecer con olas
  const lightVideoSources = [
    'https://cdn.pixabay.com/video/2024/03/14/204172-923594153_large.mp4', // Sea, Ocean, Sunset, Beach, Sky
    'https://cdn.pixabay.com/video/2023/11/29/191349-890134711_large.mp4', // Ocean sunset
    'https://cdn.pixabay.com/video/2019/01/04/20454-309694522_large.mp4'   // Sunset, sea, sun
  ];

  // Fuentes de video para modo oscuro: mar nocturno con luna/olas
  const darkVideoSources = [
    '/videos/dark-calm-night.mp4',      // Olas tranquilas bajo luna llena
    '/videos/dark-starry-ocean.mp4',    // Océano nocturno con cielo estrellado
    '/videos/dark-ocean-stars.mp4',     // Olas suaves con estrellas
    'https://cdn.pixabay.com/video/2020/10/15/52428-468806565_large.mp4', // Ocean, Night, Stars, Loop
    'https://cdn.pixabay.com/video/2025/05/07/277372_large.mp4'           // Ocean, Sea, Waves, Starry Sky
  ];

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Fondo de video atardecer para light mode */}
      <div className="absolute inset-0 dark:hidden">
        {/* Fallback/base: degradado cálido por si el video tarda */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-600"></div>

        {/* Video a pantalla completa */}
        <video
          ref={lightVideoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={() => {
            if (lightVideoRef.current) lightVideoRef.current.playbackRate = 0.6; // nubes/olas más lentas
          }}
          onCanPlay={() => setLightVideoReady(true)}
          style={{ opacity: lightVideoReady ? 1 : 0 }}
        >
          {lightVideoSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Overlay para contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/35"></div>
      </div>

      {/* Video mar nocturno para dark mode */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Fallback/base: degradado frío por si el video tarda */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-blue-950"></div>

        {/* Video a pantalla completa */}
        <video
          ref={darkVideoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={() => {
            if (darkVideoRef.current) darkVideoRef.current.playbackRate = 0.6; // olas lentas
          }}
          onCanPlay={() => setDarkVideoReady(true)}
          style={{ opacity: darkVideoReady ? 1 : 0 }}
        >
          {darkVideoSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Overlay para contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/45"></div>
      </div>

      {/* Contenido principal con parallax (desactivado en móvil para mejor rendimiento) */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        style={{ transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.5}px)` : 'none' }}
      >
        {/* Badge flotante */}
        <div className="inline-block mb-4 sm:mb-6 animate-bounce-slow">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 btn-glass text-gray-900 dark:text-white text-xs sm:text-sm font-medium rounded-full border border-gray-900/30 dark:border-white/30 shadow-lg shadow-orange-500/30 dark:shadow-orange-500/30">
            ✨ Poesía que toca el alma
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up drop-shadow-2xl">
          <span className="block sm:inline">Bienvenido al universo poético de</span>{' '}
          <span className="block mt-2 theme-brand-text animate-text-shimmer">
            {poetName}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white drop-shadow-lg mb-8 sm:mb-12 animate-fade-in-up animation-delay-300 font-light max-w-3xl mx-auto px-2">
          Donde las palabras danzan, el alma encuentra su eco y cada verso abre una puerta al infinito
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up animation-delay-600 px-4">
          <button
            onClick={() => setCurrentPage('books')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 btn-primary text-base sm:text-lg font-semibold relative overflow-hidden"
          >
            <span className="relative z-10">Explora sus obras →</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('poems')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 btn-glass text-white text-base sm:text-lg font-semibold rounded-full border-2 border-white/60 hover:bg-white/20 hover:border-white transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/20"
          >
            Ver poemas
          </button>
        </div>

        {/* Indicador de scroll animado (oculto en móvil pequeño) */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcome;