
const Testimonials = () => {
  const testimonials = [
    {
      quote: "A Equilibra Conta transformou nossa gestão financeira. Agora temos visibilidade clara dos números e conseguimos tomar decisões muito mais seguras.",
      name: "Carlos Silva",
      position: "CEO, Empresa de Tecnologia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250&h=250"
    },
    {
      quote: "Reduzi meus custos com departamento financeiro em 40% e ainda ganhei mais qualidade nas informações. Foi a melhor decisão que tomei para a empresa.",
      name: "Ana Ferreira",
      position: "Diretora Comercial, Varejo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250"
    },
    {
      quote: "O nível de profissionalização que conseguimos com o BPO da Equilibra Conta nos ajudou a escalar os negócios com muito mais segurança.",
      name: "Marcelo Costa",
      position: "Fundador, Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250&h=250"
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
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
