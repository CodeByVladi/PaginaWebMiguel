import React from "react";
import { videos } from "../mock/videos";

const toYouTubeEmbed = (url) => {
  try {
    const u = new URL(url);
    const id = u.searchParams.get("v") || u.pathname.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  } catch {
    return url;
  }
};

const toVimeoEmbed = (url) => {
  try {
    const u = new URL(url);
    const id = u.pathname.split("/").filter(Boolean).pop();
    return `https://player.vimeo.com/video/${id}`;
  } catch {
    return url;
  }
};

// Títulos se definen en el mock; si falta, usamos un fallback simple.
const getTitle = (video) => video.title || "Poema";

const VideoFrame = ({ type, url, title }) => {
  if (type === "youtube") {
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
  if (type === "vimeo") {
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
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 min-h-screen pt-24 relative overflow-hidden">
      {/* Fondo animado épico */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 dark:from-cyan-500 dark:to-blue-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-400 to-pink-400 dark:from-indigo-500 dark:to-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-300 to-red-300 dark:from-purple-500 dark:to-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-300/20 dark:bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-1/3 right-16 w-40 h-40 bg-red-300/20 dark:bg-indigo-400/20 rounded-full blur-2xl animate-float2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header mejorado */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 animate-bounce-slow">
            <span className="inline-flex items-center gap-2 px-6 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Galería de Videos
            </span>
          </div>
          <h2 
            className="text-5xl md:text-7xl font-extrabold font-display theme-brand-text mb-6 drop-shadow-xl animate-text-shimmer"
            style={{ backgroundSize: "200% auto" }}
          >
            Videos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Recitales y lecturas de poemas que dan vida a la palabra
          </p>
        </header>

        {/* Grid mejorado */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, idx) => (
            <article
              key={v.id}
              className="group relative rounded-2xl overflow-visible transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Halo exterior brillante */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Tarjeta principal */}
              <div className="relative surface backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border-2 border-orange-200/50 dark:border-cyan-400/30 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/70 transition-all duration-500">
                {/* Video con overlay */}
                <div className="relative overflow-hidden">
                  <VideoFrame type={v.type} url={v.url} title={getTitle(v)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-bold text-base-color group-hover:theme-brand-text transition-colors duration-300 line-clamp-2">
                    {getTitle(v)}
                  </h2>

                  {v.reciter && (
                    <div className="flex items-center gap-2">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-sm font-semibold text-base-color">
                        {v.reciter}
                      </p>
                    </div>
                  )}

                  {v.description && (
                    <>
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-20 transition-all duration-300"></div>
                      <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                        {v.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosPage;
