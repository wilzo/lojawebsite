import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
