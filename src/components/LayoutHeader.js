import React, { useState } from 'react';
import { allBooks } from '../mock/books';
import { allPoems } from '../mock/poems';

const LayoutHeader = ({ toggleDarkMode, isDarkMode, setCurrentPage, toggleMenu, setSelectedPoem }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm(''); // Limpiar el término de búsqueda al abrir/cerrar
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      
      // Buscar en libros
      const foundBook = allBooks.find(book => 
        book.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        book.author.toLowerCase().includes(lowerCaseSearchTerm) ||
        (book.summary && book.summary.toLowerCase().includes(lowerCaseSearchTerm))
      );

      // Buscar en poemas
      const foundPoem = allPoems.find(poem => 
        poem.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        poem.content.toLowerCase().includes(lowerCaseSearchTerm) ||
        poem.excerpt.toLowerCase().includes(lowerCaseSearchTerm)
      );

      if (foundBook) {
        // Si se encuentra un libro, redirigir a la página de libros (no hay vista de detalle para libros individuales)
        setCurrentPage('books');
        // Podrías agregar un scroll a la posición del libro si la página de libros fuera muy larga
      } else if (foundPoem) {
        // Si se encuentra un poema, redirigir a la página de detalle del poema
        setSelectedPoem(foundPoem);
        setCurrentPage('poemDetail');
      } else {
        // Si no se encuentra nada, puedes redirigir a una página de "resultados no encontrados" o mostrar un mensaje
        alert(`No se encontraron resultados para "${searchTerm}".`);
      }
      setIsSearchOpen(false); // Cierra la barra después de buscar
      setSearchTerm(''); // Limpiar el término de búsqueda
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Versos de Miguel Ángel
        </div>
        <div className="flex items-center space-x-4">
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
                  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 w-40 md:w-56 lg:w-64"
                  autoFocus
                />
                <button type="submit" className="ml-2 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button onClick={() => setIsSearchOpen(false)} className="ml-2 p-2 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </form>
            ) : (
              <button
                onClick={handleSearchClick}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
                title="Buscar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}
          </div>

          {/* Botón de menú para móviles */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menú de navegación para pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => setCurrentPage('books')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Libros
            </button>
            <button
              onClick={() => setCurrentPage('poems')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Poemas
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Biografía
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={() => setCurrentPage('adminLogin')}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Admin
            </button>
          </div>
          
          {/* Botón de modo claro/oscuro */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
            title={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 6.675l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;