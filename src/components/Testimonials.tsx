
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  // Testimonial data - Edit these values directly to update the testimonials
  // You can replace the image URLs with your own uploaded images or use Unsplash links
  const testimonials = [
    {
      quote: "A Equilibra Conta facilitou minha vida. Hoje eu consigo focar em outras coisas.",
      name: "Inglyd Reis",
      position: "IR Consultoria",
      image: "https://share.icloud.com/photos/0edpREFvoGChh0SD00rA1CgWA"
    },
    {
      quote: "Reduzi meus custos com departamento financeiro em 40% e ainda ganhei mais qualidade nas informações. Foi a melhor decisão que tomei para a empresa.",
      name: "Rodrigo Lemos",
      position: "Meu Analista de Mídias",
      image: "https://share.icloud.com/photos/0ebvHt6FIY84Q_QaCJZA-vPeQ"
    },
    {
      quote: "O nível de profissionalização que conseguimos com o BPO da Equilibra Conta nos ajudou a escalar os negócios com muito mais segurança.",
      name: "Bruno Vieira",
      position: "Vieira&Cavalcanti Advogados",
      image: "https://share.icloud.com/photos/0aar8Ne66hP-2SAnHKGxv2x4w"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-equilibra-green-dark mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que confiam na Equilibra Conta para sua gestão financeira
          </p>
          <div className="mt-2 text-sm text-gray-400 italic">
            <p>Para alterar as fotos, nomes e textos dos depoimentos:</p>
            <ol className="list-decimal list-inside mx-auto max-w-md text-left mt-2">
              <li>Ative o Dev Mode no canto superior esquerdo</li>
              <li>Encontre o arquivo src/components/Testimonials.tsx</li>
              <li>Edite o array "testimonials" com seus novos dados</li>
              <li>Salve as alterações</li>
            </ol>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-equilibra-green-dark">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="italic text-gray-700 border-l-4 border-equilibra-green-light pl-4">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Cliente 1</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Cliente 2</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Cliente 3</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Cliente 4</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Cliente 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
