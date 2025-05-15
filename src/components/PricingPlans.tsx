
import { Check, X, CircleDollarSign } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PricingPlans = () => {
  const plans = [
    { id: 'A', volume: '01 a 50', price: 'R$ 375,50' },
    { id: 'B', volume: '51 a 100', price: 'R$ 751,00' },
    { id: 'C', volume: '101 a 200', price: 'R$ 1.502,00' },
    { id: 'D', volume: '201 a 350', price: 'R$ 2.253,00' },
    { id: 'E', volume: '351 a 500', price: 'R$ 3.004,00' },
    { id: 'F', volume: '+500', price: 'A combinar' }
  ];

  const services = [
    { name: 'Conciliação Bancária', plans: { A: true, B: true, C: true, D: true, E: true, F: true } },
    { name: 'Relatório de Conciliação', plans: { A: true, B: true, C: true, D: true, E: true, F: true } },
    { name: 'Contas a Pagar', plans: { A: false, B: true, C: true, D: true, E: true, F: true } },
    { name: 'Contas a Receber', plans: { A: false, B: false, C: true, D: true, E: true, F: true } },
    { name: 'Emissão de Nota Fiscal', plans: { A: false, B: false, C: true, D: true, E: true, F: true } },
    { name: 'Cobrança de Inadimplência', plans: { A: false, B: false, C: false, D: true, E: true, F: true } },
    { name: 'Relatório Personalizado', plans: { A: false, B: false, C: false, D: true, E: true, F: true } },
    { name: 'Consultoria de Gestão Interna', plans: { A: 'custom', B: 'custom', C: 'custom', D: 'custom', E: 'custom', F: 'custom' } }
  ];

  const renderServiceStatus = (status: boolean | string) => {
    if (status === 'custom') {
      return <CircleDollarSign className="w-5 h-5 mx-auto text-yellow-500" />;
    }
    return status ? 
      <Check className="w-5 h-5 mx-auto text-green-600" /> : 
      <X className="w-5 h-5 mx-auto text-red-500" />;
  };

  return (
    <section id="planos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Planos e Valores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal baseado no volume de transações financeiras da sua empresa
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in overflow-x-auto">
          <Table className="border rounded-lg shadow-md">
            <TableHeader className="bg-equilibra-green-dark text-white">
              <TableRow>
                <TableHead className="font-bold text-base text-white">Serviço</TableHead>
                {plans.map(plan => (
                  <TableHead key={plan.id} className="font-bold text-base text-white text-center">
                    Plano {plan.id}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  {plans.map(plan => (
                    <TableCell key={`${service.name}-${plan.id}`} className="text-center">
                      {renderServiceStatus(service.plans[plan.id as keyof typeof service.plans])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-equilibra-green-dark mb-4">Volume de movimentações por plano + valores</h3>
            <Table className="border rounded-lg shadow-md">
              <TableHeader className="bg-equilibra-green-dark text-white">
                <TableRow>
                  <TableHead className="font-bold text-base text-white">Plano</TableHead>
                  <TableHead className="font-bold text-base text-white">Volume (linhas bancárias por mês)</TableHead>
                  <TableHead className="font-bold text-base text-white">Valor estimado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plans.map((plan, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="font-bold text-equilibra-green-dark">{plan.id}</TableCell>
                    <TableCell>{plan.volume}</TableCell>
                    <TableCell className="font-semibold">{plan.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg border border-equilibra-green-light/30 text-sm text-gray-600">
            <p className="mb-2"><span className="font-semibold">Legenda:</span></p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Serviço incluído
              </div>
              <div className="flex items-center">
                <X className="w-4 h-4 text-red-500 mr-2" /> Serviço não incluído
              </div>
              <div className="flex items-center">
                <CircleDollarSign className="w-4 h-4 text-yellow-500 mr-2" /> Valor a combinar
              </div>
            </div>
            <p className="mt-4">Os valores são baseados em frações do salário mínimo de 2025: R$ 1.502,00. O plano ideal depende do volume de transações financeiras da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
