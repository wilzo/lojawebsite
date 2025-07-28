import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="font-sans min-h-screen w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
