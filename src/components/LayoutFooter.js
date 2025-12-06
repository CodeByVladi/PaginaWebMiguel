import React from "react";

const LayoutFooter = () => {
  return (
    <footer className="relative mt-20 border-t border-amber-200/30 dark:border-cyan-500/20 bg-gradient-to-b from-white/80 via-amber-50/50 to-orange-50/50 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-900/50 backdrop-blur-xl">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-300/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-red-300/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold font-display bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">
                Versos Eternos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs text-center md:text-left">
                Celebrando la poesía de Miguel Ángel con elegancia y pasión
              </p>
            </div>
            
            {/* Quick links */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors duration-300">Inicio</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors duration-300">Poemas</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors duration-300">Libros</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors duration-300">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-cyan-400 transition-colors duration-300">Términos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300/50 dark:via-cyan-500/30 to-transparent mb-8"></div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Miguel Ángel González Zúñiga. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              Hecho con 💜 en la web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
