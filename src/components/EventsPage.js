import React from 'react';
import { events } from '../mock/events';

const EventsPage = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Eventos y Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{event.date} | {event.location}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-blue-400 hover:underline font-medium">
                    Más información
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