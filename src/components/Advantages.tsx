
import { Check } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    "Reduza custos com mão de obra no setor financeiro.",
    "Obtenha um departamento financeiro organizado com processos bem definidos.",
    "Acesse informações atualizadas e precisas em tempo real através de uma plataforma moderna.",
    "Tome decisões gerenciais e estratégicas com mais segurança, baseando-se em dados financeiros atualizados.",
    "Ganhe mais tempo para administrar sua empresa e focar no seu crescimento."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">
              Vantagens ao contratar a Equilibra Conta
            </h2>
            <p className="text-xl text-gray-600">
              Por que escolher nossos serviços de BPO Financeiro
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-equilibra-green-dark/5 to-equilibra-green-light/10 rounded-xl p-8 shadow-lg">
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="mt-1 mr-4 bg-equilibra-green-light text-white rounded-full p-1 flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-lg text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
