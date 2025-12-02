import React from 'react';

const BookFormatModal = ({ book, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleFormatClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const formatLabels = {
    ebook: '📱 Libro Digital (Kindle)',
    paperback: '📖 Pasta Blanda',
    hardcover: '📕 Pasta Dura'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative surface-strong rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fade-in-up border border-theme"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full btn-glass"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenido */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold theme-brand-text mb-2">
            {book.title}
          </h3>
          <p className="text-muted">
            Elige el formato que prefieres
          </p>
        </div>

        {/* Opciones de formato */}
        <div className="space-y-3">
          {book.formats && Object.entries(book.formats).map(([format, link]) => (
            <button
              key={format}
              onClick={() => handleFormatClick(link)}
              className="relative w-full p-4 surface rounded-xl border border-theme hover:shadow-lg transition-all duration-300 text-left group"
            >
              <div className="absolute inset-0 theme-brand opacity-0 group-hover:opacity-20 blur-xl rounded-xl"></div>
              <div className="relative flex items-center justify-between">
                <span className="text-lg font-semibold text-base-color">
                  {formatLabels[format]}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookFormatModal;
