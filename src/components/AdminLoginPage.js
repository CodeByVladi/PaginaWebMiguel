import React, { useState } from 'react';

const AdminLoginPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales de autenticación
    if (username === 'miguelgonzalez08@hotmail.es' && password === 'oscar555') {
      setIsLoggedIn(true);
      setCurrentPage('adminDashboard');
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center pt-24">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Acceso de Administrador</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Correo:
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;