import React, { useState } from "react";
import { allBooks } from "../mock/books";
import { allPoems } from "../mock/poems";

const LayoutHeader = ({
  toggleDarkMode,
  isDarkMode,
  setCurrentPage,
  toggleMenu,
  setSelectedPoem,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm(""); // Limpiar el término de búsqueda al abrir/cerrar
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();

      // Buscar en libros
      const foundBook = allBooks.find(
        (book) =>
          book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
          (book.summary &&
            book.summary.toLowerCase().includes(lowerCaseSearchTerm))
      );

      // Buscar en poemas
      const foundPoem = allPoems.find(
        (poem) =>
          poem.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          poem.content.toLowerCase().includes(lowerCaseSearchTerm) ||
          poem.excerpt.toLowerCase().includes(lowerCaseSearchTerm)
      );

      if (foundBook) {
        // Si se encuentra un libro, redirigir a la página de libros (no hay vista de detalle para libros individuales)
        setCurrentPage("books");
        // Podrías agregar un scroll a la posición del libro si la página de libros fuera muy larga
      } else if (foundPoem) {
        // Si se encuentra un poema, redirigir a la página de detalle del poema
        setSelectedPoem(foundPoem);
        setCurrentPage("poemDetail");
      } else {
        // Si no se encuentra nada, puedes redirigir a una página de "resultados no encontrados" o mostrar un mensaje
        alert(`No se encontraron resultados para "${searchTerm}".`);
      }
      setIsSearchOpen(false); // Cierra la barra después de buscar
      setSearchTerm(""); // Limpiar el término de búsqueda
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-2xl border-b border-amber-200/20 dark:border-cyan-500/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-orange-50/30 to-red-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50 pointer-events-none"></div>
      <nav className="relative container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="group text-lg sm:text-xl md:text-2xl font-bold font-display hover:scale-105 transition-all duration-300 cursor-pointer">
          <span className="relative inline-block">
            <span className="hidden sm:inline bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Versos de Miguel Ángel
            </span>
            <span className="sm:hidden bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Miguel Ángel
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300 shadow-lg"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-orange-500/20 to-red-500/0 dark:from-cyan-500/0 dark:via-blue-500/20 dark:to-indigo-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          {/* Botón de búsqueda / Barra de búsqueda */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-sm sm:text-base text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-cyan-400 border border-amber-200/50 dark:border-cyan-500/50 shadow-lg transition-all duration-300 w-32 sm:w-40 md:w-56 lg:w-64"
                  autoFocus
                />
                <button
                  type="submit"
                  className="ml-1.5 sm:ml-2 p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-cyan-500 dark:to-blue-500 text-white hover:shadow-lg hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1.5 sm:ml-2 p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-md border border-amber-200/30 dark:border-cyan-500/30 text-gray-700 dark:text-gray-200 hover:border-red-400/50 dark:hover:border-red-400/50 hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            ) : (
              <button
                onClick={handleSearchClick}
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-md border border-amber-200/30 dark:border-cyan-500/30 text-gray-700 dark:text-gray-200 hover:border-amber-400/50 dark:hover:border-cyan-400/50 hover:shadow-lg hover:scale-110 transition-all duration-300"
                title="Buscar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Botón de menú para móviles */}
          <button
            onClick={toggleMenu}
            className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-md border border-amber-200/30 dark:border-cyan-500/30 text-gray-700 dark:text-gray-200 hover:border-amber-400/50 dark:hover:border-cyan-400/50 hover:shadow-lg hover:scale-110 transition-all duration-300 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú de navegación para pantallas grandes con hover effects */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage("home")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Inicio</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("books")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Libros</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("poems")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Poemas</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("videos")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Videos</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Biografía</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-cyan-400 transition-all duration-300 font-medium group rounded-lg hover:bg-amber-50/50 dark:hover:bg-gray-800/50"
            >
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 dark:from-cyan-400 dark:to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => setCurrentPage("adminLogin")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 dark:hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Admin
              </span>
            </button>
          </div>

          {/* Botón de modo claro/oscuro */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-700/40 backdrop-blur-md border border-amber-200/30 dark:border-cyan-500/30 text-amber-600 dark:text-cyan-400 hover:border-amber-400/50 dark:hover:border-cyan-400/50 hover:shadow-lg hover:scale-110 transition-all duration-300"
            title={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 6.675l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;
