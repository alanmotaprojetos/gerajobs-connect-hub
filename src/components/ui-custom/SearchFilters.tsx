
import { useState } from "react";
import { 
  Search, 
  MapPin, 
  BriefcaseBusiness, 
  Filter, 
  X,
  ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface SearchFiltersProps {
  type: 'courses' | 'jobs';
  onSearch?: (filters: any) => void;
}

const SearchFilters = ({ type, onSearch }: SearchFiltersProps) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Dados de exemplo
  const locations = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Remoto"];
  const jobTypes = ["Tempo Integral", "Meio Período", "Freelancer", "Estágio", "Remoto"];
  const courseCategories = ["Programação", "Design", "Marketing", "Gestão", "Idiomas", "Finanças"];
  const jobCategories = ["Tecnologia", "Marketing", "Design", "Administrativo", "Vendas", "Saúde"];
  
  const categories = type === 'courses' ? courseCategories : jobCategories;

  const handleAddFilter = (filterType: string, value: string) => {
    if (value && !activeFilters.includes(`${filterType}: ${value}`)) {
      setActiveFilters([...activeFilters, `${filterType}: ${value}`]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const handleClearFilters = () => {
    setKeyword("");
    setLocation("");
    setJobType("");
    setCategory("");
    setActiveFilters([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparando os filtros
    const filters = {
      keyword,
      location,
      jobType: type === 'jobs' ? jobType : undefined,
      category,
    };
    
    // Adicionar filtros ativos
    if (location) handleAddFilter("Localização", location);
    if (jobType && type === 'jobs') handleAddFilter("Tipo", jobType);
    if (category) handleAddFilter("Categoria", category);
    
    // Chamar o callback de pesquisa se fornecido
    if (onSearch) {
      onSearch(filters);
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Campo de busca por palavra-chave */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder={`Buscar ${type === 'courses' ? 'cursos' : 'vagas'}...`}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Campos adicionais para desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Localização" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {type === 'jobs' && (
              <div className="flex-1 relative">
                <BriefcaseBusiness className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Tipo de Vaga" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex-1 relative">
              <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Botão de filtros para mobile */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2 w-full">
                  <Filter size={16} />
                  <span>Filtros</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="py-4 flex flex-col gap-4">
                  <div className="space-y-2">
                    <label htmlFor="mobile-location" className="text-sm font-medium">
                      Localização
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger id="mobile-location">
                        <SelectValue placeholder="Selecione uma localização" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>
                            {loc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {type === 'jobs' && (
                    <div className="space-y-2">
                      <label htmlFor="mobile-jobType" className="text-sm font-medium">
                        Tipo de Vaga
                      </label>
                      <Select value={jobType} onValueChange={setJobType}>
                        <SelectTrigger id="mobile-jobType">
                          <SelectValue placeholder="Selecione um tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="mobile-category" className="text-sm font-medium">
                      Categoria
                    </label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="mobile-category">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleSubmit} className="mt-4">
                    Aplicar Filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Botão de busca */}
          <Button type="submit" className="hidden lg:block">
            Buscar
          </Button>
        </div>

        {/* Filtros ativos */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-sm text-gray-500">Filtros ativos:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                {filter}
                <X 
                  size={14} 
                  className="cursor-pointer" 
                  onClick={() => handleRemoveFilter(filter)} 
                />
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClearFilters}
              className="text-xs text-gj-purple hover:text-gj-purple-dark"
            >
              Limpar todos
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilters;
