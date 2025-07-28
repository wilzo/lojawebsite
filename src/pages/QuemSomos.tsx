import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const QuemSomos: React.FC = () => {
  const valores = [
    {
      icone: "🎯",
      titulo: "Qualidade",
      descricao:
        "Oferecemos apenas produtos de alta qualidade das melhores marcas do mercado.",
    },
    {
      icone: "🤝",
      titulo: "Confiança",
      descricao:
        "Construímos relacionamentos duradouros baseados na confiança e transparência.",
    },
    {
      icone: "⚡",
      titulo: "Agilidade",
      descricao:
        "Atendimento rápido e eficiente para atender suas necessidades com urgência.",
    },
    {
      icone: "💡",
      titulo: "Inovação",
      descricao:
        "Sempre em busca das melhores soluções e produtos mais modernos do mercado.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quem <span className="text-red-400">Somos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Há mais de 10 anos no mercado, somos referência em tintas e
            acabamentos em Cuiabá e região, oferecendo produtos de qualidade e
            atendimento especializado.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  *Fundada em 2020, nossa empresa nasceu com o objetivo de
                  oferecer soluções em tintas com qualidade, variedade e bom
                  atendimento.* Mesmo em um momento desafiador para a economia
                  mundial, iniciamos nossa trajetória com foco no cliente e
                  compromisso com o serviço prestado.
                </p>
                <p>
                  Somos uma empresa familiar, administrada com responsabilidade
                  e dedicação, buscando sempre o melhor para quem confia em
                  nosso trabalho. Com o passar do tempo, conquistamos a
                  confiança da comunidade e seguimos crescendo, sempre atentos
                  às necessidades do mercado e às tendências em pintura e
                  acabamento.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Nossa Missão
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Missão:</strong> Nossa missão é
                  transformar cada lar com cor, cuidado e confiança, unindo a
                  tintas de qualidade e preço justo. Acreditamos que cada
                  cliente merece atenção e respeito, e por isso buscamos sempre
                  entregar produtos e serviços que realmente façam a diferença
                  no dia a dia.
                </p>
                <p>
                  <strong className="text-white">Visão:</strong> Ser a principal
                  referência em tintas na região, reconhecida pela excelência no
                  atendimento e qualidade dos produtos.
                </p>
                <p>
                  <strong className="text-white">Valores:</strong> Qualidade,
                  confiança, agilidade e inovação são os pilares que guiam todas
                  as nossas ações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-300 text-lg">
              Os princípios que nos guiam no dia a dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-4xl mb-4">{valor.icone}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {valor.titulo}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Por que escolher a Mega Tintas?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Garantia de Qualidade
                </h3>
                <p className="text-gray-300 text-sm">
                  Produtos certificados e testados
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Entrega Rápida
                </h3>
                <p className="text-gray-300 text-sm">
                  Agilidade no atendimento
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Atendimento Especializado
                </h3>
                <p className="text-gray-300 text-sm">
                  Equipe capacitada para te orientar
                </p>
              </div>
            </div>

            <WhatsAppButton />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
