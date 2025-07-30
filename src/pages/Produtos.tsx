import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import anjoEmborrachadaImg from "../assets/Produto/anjoEmborrachada.png";
import brasilineEsmalteImg from "../assets/Produto/brasilineEsmalte.png";
import brasiluxEsmalteImg from "../assets/Produto/brasiluxEsmalte.png";
import colortrixbaldeImg from "../assets/Produto/colortrixbalde.png";
import colortrixStandardImg from "../assets/Produto/colortrixStandard.png";
import decoraDiamante18ltImg from "../assets/Produto/decoraDiamante18lt.png";
import kitpinturaImg from "../assets/Produto/kitpintura.png";
import massacorridamaxvinilImg from "../assets/Produto/massacorridamaxvinil.png";
import maxnorth18ltImg from "../assets/Produto/maxnorth18lt.png";
import maxnorthstandard18ltImg from "../assets/Produto/maxnorthstandard18lt.png";
import pintamax18ltImg from "../assets/Produto/pintamax18lt.png";
import rendemuitocoral18ltImg from "../assets/Produto/rendemuitocoral18lt.png";
import sprayImg from "../assets/Produto/spray.png";
import neopisoimg from "../assets/Produto/neopiso_1.png";
import plasluximg from "../assets/Produto/plasluxpNg.png";
import maxnorthesmalteimg from "../assets/Produto/esmaltemaxnorthpng.png";
import neovinilesmalteimg from "../assets/Produto/esmalteneovinil_1.png";
import neofleximg from "../assets/Produto/neoflex_1.png";
import texturacolortrixImg from "../assets/Produto/texturacolortrix.png";

