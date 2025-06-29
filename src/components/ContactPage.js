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
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contacto
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 text-center">
            ¿Tienes alguna pregunta, comentario o simplemente quieres saludar a{" "}
            {poetName}? ¡Nos encantaría escucharte!
          </p>

          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://www.facebook.com/miguel.Zuniga.678235/about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
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
              className="flex items-center px-6 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition-colors"
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
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
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
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
            >
              Enviar Mensaje
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
