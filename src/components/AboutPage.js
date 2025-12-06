import React from "react";

const AboutPage = ({ poetName }) => {
  const bio = `${poetName} es un alma libre que ha dedicado su vida a la poesía, explorando las profundidades del ser humano y la belleza del mundo a través de sus versos. Nacido en Jinotepe Carazo, Nicaragua, su pasión por las letras floreció desde temprana edad. Su obra se caracteriza por su lirismo profundo, su exploración de la naturaleza y su crítica social sutil. Ha sido galardonado con. Cuando no está escribiendo, disfruta pasear por la naturaleza, leer clásicos y escuchar música.`;

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen pt-24 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600/30 dark:to-orange-600/30 rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-600/30 dark:to-pink-600/30 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-600/20 dark:to-red-600/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-amber-500/40 dark:bg-amber-400/30 rounded-full animate-float1"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-500/40 dark:bg-orange-400/30 rounded-full animate-float2"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-red-500/30 dark:bg-red-400/20 rounded-full animate-float3"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-8 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl mb-4 border-2 border-amber-500/20 dark:border-cyan-500/20">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Sobre el Autor
          </span>
        </div>

        <h2 className="text-6xl md:text-7xl font-bold font-display text-center theme-brand-text mb-16 drop-shadow-lg">
          <span className="block text-4xl md:text-5xl mb-2 opacity-90">
            Biografía de
          </span>
          <span className="animate-text-shimmer bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto]">
            {poetName}
          </span>
        </h2>

        <div className="group relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative surface backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 border-2 border-amber-200/30 dark:border-cyan-500/30">
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 rounded-full blur-lg opacity-75"></div>
              <div className="relative">
                <img
                  src="/imagenes/miguel-author.jpg"
                  alt={`Foto de ${poetName}`}
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback si la imagen nueva no existe
                    e.target.src = "/imagenes/FotoMiguel.png";
                  }}
                />
                <div className="absolute inset-0 rounded-full border-4 border-amber-400/30 dark:border-cyan-400/30 hover:border-amber-400/60 dark:hover:border-cyan-400/60 transition-colors duration-300"></div>
                {/* Efecto overlay al hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/0 via-orange-500/0 to-red-500/0 hover:from-amber-500/20 hover:via-orange-500/10 hover:to-red-500/20 dark:hover:from-cyan-400/10 dark:hover:via-blue-400/5 dark:hover:to-indigo-400/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-4xl md:text-5xl font-bold theme-brand-text mb-6 drop-shadow-md">
                {poetName}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 mb-6 mx-auto md:mx-0 transition-all duration-500"></div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg md:text-xl">
                {bio}
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-10">
                <a
                  href="https://www.facebook.com/miguel.Zuniga.678235/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="relative p-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.279-4.185 4.538v2.462z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com/[tu_perfil]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="relative p-4 bg-gradient-to-br from-sky-500 to-blue-400 text-white rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.494 2.901-6.494 6.494 0 .509.058 1.007.172 1.486-5.406-.271-10.213-2.86-13.42-6.795-.556.957-.875 2.07-.875 3.253 0 2.254 1.14 4.248 2.873 5.422-.84-.025-1.62-.257-2.305-.64-.025.025-.025.05-.025.076 0 3.15 2.239 5.77 5.194 6.362-.547.148-1.12.227-1.703.227-.418 0-.823-.041-1.22-.116.823 2.572 3.204 4.45 6.03 4.491-2.22 1.749-5.02 2.804-8.07 2.804-.52 0-1.03-.03-1.53-.09 2.86 1.82 6.24 2.88 9.88 2.88 11.85 0 18.35-9.81 18.35-18.35 0-.28-.008-.56-.02-.84.81-.58 1.51-1.29 2.07-2.105z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://instagram.com/[tu_perfil]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="relative p-4 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 text-white rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
