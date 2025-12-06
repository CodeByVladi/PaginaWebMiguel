import React from "react";
import { events } from "../mock/events";

const EventsPage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 min-h-screen pt-24 relative overflow-hidden">
      {/* Fondo animado épico */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 dark:from-cyan-500 dark:to-blue-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-red-400 to-pink-400 dark:from-indigo-500 dark:to-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-orange-300 to-red-300 dark:from-purple-500 dark:to-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-orange-300/20 dark:bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-1/3 left-16 w-40 h-40 bg-red-300/20 dark:bg-indigo-400/20 rounded-full blur-2xl animate-float2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 animate-bounce-slow">
            <span className="inline-flex items-center gap-2 px-6 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
              </svg>
              Próximos Eventos
            </span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-extrabold theme-brand-text mb-6 drop-shadow-xl animate-text-shimmer"
            style={{ backgroundSize: "200% auto" }}
          >
            Eventos y Noticias
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Mantente al tanto de los próximos recitales, presentaciones y
            novedades
          </p>
        </div>

        {/* Grid mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-visible transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Halo exterior brillante */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Tarjeta principal */}
              <div className="relative surface backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border-2 border-orange-200/50 dark:border-cyan-400/30 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/70 transition-all duration-500">
                {/* Imagen con overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Badge de fecha */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                    <span className="text-white text-sm font-bold">
                      {event.date.split(",")[0]}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-base-color mb-3 group-hover:theme-brand-text transition-colors duration-300 leading-tight">
                    {event.title}
                  </h3>

                  {/* Ubicación */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      className="w-5 h-5 theme-brand-text"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-base-color">
                      {event.location}
                    </span>
                  </div>

                  {/* Línea decorativa */}
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 dark:from-cyan-400 dark:to-indigo-400 mb-4 group-hover:w-20 transition-all duration-300"></div>

                  <p className="text-muted text-sm mb-4 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 theme-brand-text font-bold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Más información
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block mb-6">
              <svg
                className="w-24 h-24 mx-auto theme-brand-text opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xl text-muted font-light">
              No hay eventos programados por el momento
            </p>
            <p className="text-base text-muted mt-2">
              ¡Mantente al tanto de las próximas novedades!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsPage;
