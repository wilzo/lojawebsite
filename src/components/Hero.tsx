import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import fachadaImg from "../assets/fachada.png";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background com movimento parallax */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[20s] ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${fachadaImg})`,
            filter: "blur(2px) brightness(0.7)",
          }}
        />
        {/* Gradient overlay moderno */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90" />

        {/* Efeito de mesh/grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-ping delay-1000" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-500" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/25 rounded-full animate-ping delay-3000" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        {/* Glass card container */}
        <div className="backdrop-blur-2xl bg-white/[0.08] border border-white/[0.15] rounded-3xl p-8 md:p-16 shadow-2xl shadow-black/20 max-w-3xl w-full text-center">
          {/* Título principal mais impactante */}
          <div className="mb-8">
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tight">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
                  MEGA
                </span>
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-white/95 tracking-wide">
                TINTAS
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 via-white to-red-500 mx-auto rounded-full" />
          </div>

          {/* Slogan impactante */}
          <div className="mb-12 space-y-6">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
              <span className="text-red-400 font-semibold">Sua casa</span> mais
              viva com as cores certas
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light">
              Qualidade • Variedade • Preço justo
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p className="text-white/90 text-xl font-medium">
              💬 Faça seu orçamento agora mesmo, realizamos entregas
            </p>

            {/* Button container com efeito */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl scale-110 animate-pulse" />
              <WhatsAppButton />
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm font-light">Descubra mais</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
