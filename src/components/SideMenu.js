import React from 'react';

const SideMenu = ({ isOpen, toggleMenu, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    toggleMenu();
  };

  return (
    <div
      className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
      <div className="relative w-64 bg-white dark:bg-gray-800 h-full shadow-lg p-6 flex flex-col">
        <button onClick={toggleMenu} className="self-end p-2 text-gray-800 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-8 flex flex-col space-y-4">
          <button
            onClick={() => handleNavigation('home')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavigation('books')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Libros
          </button>
          <button
            onClick={() => handleNavigation('poems')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Poemas
          </button>
          <button
            onClick={() => handleNavigation('videos')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Videos
          </button>
          <button
            onClick={() => handleNavigation('about')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Biografía
          </button>
          <button
            onClick={() => handleNavigation('contact')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Contacto
          </button>
          <button
            onClick={() => handleNavigation('adminLogin')}
            className="text-left text-gray-800 dark:text-white text-lg hover:text-purple-600 dark:hover:text-blue-400 transition-colors"
          >
            Admin
          </button>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;