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
    <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white dark:from-gray-700 dark:to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 animate-pulse">
          Inspiración Diaria
        </h2>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-xl max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
          <h3 className="text-3xl font-semibold mb-4 italic">
            "{dailyPoem.title}"
          </h3>
          <p className="text-lg leading-relaxed mb-6 line-clamp-6">
            {dailyPoem.content}
          </p>
          <p className="text-sm font-light">- Miguel Ángel González Zuniga</p>
        </div>
      </div>
    </section>
  );
};

export default DailyInspiration;
