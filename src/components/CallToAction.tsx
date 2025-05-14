
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitação recebida!",
        description: "Em breve, um de nossos especialistas entrará em contato.",
      });
      
      // Limpar formulário
      setEmail('');
      setName('');
      setPhone('');
      setCompany('');
    }, 1000);
  };

  return (
    <section id="cta-section" className="py-16 bg-gradient-to-br from-equilibra-green-dark to-equilibra-green-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para transformar a gestão financeira da sua empresa?
            </h2>
            <p className="text-xl opacity-90">
              Agende uma conversa gratuita com nossos especialistas e descubra como podemos ajudar.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-equilibra-green-dark text-xl font-semibold">
                  Preencha seus dados
                </h3>
                <p className="text-gray-600">
                  Entraremos em contato em até 24 horas úteis para agendar uma conversa.
                </p>
                
                <div className="bg-equilibra-green-light/10 rounded-lg p-4 border-l-4 border-equilibra-green-light">
                  <p className="text-equilibra-green-dark">
                    <strong>Benefício exclusivo:</strong> Ao agendar uma conversa, você receberá gratuitamente um diagnóstico financeiro inicial da sua empresa.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-equilibra-green-dark font-medium mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-equilibra-green-dark font-medium mb-1">
                    E-mail profissional
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@empresa.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-equilibra-green-dark font-medium mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-equilibra-green-dark font-medium mb-1">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-equilibra-green-light hover:bg-equilibra-green-dark text-white font-semibold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Agendar conversa gratuita'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
