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
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-gray-800 dark:via-purple-900 dark:to-indigo-900 text-white relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce-slow">
          <span className="text-sm font-bold">✨ Inspiración del Día</span>
        </div>
        <h2 className="text-5xl font-bold mb-8 animate-text-shimmer bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent" style={{backgroundSize: '200% auto'}}>
          Inspiración Diaria
        </h2>
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-10 shadow-2xl max-w-3xl mx-auto transform transition-all duration-500 hover:scale-105 hover:bg-white/25 border border-white/30 animate-fade-in-up">
          <div className="mb-6">
            <svg className="w-12 h-12 mx-auto text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 7h12v2H6V7zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
            </svg>
          </div>
          <h3 className="text-3xl font-semibold mb-6 italic text-white/95 animate-fade-in" style={{animationDelay: '200ms'}}>
            "{dailyPoem.title}"
          </h3>
          <p className="text-lg leading-relaxed mb-8 line-clamp-6 text-white/90 animate-fade-in" style={{animationDelay: '400ms'}}>
            {dailyPoem.content}
          </p>
          <div className="pt-6 border-t border-white/30 animate-fade-in" style={{animationDelay: '600ms'}}>
            <p className="text-sm font-light text-white/80">— Miguel Ángel González Zuniga</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyInspiration;
