import React from "react";

const LayoutFooter = () => {
  return (
    <footer className="surface-strong text-muted py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-base-color">
          &copy; {new Date().getFullYear()} Miguel Ángel González Zuniga. Todos
          los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover-text-brand transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
