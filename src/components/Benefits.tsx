
import { DollarSign, Users, Clock, TrendingUp } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 rounded-xl shadow-md">
    <div className="w-20 h-20 flex items-center justify-center bg-equilibra-green-dark/10 rounded-full text-equilibra-green-dark flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-equilibra-green-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign size={36} />,
      title: "Redução de custos",
      description: "Economize em estrutura interna e folha de pagamento, pagando apenas pelo que realmente precisa."
    },
    {
      icon: <Users size={36} />,
      title: "Especialistas à disposição",
      description: "Conte com profissionais experientes focados em gerenciar suas finanças com excelência."
    },
    {
      icon: <Clock size={36} />,
      title: "Otimização de tempo",
      description: "Libere sua equipe para focar nas atividades estratégicas do negócio, aumentando a produtividade."
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Decisões estratégicas",
      description: "Acesse relatórios detalhados e atualizados para tomar decisões baseadas em dados confiáveis."
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-equilibra-green-dark/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Benefícios do BPO Financeiro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a terceirização da gestão financeira pode transformar sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
