
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="inline-flex items-center justify-center p-3 bg-equilibra-green-light/10 rounded-full text-equilibra-green-dark mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-equilibra-green-dark mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign size={28} />,
      title: "Redução de custos",
      description: "Economize em estrutura interna e folha de pagamento, pagando apenas pelo que realmente precisa."
    },
    {
      icon: <Users size={28} />,
      title: "Especialistas à disposição",
      description: "Conte com profissionais experientes focados em gerenciar suas finanças com excelência."
    },
    {
      icon: <Clock size={28} />,
      title: "Otimização de tempo",
      description: "Libere sua equipe para focar nas atividades estratégicas do negócio, aumentando a produtividade."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Decisões estratégicas",
      description: "Acesse relatórios detalhados e atualizados para tomar decisões baseadas em dados confiáveis."
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Benefícios do BPO Financeiro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a terceirização da gestão financeira pode transformar sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
