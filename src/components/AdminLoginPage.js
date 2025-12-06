import React, { useState } from "react";

const AdminLoginPage = ({ setCurrentPage, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales de autenticación
    if (username === "miguelgonzalez08@hotmail.es" && password === "oscar555") {
      setIsLoggedIn(true);
      setCurrentPage("adminDashboard");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-indigo-950/30 min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-purple-200/50 dark:border-purple-700/50 relative z-10 animate-fade-in-up">
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-white"
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
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Acceso de Administrador
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Correo:
            </label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 transition-all duration-300 transform focus:scale-[1.02]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 transition-all duration-300 transform focus:scale-[1.02]"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="group relative w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-4 rounded-lg focus:outline-none shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Iniciar Sesión</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;
