import React from "react";

const HomeVideosCTA = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* Fondo animado con formas */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-red-400 dark:from-cyan-500 dark:to-blue-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-300 to-orange-300 dark:from-blue-500 dark:to-cyan-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-orange-300/30 dark:bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-red-300/30 dark:bg-indigo-400/20 rounded-full blur-2xl animate-float2"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-pink-300/30 dark:bg-purple-400/20 rounded-full blur-xl animate-float3"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge mejorado */}
        <div className="inline-block mb-6 animate-bounce-slow">
          <span className="inline-flex items-center gap-2 px-6 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Momentos en video
          </span>
        </div>

        {/* Título épico */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display mb-6 animate-fade-in-up">
          <span className="block theme-brand-text drop-shadow-lg">
            ¿Quieres sentir los versos
          </span>
          <span
            className="block mt-2 text-5xl sm:text-6xl md:text-7xl theme-brand-text drop-shadow-xl animate-text-shimmer"
            style={{ backgroundSize: "200% auto" }}
          >
            en voz viva?
          </span>
        </h2>

        {/* Descripción mejorada */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Descubre recitaciones, presentaciones y fragmentos que dan vida a la
          poesía.
          <span className="block mt-2 text-base md:text-lg text-muted">
            Sumérgete en la magia de las palabras pronunciadas con pasión y
            sentimiento.
          </span>
        </p>

        {/* Botón épico */}
        <div
          className="relative inline-block group animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          {/* Halo del botón */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>

          {/* Botón principal */}
          <button
            onClick={() => setCurrentPage("videos")}
            className="relative px-10 py-4 btn-primary text-white text-lg font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ver Videos
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Iconos decorativos flotantes */}
        <div
          className="mt-12 flex justify-center gap-8 opacity-40 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <div className="transform hover:scale-125 hover:opacity-100 transition-all duration-300">
            <svg
              className="w-8 h-8 theme-brand-text"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <div className="transform hover:scale-125 hover:opacity-100 transition-all duration-300 animation-delay-150">
            <svg
              className="w-8 h-8 theme-brand-text"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
          <div className="transform hover:scale-125 hover:opacity-100 transition-all duration-300 animation-delay-300">
            <svg
              className="w-8 h-8 theme-brand-text"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideosCTA;
