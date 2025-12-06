import React, { useState, useEffect } from "react";
import { allPoems } from "../mock/poems";

const DailyInspiration = () => {
  const [dailyPoem, setDailyPoem] = useState(null);

  useEffect(() => {
    // Selecciona un poema aleatorio para la inspiración diaria
    const randomIndex = Math.floor(Math.random() * allPoems.length);
    setDailyPoem(allPoems[randomIndex]);
  }, []);

  if (!dailyPoem) {
    return null; // No renderiza nada si no hay poema
  }

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 dark:from-indigo-950 dark:via-purple-900 dark:to-fuchsia-900 text-white relative overflow-hidden">
      {/* Fondo animado con múltiples capas */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes mejoradas */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-20 right-16 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-float2"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float3"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-white/12 rounded-full blur-2xl animate-float1"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Destellos de luz */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge mejorado */}
        <div className="inline-block mb-8 animate-bounce-slow">
          <span className="px-6 py-3 bg-white/25 backdrop-blur-md rounded-full text-sm font-bold shadow-2xl border-2 border-white/40 hover:bg-white/30 transition-all duration-300 hover:scale-110">
            ✨ Inspiración del Día ✨
          </span>
        </div>

        {/* Título con efecto shimmer */}
        <h2
          className="text-6xl md:text-7xl font-extrabold mb-12 animate-text-shimmer bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl"
          style={{ backgroundSize: "200% auto" }}
        >
          Inspiración Diaria
        </h2>

        {/* Tarjeta del poema con efectos épicos */}
        <div className="relative max-w-4xl mx-auto group">
          {/* Halo exterior brillante */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse-slow"></div>

          {/* Tarjeta principal */}
          <div className="relative bg-white/25 dark:bg-black/30 backdrop-blur-2xl rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-white/40 dark:border-white/20 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] animate-fade-in-up">
            {/* Ícono de comillas decorativo */}
            <div className="mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <svg
                className="w-16 h-16 mx-auto text-white/70 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Título del poema */}
            <h3
              className="text-4xl md:text-5xl font-bold mb-8 italic text-white drop-shadow-xl animate-fade-in leading-tight"
              style={{ animationDelay: "200ms" }}
            >
              "{dailyPoem.title}"
            </h3>

            {/* Separador decorativo */}
            <div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            ></div>

            {/* Contenido del poema */}
            <p
              className="text-xl md:text-2xl leading-relaxed mb-10 line-clamp-6 text-white/95 drop-shadow-lg font-light animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              {dailyPoem.content}
            </p>

            {/* Firma del autor */}
            <div
              className="pt-8 border-t-2 border-white/30 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-base md:text-lg font-semibold text-white/90 drop-shadow-md tracking-wide">
                — Miguel Ángel González Zuniga
              </p>
            </div>

            {/* Decoraciones en las esquinas */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-2xl"></div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-2xl"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-2xl"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyInspiration;