const Produtos: React.FC = () => {
  const handleProductInquiry = (
    productName: string,
    productDescription: string
  ) => {
    const message = `Olá! Gostaria de saber mais sobre o produto:

📦 *${productName}*
📝 ${productDescription}

Poderia me informar sobre:
• Preço atual
• Disponibilidade em estoque
• Formas de pagamento
• Condições de entrega

Obrigado!`;

    const whatsappUrl = `https://wa.me/5565984058165?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const produtos = [
    {
      categoria: "Esmalte e Vernizes",
      items: [
        {
          nome: "Esmalte Maxnorth",
          descricao:
            "Esmalte sintético de alta qualidade para madeiras e metais internos",
          imagem: maxnorthesmalteimg,
          preco: "Consulte",
        },
        {
          nome: "Brasiline Esmalte industrial",
          descricao:
            "Esmalte premium com acabamento brilhante e proteção duradoura",
          imagem: brasilineEsmalteImg,
          preco: "Consulte",
        },
        {
          nome: "Esmalte Neovinil 18LT e 3,6LT",
          descricao:
            "Esmalte premium da marca Neovinil com acabamento brilhante e proteção duradoura",
          imagem: neovinilesmalteimg,
          preco: "Consulte",
        },
        {
          nome: "Brasilux Esmalte",
          descricao:
            "Esmalte premium com acabamento brilhante e proteção duradoura",
          imagem: brasiluxEsmalteImg,
          preco: "Consulte",
        },
      ],
    },
    {
      categoria: "Tintas Internas",
      items: [
        {
          nome: "Pintamax Maxvinil Economica 18L",
          descricao:
            "Tinta látex econômica ideal para paredes internas com boa cobertura",
          imagem: pintamax18ltImg,
          preco: "Consulte",
        },
        {
          nome: "Tinta Plaslux 16LT para pinturas interiores",
          descricao: "Tinta acrílica de alta qualidade para ambientes internos",
          imagem: plasluximg,
          preco: "Consulte",
        },
        {
          nome: "Maxnorth 18L Economica",
          descricao:
            "Tinta acrílica para fachadas com máxima resistência às intempéries",
          imagem: maxnorth18ltImg,
          preco: "Consulte",
        },
        {
          nome: "Colortrix balde economico 16lt",
          descricao:
            "Tinta texturizada em balde para grandes superfícies externas",
          imagem: colortrixbaldeImg,
          preco: "Consulte",
        },
      ],
    },
    {
      categoria: "Tintas Externas",
      items: [
        {
          nome: "Decora Diamante 18L",
          descricao:
            "Tinta acrílica premium para interiores com alta cobertura e durabilidade excepcional",
          imagem: decoraDiamante18ltImg,
          preco: "Consulte",
        },

        {
          nome: "Maxnorth Standard 18L",
          descricao: "Linha econômica para fachadas com boa proteção UV",
          imagem: maxnorthstandard18ltImg,
          preco: "Consulte",
        },
        {
          nome: "Rende Muito Coral 18L",
          descricao: "Tinta externa com alto rendimento e excelente cobertura",
          imagem: rendemuitocoral18ltImg,
          preco: "Consulte",
        },

        {
          nome: "Colortrix Standard",
          descricao:
            "Textura padrão para acabamentos externos com boa durabilidade",
          imagem: colortrixStandardImg,
          preco: "Consulte",
        },
        {
          nome: "Anjo Emborrachada",
          descricao:
            "Tinta emborrachada impermeabilizante para lajes e terraços",
          imagem: anjoEmborrachadaImg,
          preco: "Consulte",
        },
        {
          nome: "Tinta Emborrachada Neoflex Neovnil",
          descricao:
            "Tinta emborrachada impermeabilizante para lajes e terraços com alta flexibilidade e resistência",
          imagem: neofleximg,
          preco: "Consulte",
        },
        {
          nome: "NeoPiso Neovinil",
          descricao:
            "Tinta para pisos de concreto com alta aderência e resistência",
          imagem: neopisoimg,
          preco: "Consulte",
        },
      ],
    },
    {
      categoria: "Acessórios e Complementos",
      items: [
        {
          nome: "Textura Colortrix",
          descricao:
            "Textura acrílica decorativa para efeitos especiais em fachadas",
          imagem: texturacolortrixImg,
          preco: "Consulte",
        },
        {
          nome: "Kit Pintura Completo",
          descricao:
            "Kit com pincéis, rolos e acessórios para pintura profissional",
          imagem: kitpinturaImg,
          preco: "Consulte",
        },
        {
          nome: "Massa Corrida Maxvinil",
          descricao: "Massa corrida para correção e preparação de superfícies",
          imagem: massacorridamaxvinilImg,
          preco: "Consulte",
        },
        {
          nome: "Spray Multiuso",
          descricao: "Tinta em spray para retoques e pequenas superfícies",
          imagem: sprayImg,
          preco: "Consulte",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Estilos CSS customizados */}
      <style>
        {`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos <span className="text-red-400">Produtos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Oferecemos uma linha completa de tintas e acessórios das melhores
            marcas do mercado, garantindo qualidade e durabilidade para seus
            projetos.
          </p>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {produtos.map((categoria, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                {categoria.categoria}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoria.items.map((produto, prodIndex) => (
                  <div
                    key={prodIndex}
                    className="group relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    {/* Background decorativo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Imagem do produto */}
                      <div className="aspect-square mb-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-red-400/30 transition-all duration-500">
                        <img
                          src={produto.imagem}
                          alt={produto.nome}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-lg"
                        />
                      </div>

                      {/* Nome do produto */}
                      <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                        {produto.nome}
                      </h3>

                      {/* Descrição */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {produto.descricao}
                      </p>

                      {/* Preço e CTA */}
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-red-400 font-semibold text-lg">
                          {produto.preco}
                        </span>
                        <button
                          onClick={() =>
                            handleProductInquiry(
                              produto.nome,
                              produto.descricao
                            )
                          }
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Precisa de Ajuda na Escolha?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Nossa equipe está pronta para te ajudar a encontrar a tinta ideal
              para seu projeto.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Produtos;
