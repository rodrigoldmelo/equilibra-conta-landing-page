
import { Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico Inicial",
      description: "Realizamos uma análise detalhada da sua situação financeira atual, identificando oportunidades de melhoria e áreas críticas.",
      points: [
        "Análise da estrutura atual",
        "Identificação de gargalos",
        "Entendimento dos objetivos",
      ]
    },
    {
      number: "2",
      title: "Implantação Personalizada",
      description: "Desenvolvemos um plano de ação personalizado e implementamos os processos financeiros adequados à realidade da sua empresa.",
      points: [
        "Definição de processos",
        "Integração de sistemas",
        "Treinamento da equipe",
      ]
    },
    {
      number: "3",
      title: "Gestão Contínua",
      description: "Assumimos a operação financeira com monitoramento constante e relatórios periódicos para acompanhamento dos resultados.",
      points: [
        "Operação financeira diária",
        "Relatórios gerenciais mensais",
        "Reuniões de acompanhamento",
      ]
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso processo é simples e transparente, proporcionando uma transição tranquila para sua empresa
          </p>
        </div>
        
        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-equilibra-green-light/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="md:w-1/2 p-4">
                  <div className={`p-6 h-full ${
                    index % 2 === 0 
                      ? 'md:mr-8 md:text-right' 
                      : 'md:ml-8 md:text-left'
                  }`}>
                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      <div className="w-12 h-12 bg-equilibra-green-light text-white rounded-full flex items-center justify-center font-bold text-xl relative z-10">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold ml-3 text-equilibra-green-dark">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className={`space-y-2 ${
                      index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                    }`}>
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-center">
                          <Check size={16} className="text-equilibra-green-light mr-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
