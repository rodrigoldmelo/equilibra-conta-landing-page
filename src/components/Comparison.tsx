
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const Comparison = () => {
  const comparisonData = [
    {
      aspect: "13º salário e férias",
      internal: true,
      bpo: false
    },
    {
      aspect: "Encargos e impostos (INSS, FGTS, etc.)",
      internal: true,
      bpo: false
    },
    {
      aspect: "Custos com estrutura e TI",
      internal: true,
      bpo: false
    },
    {
      aspect: "Treinamento e gestão de equipe",
      internal: true,
      bpo: false
    },
    {
      aspect: "Processos otimizados e padronizados",
      internal: "Depende",
      bpo: true
    },
    {
      aspect: "Equipe especializada pronta",
      internal: "Requer contratação",
      bpo: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">Compare e Economize</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a diferença entre manter uma equipe financeira interna e terceirizar com a Equilibra Conta
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in overflow-x-auto">
          <Table className="border rounded-lg shadow-md">
            <TableHeader className="bg-equilibra-green-dark text-white">
              <TableRow>
                <TableHead className="font-bold text-base text-white">Custo / Gestão</TableHead>
                <TableHead className="font-bold text-base text-white text-center">Equipe Interna</TableHead>
                <TableHead className="font-bold text-base text-white text-center">Equilibra Conta (BPO)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <TableCell className="font-medium">{item.aspect}</TableCell>
                  <TableCell className="text-center">
                    {typeof item.internal === 'boolean' ? (
                      item.internal ? (
                        <Check className="mx-auto text-red-500" />
                      ) : (
                        <X className="mx-auto text-green-500" />
                      )
                    ) : (
                      <span className="text-gray-700">{item.internal}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.bpo === 'boolean' ? (
                      item.bpo ? (
                        <Check className="mx-auto text-green-500" />
                      ) : (
                        <X className="mx-auto text-red-500" />
                      )
                    ) : (
                      <span className="text-gray-700">{item.bpo}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
