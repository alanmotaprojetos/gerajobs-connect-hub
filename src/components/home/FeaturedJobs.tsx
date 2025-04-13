
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import JobCard from "../ui-custom/JobCard";

// Dados de exemplo para vagas em destaque
const featuredJobs = [
  {
    id: "1",
    title: "Desenvolvedor Front-end React",
    company: "TechSolutions",
    location: "São Paulo, SP",
    type: "full-time" as const,
    salary: "8.000 - 12.000",
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
    isFeatured: false,
    skills: ["Swift", "Flutter", "Firebase"],
    deadline: "15/05/2025"
  }
];

const FeaturedJobs = () => {
  return (
    <section className="gj-section">
      <div className="gj-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Vagas em Destaque</h2>
            <p className="text-gj-gray max-w-2xl">
              Encontre as melhores oportunidades de emprego em empresas de renome
            </p>
          </div>
          <Link to="/jobs" className="mt-4 md:mt-0">
            <Button variant="outline">Ver todas as vagas</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
