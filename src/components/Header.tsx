
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContactForm = () => {
    document.getElementById('cta-section')?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img alt="Equilibra Conta Logo" src="/lovable-uploads/270d010d-9153-44b0-b847-d3a06d4da24b.png" className="h-10 md:h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-700 hover:text-equilibra-green-dark transition-colors">Benefícios</a>
            <a href="#servicos" className="text-gray-700 hover:text-equilibra-green-dark transition-colors">Serviços</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-equilibra-green-dark transition-colors">Como Funciona</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-equilibra-green-dark transition-colors">Depoimentos</a>
            <Button className="bg-equilibra-green-light hover:bg-equilibra-green-dark text-white" onClick={scrollToContactForm}>
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden bg-white py-4 mt-2 rounded-lg shadow-lg flex flex-col space-y-4 absolute left-0 right-0 px-4">
            <a href="#beneficios" className="text-gray-700 hover:text-equilibra-green-dark transition-colors p-2" onClick={() => setIsMenuOpen(false)}>
              Benefícios
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-equilibra-green-dark transition-colors p-2" onClick={() => setIsMenuOpen(false)}>
              Serviços
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-equilibra-green-dark transition-colors p-2" onClick={() => setIsMenuOpen(false)}>
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-equilibra-green-dark transition-colors p-2" onClick={() => setIsMenuOpen(false)}>
              Depoimentos
            </a>
            <Button className="bg-equilibra-green-light hover:bg-equilibra-green-dark text-white w-full" onClick={scrollToContactForm}>
              Fale Conosco
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;
