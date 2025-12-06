import React, { useState } from "react";
import { featuredPoems } from "../mock/poems";

const HomePoemSection = ({ setCurrentPage, setSelectedPoem }) => {
  const [current, setCurrent] = useState(0);
  const handleViewPoem = (poem) => {
    setSelectedPoem(poem);
    setCurrentPage("poemDetail");
  };

  const next = () => setCurrent((prev) => (prev + 1) % featuredPoems.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + featuredPoems.length) % featuredPoems.length
    );

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      {/* Fondo animado épico */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 dark:from-cyan-500 dark:to-blue-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-400 to-pink-400 dark:from-indigo-500 dark:to-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-300 to-red-300 dark:from-purple-500 dark:to-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-300/20 dark:bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-1/3 right-16 w-40 h-40 bg-red-300/20 dark:bg-indigo-400/20 rounded-full blur-2xl animate-float2"></div>
      <div className="absolute top-2/3 left-1/4 w-28 h-28 bg-amber-300/20 dark:bg-purple-400/20 rounded-full blur-xl animate-float3"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 animate-bounce-slow">
            <span className="inline-flex items-center gap-2 px-6 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30 hover:scale-110 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
              DESTACADOS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
            <span className="block theme-brand-text drop-shadow-lg">
              Poesía que toca
            </span>
            <span
              className="block mt-2 text-6xl md:text-7xl theme-brand-text drop-shadow-xl animate-text-shimmer"
              style={{ backgroundSize: "200% auto" }}
            >
              el alma
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Sumérgete en la profundidad de las palabras y deja que cada verso
            toque tu corazón
          </p>
        </div>

        {/* Modo móvil: carrusel de 1 poema con flechas */}
        <div className="block md:hidden">
          <div
            className="group relative rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 cursor-pointer animate-fade-in-up"
            onClick={() => handleViewPoem(featuredPoems[current])}
          >
            <div className="halo-brand"></div>
            <div className="absolute inset-0 theme-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"></div>
            <div className="relative surface m-[2px] rounded-2xl p-6">
              <div className="absolute top-4 right-4 w-10 h-10 theme-brand rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {current + 1}/{featuredPoems.length}
              </div>
              <h3 className="text-xl font-bold text-base-color mb-3 pr-12 group-hover:text-brand transition-colors duration-300">
                {featuredPoems[current].title}
              </h3>
              <p className="text-muted italic mb-5 line-clamp-4 leading-relaxed">
                {featuredPoems[current].content.substring(0, 200)}...
              </p>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="px-4 py-2 rounded-full btn-glass"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewPoem(featuredPoems[current]);
                  }}
                  className="px-6 py-2 btn-primary text-white rounded-full font-semibold"
                >
                  Leer más
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="px-4 py-2 rounded-full btn-glass"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modo escritorio: grid mejorado */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPoems.map((poem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-visible transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleViewPoem(poem)}
            >
              {/* Halo exterior brillante */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 animate-pulse-slow"></div>

              {/* Tarjeta principal */}
              <div className="relative surface backdrop-blur-xl rounded-2xl p-8 h-full shadow-xl border-2 border-orange-200/50 dark:border-cyan-400/30 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/70 transition-all duration-500">
                {/* Badge numerado */}
                <div className="absolute top-4 right-4 w-12 h-12 theme-brand rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {index + 1}
                </div>

                {/* Ícono decorativo */}
                <div className="mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 theme-brand-text"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-base-color mb-4 pr-12 group-hover:theme-brand-text transition-all duration-300 leading-tight">
                  {poem.title}
                </h3>

                {/* Línea decorativa */}
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 dark:from-cyan-400 dark:to-indigo-400 mb-4 group-hover:w-24 transition-all duration-300"></div>

                {/* Contenido */}
                <p className="text-muted italic mb-6 line-clamp-4 leading-relaxed group-hover:text-base-color transition-colors duration-300">
                  {poem.content.substring(0, 200)}...
                </p>

                {/* Botón */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewPoem(poem);
                  }}
                  className="inline-flex items-center gap-2 theme-brand-text font-bold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Leer más
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
            </div>
          ))}
        </div>

        {/* Botón CTA épico */}
        <div className="text-center mt-16">
          <div
            className="relative inline-block group animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            {/* Halo del botón */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>

            {/* Botón principal */}
            <button
              onClick={() => setCurrentPage("poems")}
              className="relative px-10 py-4 btn-primary text-white text-lg font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
              Ver todos los poemas
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
        </div>
      </div>
    </section>
  );
};

export default HomePoemSection;
