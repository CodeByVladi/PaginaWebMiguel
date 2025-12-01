import React from 'react';
import { videos } from '../mock/videos';

const toYouTubeEmbed = (url) => {
  try {
    const u = new URL(url);
    const id = u.searchParams.get('v') || u.pathname.split('/').pop();
    return `https://www.youtube.com/embed/${id}`;
  } catch {
    return url;
  }
};

const toVimeoEmbed = (url) => {
  try {
    const u = new URL(url);
    const id = u.pathname.split('/').filter(Boolean).pop();
    return `https://player.vimeo.com/video/${id}`;
  } catch {
    return url;
  }
};

// Títulos se definen en el mock; si falta, usamos un fallback simple.
const getTitle = (video) => video.title || 'Poema';

const VideoFrame = ({ type, url, title }) => {
  if (type === 'youtube') {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="w-full h-full"
          src={toYouTubeEmbed(url)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  if (type === 'vimeo') {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          className="w-full h-full"
          src={toVimeoEmbed(url)}
          title={title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
      <video className="w-full h-full" controls src={url} />
    </div>
  );
};

const VideosPage = () => {
  return (
    <section className="container mx-auto px-6 pt-28 pb-16">
      {/* Header con animación de entrada */}
      <header className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 
                       bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 
                       bg-clip-text text-transparent">
          Videos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Recitales y lecturas de poemas
        </p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto rounded-full"></div>
      </header>

      {/* Grid de videos con animaciones escalonadas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v, idx) => (
          <article
            key={v.id}
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 shadow-lg overflow-hidden
                       transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
                       hover:border-indigo-400 dark:hover:border-indigo-500
                       animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Video con overlay sutil en hover */}
            <div className="relative overflow-hidden">
              <VideoFrame type={v.type} url={v.url} title={getTitle(v)} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            
            {/* Contenido con mejor espaciado y tipografía */}
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white 
                             group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                             transition-colors duration-300 line-clamp-2">
                {getTitle(v)}
              </h2>
              
              {v.reciter && (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {v.reciter}
                  </p>
                </div>
              )}
              
              {v.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 pt-1">
                  {v.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VideosPage;
