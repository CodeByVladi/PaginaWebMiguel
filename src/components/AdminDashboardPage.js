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
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Panel de Administración</h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 mb-8">
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
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
            >
              Publicar Poema
            </button>
            {message && (
              <p className="text-center mt-4 text-green-600 dark:text-green-400 font-semibold">{message}</p>
            )}
          </form>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;