import React from "react";

const SideMenu = ({ isOpen, toggleMenu, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    toggleMenu();
    // Asegurar scroll al top después de cerrar el menú
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className={`fixed inset-0 z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={toggleMenu}
      ></div>
      <div className="relative w-72 sm:w-80 surface-strong h-full shadow-2xl p-6 flex flex-col overflow-y-auto">
        {/* Header del menú con título */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold theme-brand-text">Menú</h2>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full btn-glass text-base-color hover:scale-110 transition-transform"
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </div>

        <nav className="flex flex-col space-y-2">
          <button
            onClick={() => handleNavigation("home")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-lg font-medium">Inicio</span>
          </button>
          <button
            onClick={() => handleNavigation("books")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-lg font-medium">Libros</span>
          </button>
          <button
            onClick={() => handleNavigation("poems")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-lg font-medium">Poemas</span>
          </button>
          <button
            onClick={() => handleNavigation("videos")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-lg font-medium">Videos</span>
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
            <span className="text-lg font-medium">Biografía</span>
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg font-medium">Contacto</span>
          </button>

          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => handleNavigation("adminLogin")}
              className="group flex items-center gap-3 text-left p-3 rounded-xl text-base-color hover-text-brand transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:translate-x-2 w-full"
            >
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-lg font-medium">Admin</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
