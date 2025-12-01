import React from 'react';
import { events } from '../mock/events';

const EventsPage = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-indigo-950/30 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg mb-4">
            Próximos Eventos
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12 animate-fade-in-up">Eventos y Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-purple-500/50 dark:hover:border-indigo-500/50 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{event.date} | {event.location}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 text-purple-600 dark:text-indigo-400 hover:underline font-medium">
                    Más información
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {events.length === 0 && (
          <p className="text-center text-gray-700 dark:text-gray-300 text-xl">No hay eventos o noticias por el momento. ¡Mantente al tanto!</p>
        )}
      </div>
    </section>
  );
};

export default EventsPage;