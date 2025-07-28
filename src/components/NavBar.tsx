import React from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/balde.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Navega para a página
    navigate(path);
    // Faz scroll para o topo
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center space-x-2 text-left min-w-0 flex-shrink-0"
        >
          <img
            src={logoImg}
            alt="Mega Tintas Logo"
            className="h-7 sm:h-8 w-auto"
          />
        </button>

        <div className="flex items-center space-x-2 sm:space-x-6 md:space-x-8 flex-shrink-0">
          <button
            onClick={() => handleNavigation("/quem-somos")}
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-xs sm:text-sm tracking-wide uppercase whitespace-nowrap"
          >
            <span className="hidden sm:inline">Quem Somos</span>
            <span className="sm:hidden">Sobre</span>
          </button>
          <button
            onClick={() => handleNavigation("/produtos")}
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-xs sm:text-sm tracking-wide uppercase whitespace-nowrap"
          >
            Produtos
          </button>
          <button
            onClick={() => handleNavigation("/contato")}
            className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-4 md:px-6 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm uppercase tracking-wide shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
