
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gj-purple/30 to-gj-blue/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gj-purple-dark/80 to-gj-purple-dark/70"></div>
      </div>
      <div className="relative gj-container flex flex-col items-center py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Encontre seu <span className="text-gj-purple">futuro profissional</span> aqui
        </h1>
        <p className="text-lg md:text-xl text-white/80 text-center max-w-3xl mb-8">
          Conectando talentos às melhores oportunidades de emprego e educação profissional
        </p>
        
        <div className="w-full max-w-2xl bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="flex-1 flex items-center px-3 mb-2 md:mb-0">
            <Search className="h-5 w-5 text-gj-gray mr-2" />
            <Input 
              type="text"
              placeholder="Busque por vagas, cursos ou empresas..." 
              className="border-none shadow-none focus-visible:ring-0 text-sm md:text-base flex-1"
            />
          </div>
          <Button size="lg" className="w-full md:w-auto">
            Buscar
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="secondary" className="bg-white/90 hover:bg-white text-gj-purple-dark">
            Vagas Populares
          </Button>
          <Button variant="secondary" className="bg-white/90 hover:bg-white text-gj-purple-dark">
            Cursos em Destaque
          </Button>
          <Button variant="secondary" className="bg-white/90 hover:bg-white text-gj-purple-dark">
            Para Empresas
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8 text-white/70 text-sm">
          <span>+ 10.000 vagas disponíveis</span>
          <span>+ 500 empresas parceiras</span>
          <span>+ 200 cursos profissionalizantes</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
