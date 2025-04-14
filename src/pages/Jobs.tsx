
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/ui-custom/SearchFilters";
import JobCard from "@/components/ui-custom/JobCard";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Code, 
  PenTool, 
  TrendingUp, 
  Building, 
  Headphones, 
  Heart,
  ArrowRight, 
  ArrowLeft 
} from "lucide-react";

const jobsData = [
  {
    id: "1",
    title: "Desenvolvedor Front-end React",
    company: "TechSolutions",
    location: "São Paulo, SP",
    type: "full-time" as const,
    salary: "5.000 - 6.000",
    logoUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    postedAt: "2 dias atrás",
    isFeatured: true,
    isNew: true,
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Analista de Marketing Digital",
    company: "MarketPro",
    location: "Remoto",
    type: "remote" as const,
    salary: "6.500 - 8.500",
    logoUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    postedAt: "1 semana atrás",
    isFeatured: true,
    skills: ["SEO", "Google Analytics", "Social Media"]
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Rio de Janeiro, RJ",
    type: "full-time" as const,
    salary: "7.000 - 10.000",
    logoUrl: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    postedAt: "3 dias atrás",
    isFeatured: true,
    isNew: true,
    skills: ["Figma", "Adobe XD", "Prototyping"]
  },
  {
    id: "4",
    title: "Estágio em Desenvolvimento Mobile",
    company: "AppMakers",
    location: "Belo Horizonte, MG",
    type: "internship" as const,
    salary: "1.800 - 2.200",
    postedAt: "5 dias atrás",
    skills: ["Swift", "Flutter", "Firebase"],
    deadline: "15/05/2025"
  },
  {
    id: "5",
    title: "Gerente de Projetos de TI",
    company: "SysTech",
    location: "São Paulo, SP",
    type: "full-time" as const,
    salary: "12.000 - 15.000",
    logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    postedAt: "1 dia atrás",
    isNew: true,
    skills: ["Scrum", "PMBOK", "Jira"]
  },
  {
    id: "6",
    title: "Especialista em Suporte Técnico",
    company: "TechCare",
    location: "Porto Alegre, RS",
    type: "full-time" as const,
    salary: "4.500 - 6.000",
    postedAt: "2 semanas atrás",
    skills: ["Windows", "Linux", "Redes"]
  },
  {
    id: "7",
    title: "Redator de Conteúdo",
    company: "ContentWave",
    location: "Remoto",
    type: "part-time" as const,
    salary: "3.000 - 4.000",
    postedAt: "4 dias atrás",
    isNew: true,
    skills: ["SEO", "Copywriting", "WordPress"]
  },
  {
    id: "8",
    title: "Analista de Dados",
    company: "DataInsights",
    location: "Curitiba, PR",
    type: "full-time" as const,
    salary: "8.000 - 10.000",
    logoUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    postedAt: "1 semana atrás",
    skills: ["SQL", "Python", "Power BI"]
  },
  {
    id: "9",
    title: "Engenheiro Civil",
    company: "MRV Engenharia",
    location: "Belo Horizonte, MG",
    type: "full-time" as const,
    salary: "9.000 - 12.000",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MRV_Engenharia_logo.svg/320px-MRV_Engenharia_logo.svg.png",
    postedAt: "2 dias atrás",
    isNew: true,
    isFeatured: true,
    skills: ["Gerenciamento de Obras", "AutoCAD", "MS Project", "Orçamento de Obras"]
    //link: "https://vagas-mrveco.gupy.io/job/eyJqb2JJZCI6ODcwNTkxOSwic291cmNlIjoiZ3VweV9wb3J0YWwifQ==?jobBoardSource=gupy_portal"
  }
];

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobsData.length / jobsPerPage);
  
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
  
  const handleSearch = (filters: any) => {
    console.log("Pesquisando com filtros:", filters);
    
  };
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Banner */}
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-12 md:py-20">
        <div className="gj-container text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Vagas de Emprego
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Encontre as melhores oportunidades de emprego em empresas de renome
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="gj-container py-8">
        {/* Search */}
        <SearchFilters type="jobs" onSearch={handleSearch} />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" /> Todas
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Code className="h-4 w-4" /> Tecnologia
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <PenTool className="h-4 w-4" /> Design
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" /> Marketing
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Building className="h-4 w-4" /> Administrativo
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Headphones className="h-4 w-4" /> Atendimento
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Heart className="h-4 w-4" /> Saúde
          </Button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-8">
          {currentJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Jobs;
