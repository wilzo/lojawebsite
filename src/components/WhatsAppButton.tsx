import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

declare global {
  function gtag(
    command: string,
    eventName: string,
    params: { [key: string]: string | number }
  ): void;
}

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "conversion", {
        send_to: "AW-17409859014/LaQ6CNv89fsaEMa61e1A",
        value: 1.0,
        currency: "BRL",
      });
    }

    window.open("https://wa.me/5565984058165", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-medium px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300">
          <WhatsAppIcon className="text-2xl" />
        </div>
        <div className="text-left">
          <div className="font-semibold">Orçamento Grátis</div>
          <div className="text-sm text-green-100 font-light">
            Resposta rápida via WhatsApp
          </div>
        </div>
      </div>

      <svg
        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
