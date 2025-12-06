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
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen pt-24 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-600/30 dark:to-orange-600/30 rounded-full blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 left-20 w-[500px] h-[500px] bg-gradient-to-br from-red-400 to-pink-500 dark:from-red-600/30 dark:to-pink-600/30 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-600/20 dark:to-red-600/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-500/40 dark:bg-amber-400/30 rounded-full animate-float1"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-500/40 dark:bg-orange-400/30 rounded-full animate-float2"></div>
      <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-red-500/30 dark:bg-red-400/20 rounded-full animate-float3"></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-8 py-3 btn-glass theme-brand-text text-sm font-bold rounded-full shadow-xl mb-4 border-2 border-amber-500/20 dark:border-cyan-500/20">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9-5 9 5"
              />
            </svg>
            Contáctanos
          </span>
        </div>

        <h2 className="text-6xl md:text-7xl font-bold font-display text-center theme-brand-text mb-16 drop-shadow-lg">
          <span className="block text-4xl md:text-5xl mb-2 opacity-90">
            ¡Hablemos!
          </span>
          <span className="animate-text-shimmer bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto]">
            Contacto
          </span>
        </h2>

        <div className="group relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative surface backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-amber-200/30 dark:border-cyan-500/30">
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 text-center leading-relaxed">
              ¿Tienes alguna pregunta, comentario o simplemente quieres saludar
              a <span className="font-bold theme-brand-text">{poetName}</span>?
              ¡Nos encantaría escucharte!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://www.facebook.com/miguel.Zuniga.678235/about"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.279-4.185 4.538v2.462z" />
                  </svg>
                  Facebook
                </div>
              </a>
              <a href="mailto:miguelgonzalez08@hotmail.es" className="relative">
                <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9-5 9 5"
                    />
                  </svg>
                  Enviar Correo
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent dark:via-cyan-500/50"></div>
              <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                o escríbenos directamente
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent dark:via-cyan-500/50"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
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
                  className="shadow-lg appearance-none border-2 border-amber-200/50 dark:border-cyan-500/30 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent surface backdrop-blur-sm transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
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
                  className="shadow-lg appearance-none border-2 border-amber-200/50 dark:border-cyan-500/30 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent surface backdrop-blur-sm transition-all duration-300"
                  required
                />
              </div>
              <div className="relative">
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
                  className="shadow-lg appearance-none border-2 border-amber-200/50 dark:border-cyan-500/30 rounded-lg w-full py-3 px-4 text-gray-700 dark:text-white leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent surface backdrop-blur-sm resize-none transition-all duration-300"
                  required
                ></textarea>
              </div>

              <div className="relative pt-4">
                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 dark:from-cyan-600 dark:via-blue-500 dark:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl focus:outline-none shadow-2xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Enviar Mensaje
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {status && (
                <div>
                  <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-500 rounded-xl p-4 mt-6">
                    <p className="text-center text-green-700 dark:text-green-300 font-semibold flex items-center justify-center gap-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {status}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
