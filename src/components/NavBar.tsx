import React from "react";
import logoImg from "../assets/balde.png";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="Mega Tintas Logo" className="h-8 w-auto" />
          <div className="hidden md:flex md:items-center">
            <span className="text-xl font-bold text-white">MEGA</span>
            <span className="text-xl font-light text-red-400 ml-1">TINTAS</span>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <a
            href="#quem-somos"
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Quem Somos
          </a>
          <a
            href="#produtos"
            className="text-white/90 hover:text-red-400 transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
          >
            Produtos
          </a>
          <a
            href="#contato"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
