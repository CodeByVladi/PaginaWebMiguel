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
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Videos</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Recitales y lecturas de poemas.</p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <article
            key={v.id}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
          >
            <VideoFrame type={v.type} url={v.url} title={v.title} />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{v.title}</h2>
              {v.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{v.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Nota: cuando compartas el archivo definitivo con los videos, lo conectamos aquí.
      </p>
    </section>
  );
};

export default VideosPage;
