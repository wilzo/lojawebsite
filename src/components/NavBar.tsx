import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/balde.png";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logoImg}
            alt="Mega Tintas Logo"
            className="h-8 w-auto size-300"
          />
        </Link>

        <div className="flex items-center space-x-8">
          <Link
            to="/quem-somos"
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Quem Somos
          </Link>
          <Link
            to="/produtos"
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Produtos
          </Link>
          <Link
            to="/contato"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
