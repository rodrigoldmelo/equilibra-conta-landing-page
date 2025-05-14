
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-equilibra-green-dark mb-4 leading-tight">
              Simplifique seu controle financeiro
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Foque no crescimento da sua empresa enquanto cuidamos das finanças
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              Terceirize sua gestão financeira para ganhar eficiência, 
              reduzir custos e tomar decisões mais estratégicas com a Equilibra Conta.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="bg-equilibra-green-light hover:bg-equilibra-green-dark text-white font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agende uma conversa gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-equilibra-green-dark text-equilibra-green-dark hover:bg-equilibra-green-dark hover:text-white font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conheça nossos serviços
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-equilibra-green-light/10 rounded-full absolute inset-0 transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Gestão financeira profissional" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 bg-equilibra-green-light rounded-lg p-4 shadow-lg z-20">
                <p className="text-white font-semibold">
                  Mais eficiência e controle financeiro para o seu negócio — sem complicação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-5 left-0 right-0 h-24 bg-white transform -skew-y-3 z-10"></div>
    </section>
  );
};

export default Hero;
