import React, { useState } from 'react';
import { allPoems } from '../mock/poems'; // Importa todos los poemas

const AdminDashboardPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [poemTitle, setPoemTitle] = useState('');
  const [poemContent, setPoemContent] = useState('');
  const [message, setMessage] = useState('');

  const handleAddPoem = (e) => {
    e.preventDefault();
    if (poemTitle && poemContent) {
      const newPoem = {
        title: poemTitle,
        excerpt: poemContent.substring(0, 100) + '...', // Genera un extracto
        content: poemContent
      };
      allPoems.push(newPoem); // Agrega el nuevo poema al mock
      setMessage('¡Poema agregado con éxito!');
      setPoemTitle('');
      setPoemContent('');
      // Opcional: forzar una actualización de la página de poemas si ya estaba cargada
      // Esto es una simulación, en una app real se manejaría con estado global o recarga de datos
      setCurrentPage('poems'); // Navega a la página de poemas para ver el nuevo
      setTimeout(() => setCurrentPage('adminDashboard'), 100); // Vuelve al dashboard
    } else {
      setMessage('Por favor, completa el título y el contenido del poema.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-indigo-950/30 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg mb-4">
            🔒 Admin
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12 animate-fade-in-up">Panel de Administración</h2>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 mb-8 border border-purple-200/50 dark:border-purple-700/50 animate-fade-in-up" style={{animationDelay: '150ms'}}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Agregar Nuevo Poema</h3>
          <form onSubmit={handleAddPoem} className="space-y-6">
            <div>
              <label htmlFor="poemTitle" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Título del Poema:
              </label>
              <input
                type="text"
                id="poemTitle"
                value={poemTitle}
                onChange={(e) => setPoemTitle(e.target.value)}
                className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 transition-all duration-300 transform focus:scale-[1.02]"
                required
              />
            </div>
            <div>
              <label htmlFor="poemContent" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Contenido del Poema:
              </label>
              <textarea
                id="poemContent"
                value={poemContent}
                onChange={(e) => setPoemContent(e.target.value)}
                rows="10"
                className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 resize-none transition-all duration-300 transform focus:scale-[1.02]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-4 rounded-lg focus:outline-none shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Publicar Poema</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            {message && (
              <p className="text-center mt-4 text-green-600 dark:text-green-400 font-semibold">{message}</p>
            )}
          </form>
        </div>

        <div className="text-center mt-8 animate-fade-in" style={{animationDelay: '300ms'}}>
          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;