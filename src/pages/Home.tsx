import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
