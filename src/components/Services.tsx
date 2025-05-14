
import { FileText, FileMinus, FilePlus, Banknote, CalendarClock, TrendingUp, FileBarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => (
  <Card className="transition-all duration-300 hover:shadow-lg hover:border-equilibra-green-light">
    <CardHeader className="pb-2">
      <div className="text-equilibra-green-dark mb-2">
        {icon}
      </div>
      <CardTitle className="text-equilibra-green-dark">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <FilePlus size={24} />,
      title: "Contas a pagar",
      description: "Gerenciamento completo do processo de contas a pagar, garantindo pagamentos em dia e controle total."
    },
    {
      icon: <FileMinus size={24} />,
      title: "Contas a receber",
      description: "Controle de recebimentos, cobrança e acompanhamento de inadimplência para melhorar o fluxo de caixa."
    },
    {
      icon: <FileText size={24} />,
      title: "Emissão de boletos e NF",
      description: "Emissão de boletos e notas fiscais com agilidade e conformidade com a legislação."
    },
    {
      icon: <Banknote size={24} />,
      title: "Conciliação bancária",
      description: "Análise e conferência de todas as movimentações financeiras para garantir a integridade dos registros."
    },
    {
      icon: <CalendarClock size={24} />,
      title: "Agendamento de pagamentos",
      description: "Organização e planejamento de pagamentos para otimizar recursos e evitar atrasos."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Fluxo de caixa e DRE",
      description: "Elaboração de demonstrativos financeiros para monitoramento contínuo da saúde do negócio."
    },
    {
      icon: <FileBarChart size={24} />,
      title: "Relatórios financeiros",
      description: "Relatórios personalizados com indicadores relevantes para tomada de decisão estratégica."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos com um conjunto completo de soluções para a gestão financeira da sua empresa
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
