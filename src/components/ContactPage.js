import React, { useState } from "react";

const ContactPage = ({ poetName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a un servicio como Formspree o Netlify Forms
    // Para enviar un correo, puedes usar un servicio de terceros como EmailJS, SendGrid, etc.
    // Por ahora, solo simulamos el envío
    console.log("Formulario enviado:", formData);
    setTimeout(() => {
      setStatus("¡Mensaje enviado con éxito! Te responderemos pronto.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-indigo-950/30 min-h-screen pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg mb-4">
            Contáctanos
          </span>
        </div>
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12 animate-fade-in-up">
          Contacto
        </h2>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-700/50 animate-fade-in-up" style={{animationDelay: '150ms'}}>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 text-center">
            ¿Tienes alguna pregunta, comentario o simplemente quieres saludar a{" "}
            {poetName}? ¡Nos encantaría escucharte!
          </p>

          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://www.facebook.com/miguel.Zuniga.678235/about"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.279-4.185 4.538v2.462z" />
              </svg>
              Facebook
            </a>
            <a
              href="mailto:miguelgonzalez08@hotmail.es"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-red-500/50 transform hover:scale-110 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"
                />
              </svg>
              Enviar Correo
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              >
                Tu Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 transition-all duration-300 transform focus:scale-[1.02]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              >
                Tu Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 transition-all duration-300 transform focus:scale-[1.02]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              >
                Tu Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="shadow-lg appearance-none border border-gray-300 dark:border-gray-600 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700/50 dark:focus:bg-gray-700 resize-none transition-all duration-300 transform focus:scale-[1.02]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-4 rounded-lg focus:outline-none shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Enviar Mensaje</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            {status && (
              <p className="text-center mt-4 text-green-600 dark:text-green-400 font-semibold">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
