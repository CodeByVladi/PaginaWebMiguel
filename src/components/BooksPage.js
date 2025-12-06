import React, { useState } from "react";
import { allBooks } from "../mock/books";
import BookFormatModal from "./BookFormatModal";

// NOTA: Si los libros tienen un campo "year" o "published", usarlo para ordenar por fecha. Si no, se puede agregar después.
const BooksPage = () => {
  const [sortOption, setSortOption] = useState("az");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (book) => {
    if (book.formats && Object.keys(book.formats).length > 1) {
      setSelectedBook(book);
      setIsModalOpen(true);
    } else {
      window.open(book.amazonLink, "_blank", "noopener,noreferrer");
    }
  };

  const getSortedBooks = () => {
    let books = [...allBooks];
    switch (sortOption) {
      case "az":
        books.sort((a, b) =>
          a.title.localeCompare(b.title, "es", { sensitivity: "base" })
        );
        break;
      case "za":
        books.sort((a, b) =>
          b.title.localeCompare(a.title, "es", { sensitivity: "base" })
        );
        break;
      case "newest":
        books.sort((a, b) => {
          if (a.published && b.published)
            return b.published.localeCompare(a.published);
          if (b.published && !a.published) return 1;
          if (a.published && !b.published) return -1;
          return 0;
        });
        break;
      case "oldest":
        books.sort((a, b) => {
          if (a.published && b.published)
            return a.published.localeCompare(b.published);
          if (a.published && !b.published) return -1;
          if (b.published && !a.published) return 1;
          return 0;
        });
        break;
      default:
        break;
    }
    return books;
  };

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 animate-fade-in">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 animate-bounce-slow">
              <span className="inline-flex items-center gap-2 px-6 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
                Biblioteca Completa
              </span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-extrabold font-display theme-brand-text drop-shadow-xl animate-text-shimmer"
              style={{ backgroundSize: "200% auto" }}
            >
              Todos los Libros
            </h2>
          </div>

          {/* Selector mejorado */}
          <div className="flex justify-center md:justify-end">
            <label className="flex items-center gap-3 text-sm font-medium btn-glass px-6 py-3 rounded-full shadow-xl border-2 border-orange-300/50 dark:border-cyan-400/30">
              <span className="theme-brand-text font-bold">Ordenar:</span>
              <select
                className="bg-transparent outline-none theme-brand-text font-semibold cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="newest">Más nuevo</option>
                <option value="oldest">Más viejo</option>
              </select>
            </label>
          </div>
        </div>

        {/* Grid mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getSortedBooks().map((book, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-visible transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Halo exterior brillante */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>

              {/* Tarjeta principal */}
              <div className="relative surface backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border-2 border-orange-200/50 dark:border-cyan-400/30 group-hover:border-orange-400/70 dark:group-hover:border-cyan-400/70 transition-all duration-500">
                {/* Portada con efecto espectacular */}
                <div className="w-full h-72 flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-orange-100/50 to-red-100/50 dark:from-gray-800/50 dark:to-slate-800/50">
                  {/* Glow animado */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-red-400/20 dark:from-cyan-400/10 dark:via-blue-500/10 dark:to-indigo-500/10 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                  <img
                    src={book.cover}
                    alt={book.title}
                    className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl group-hover:scale-110 group-hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-base-color mb-2 group-hover:theme-brand-text transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="text-muted text-sm mb-3">{book.author}</p>

                  {/* Línea decorativa */}
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-400 dark:from-cyan-400 dark:to-indigo-400 mx-auto mb-3 group-hover:w-20 transition-all duration-300"></div>

                  <p className="text-muted text-sm mb-4 line-clamp-2 leading-relaxed">
                    {book.summary}
                  </p>

                  {/* Botón épico */}
                  <button
                    onClick={() => handleBuyClick(book)}
                    className="inline-flex items-center gap-2 btn-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    Comprar
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookFormatModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default BooksPage;
