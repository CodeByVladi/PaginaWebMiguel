import React from "react";

const AboutPage = ({ poetName }) => {
  const bio = `${poetName} es un alma libre que ha dedicado su vida a la poesía, explorando las profundidades del ser humano y la belleza del mundo a través de sus versos. Nacido en Jinotepe Carazo, Nicaragua, su pasión por las letras floreció desde temprana edad. Su obra se caracteriza por su lirismo profundo, su exploración de la naturaleza y su crítica social sutil. Ha sido galardonado con. Cuando no está escribiendo, disfruta pasear por la naturaleza, leer clásicos y escuchar música.`;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Sobre {poetName}
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <img
              src="/imagenes/FotoMiguel.png" // Reemplazar con la foto real del papá
              alt={`Foto de ${poetName}`}
              className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-purple-200 dark:border-blue-700"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              {poetName}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {bio}
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://www.facebook.com/miguel.Zuniga.678235/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.279-4.185 4.538v2.462z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/[tu_perfil]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.494 2.901-6.494 6.494 0 .509.058 1.007.172 1.486-5.406-.271-10.213-2.86-13.42-6.795-.556.957-.875 2.07-.875 3.253 0 2.254 1.14 4.248 2.873 5.422-.84-.025-1.62-.257-2.305-.64-.025.025-.025.05-.025.076 0 3.15 2.239 5.77 5.194 6.362-.547.148-1.12.227-1.703.227-.418 0-.823-.041-1.22-.116.823 2.572 3.204 4.45 6.03 4.491-2.22 1.749-5.02 2.804-8.07 2.804-.52 0-1.03-.03-1.53-.09 2.86 1.82 6.24 2.88 9.88 2.88 11.85 0 18.35-9.81 18.35-18.35 0-.28-.008-.56-.02-.84.81-.58 1.51-1.29 2.07-2.105z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/[tu_perfil]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
