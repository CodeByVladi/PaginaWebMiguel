import React from "react";

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Miguel Ángel González Zuniga. Todos
          los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
