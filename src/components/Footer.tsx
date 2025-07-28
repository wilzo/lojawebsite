import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import maxvinilImg from "../assets/maxvinil.png";
import suvinilImg from "../assets/suvinil.png";
import coralImg from "../assets/coral.png";
import maxnorthImg from "../assets/maxnorth.png";
import atlasImg from "../assets/atlas.png";
import rizzieriImg from "../assets/rizzieri.png";
import fachadaImg from "../assets/fachada.png";

const brands = [
  { name: "Maxvinil", src: maxvinilImg },
  { name: "Suvinil", src: suvinilImg },
  { name: "Coral", src: coralImg },
  { name: "Maxnorth", src: maxnorthImg },
  { name: "Sherwin-Williams", src: atlasImg },
  { name: "Iquine", src: rizzieriImg },
];

const Footer: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: false,
    variableWidth: false,
    prevArrow: (
      <div className="custom-prev-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
        {/* Elementos flutuantes */}
        <div className="absolute top-10 right-20 w-1 h-1 bg-red-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-red-400/20 rounded-full animate-ping" />
      </div>

      <div className="relative z-10 w-full px-6 py-20">
        {/* Marcas */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="font-light">Marcas</span>
            <span className="text-red-400 ml-2">Parceiras</span>
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-red-500 via-white to-red-500 mx-auto rounded-full mb-16" />
          
          <div className="max-w-6xl mx-auto relative">
            <style>
              {`
                .custom-prev-arrow, .custom-next-arrow {
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  z-index: 10;
                  color: #fff;
                  background: rgba(239, 68, 68, 0.9);
                  border: 2px solid rgba(239, 68, 68, 0.3);
                  border-radius: 50%;
                  width: 60px;
                  height: 60px;
                  display: flex !important;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
                  transition: all 0.4s ease;
                  backdrop-filter: blur(10px);
                }
                
                .custom-prev-arrow:hover, .custom-next-arrow:hover {
                  background: rgba(239, 68, 68, 1);
                  border-color: rgba(239, 68, 68, 0.5);
                  box-shadow: 0 12px 35px rgba(239, 68, 68, 0.4);
                  transform: translateY(-50%) scale(1.1);
                }
                
                .custom-prev-arrow {
                  left: -80px;
                }
                
                .custom-next-arrow {
                  right: -80px;
                }
                
                @media (max-width: 768px) {
                  .custom-prev-arrow {
                    left: -50px;
                  }
                  .custom-next-arrow {
                    right: -50px;
                  }
                  .custom-prev-arrow, .custom-next-arrow {
                    width: 50px;
                    height: 50px;
                  }
                }
              `}
            </style>
            
            <Slider {...settings}>
              {brands.map((brand, index) => (
                <div key={index} className="px-4">
                  <div className="backdrop-blur-lg bg-white/[0.08] border border-white/[0.12] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/[0.12] group">
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="h-16 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Sobre nossa loja */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <span className="font-light">Sobre</span>
                <span className="text-red-400 ml-2">Nossa Loja</span>
              </h3>
              <div className="h-0.5 w-24 bg-gradient-to-r from-red-500 to-white rounded-full mb-8" />
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Localizada em ponto estratégico da cidade, nossa loja oferece uma
                  variedade completa de tintas e soluções para pintura residencial,
                  comercial e industrial.
                </p>
                <p>
                  Trabalhamos com <span className="text-red-400 font-semibold">marcas reconhecidas</span> e
                  prezamos pelo atendimento de qualidade, buscando sempre ajudar o
                  cliente a encontrar o melhor custo-benefício para seu projeto.
                </p>
                <p>
                  Nossa equipe é <span className="text-white font-semibold">treinada, comprometida</span> e pronta para te atender com
                  agilidade e segurança.
                </p>
              </div>
            </div>

            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl scale-105" />
                <img
                  src={fachadaImg}
                  alt="Foto da fachada da Mega Tintas"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Mega Tintas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
