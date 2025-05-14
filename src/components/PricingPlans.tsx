
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const pricingData = [
    {
      plan: "A",
      transactions: "01 a 05",
      services: "Conciliação bancária + relatório de conciliação",
      price: "R$ 375,50"
    },
    {
      plan: "B",
      transactions: "06 a 100",
      services: "Tudo do Plano A + Contas a pagar",
      price: "R$ 751,00"
    },
    {
      plan: "C",
      transactions: "101 a 200",
      services: "Tudo do anterior + Contas a receber + Emissão de nota fiscal",
      price: "R$ 1.502,00"
    },
    {
      plan: "D",
      transactions: "201 a 350",
      services: "Tudo anterior + Cobrança de inadimplência + Relatórios personalizados",
      price: "R$ 2.253,00"
    },
    {
      plan: "E",
      transactions: "351 a 500",
      services: "Tudo anterior, com volume maior de movimentações",
      price: "R$ 3.004,00"
    },
    {
      plan: "F",
      transactions: "+500",
      services: "Tudo incluso, com personalização e volume elevado",
      price: "A combinar"
    }
  ];

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
                <TableHead className="font-bold text-base text-white">Plano</TableHead>
                <TableHead className="font-bold text-base text-white">Movimentações mensais</TableHead>
                <TableHead className="font-bold text-base text-white">Serviços incluídos</TableHead>
                <TableHead className="font-bold text-base text-white">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((plan, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <TableCell className="font-bold text-equilibra-green-dark">{plan.plan}</TableCell>
                  <TableCell>{plan.transactions}</TableCell>
                  <TableCell>{plan.services}</TableCell>
                  <TableCell className="font-semibold">{plan.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-6 bg-white p-4 rounded-lg border border-equilibra-green-light/30 text-sm text-gray-600">
            <p>Os valores são baseados em frações do salário mínimo de 2025: R$ 1.502,00. O plano ideal depende do volume de transações financeiras da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
