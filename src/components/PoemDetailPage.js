import React from "react";

const PoemDetailPage = ({ poem, setCurrentPage }) => {
  if (!poem) {
    return (
      <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-purple-950/20 dark:to-indigo-950/20 min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-gray-700 dark:text-gray-300 animate-fade-in">
          <div className="mb-6">
            <svg
              className="w-24 h-24 mx-auto text-purple-600 dark:text-indigo-400 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-2xl mb-6 font-semibold">Poema no encontrado.</p>
          <button
            onClick={() => setCurrentPage("poems")}
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Volver a Poemas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 dark:from-gray-800 dark:via-purple-950/20 dark:to-indigo-950/20 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <button
          onClick={() => setCurrentPage("poems")}
          className="group mb-8 flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-purple-600 dark:text-indigo-400 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 border border-purple-200 dark:border-purple-700 animate-fade-in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver a todos los poemas
        </button>
        <div
          className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 backdrop-blur-lg rounded-lg sm:rounded-2xl shadow-2xl p-1 sm:p-2 md:p-6 lg:p-12 border-2 border-purple-200/50 dark:border-purple-700/50 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <div className="text-center mb-8">
            <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg mb-4 animate-fade-in">
              Poema
            </div>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-display bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 md:mb-12 text-center animate-fade-in px-4 sm:px-0"
            style={{ animationDelay: "200ms" }}
          >
            {poem.title}
          </h2>
          <div
            className="animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <p className="poem-text text-gray-800 dark:text-gray-200 font-serif font-light px-0 sm:px-1 md:px-4 lg:px-8 xl:px-12 max-w-full mx-auto">
              {poem.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemDetailPage;
