import React, { useState, useEffect } from "react";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import HomeWelcome from "./components/HomeWelcome";
import HomeBookSection from "./components/HomeBookSection";
import HomePoemSection from "./components/HomePoemSection";
import BooksPage from "./components/BooksPage";
import PoemsPage from "./components/PoemsPage";
import PoemDetailPage from "./components/PoemDetailPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import SideMenu from "./components/SideMenu";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboardPage from "./components/AdminDashboardPage";
import DailyInspiration from "./components/DailyInspiration";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación

  const poetName = "Miguel Ángel González Zuniga";

  useEffect(() => {
    // Detectar preferencia del sistema o usar un valor por defecto
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light"); // Asegura que no haya clase 'light'
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light"); // Agrega clase 'light' para modo claro
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HomeWelcome poetName={poetName} setCurrentPage={setCurrentPage} />
            <HomeBookSection setCurrentPage={setCurrentPage} />
            <HomePoemSection
              setCurrentPage={setCurrentPage}
              setSelectedPoem={setSelectedPoem}
            />
            <DailyInspiration />
          </>
        );
      case "books":
        return <BooksPage />;
      case "poems":
        return (
          <PoemsPage
            setCurrentPage={setCurrentPage}
            setSelectedPoem={setSelectedPoem}
          />
        );
      case "poemDetail":
        return (
          <PoemDetailPage poem={selectedPoem} setCurrentPage={setCurrentPage} />
        );
      case "about":
        return <AboutPage poetName={poetName} />;
      case "contact":
        return <ContactPage poetName={poetName} />;
      case "adminLogin":
        return (
          <AdminLoginPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case "adminDashboard":
        return isLoggedIn ? (
          <AdminDashboardPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <AdminLoginPage
            setCurrentPage={setCurrentPage}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      default:
        return (
          <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
            Página no encontrada.
          </div>
        );
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-colors duration-300">
      <LayoutHeader
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        setCurrentPage={setCurrentPage}
        toggleMenu={toggleMenu}
        setSelectedPoem={setSelectedPoem} // Pasar setSelectedPoem al header para la búsqueda
      />
      <SideMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        setCurrentPage={setCurrentPage}
      />
      <main className="min-h-screen">{renderPage()}</main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE
