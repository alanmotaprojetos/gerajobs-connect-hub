
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Users, Link, Briefcase, ArrowRight } from "lucide-react";

const companiesData = [
  {
    id: "1",
    name: "TechSolutions",
    description: "Empresa líder em desenvolvimento de software e soluções tecnológicas",
    location: "São Paulo, SP",
    size: "100-500 funcionários",
    industry: "Tecnologia",
    website: "https://techsolutions.example.com",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    openPositions: 3
  },
  {
    id: "2",
    name: "MarketPro",
    description: "Agência de marketing digital especializada em crescimento de negócios",
    location: "São Paulo, SP",
    size: "50-100 funcionários",
    industry: "Marketing",
    website: "https://marketpro.example.com",
    logo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    openPositions: 2
  },
  {
    id: "3",
    name: "DesignHub",
    description: "Estúdio de design criativo focado em experiências digitais inovadoras",
    location: "Rio de Janeiro, RJ",
    size: "20-50 funcionários",
    industry: "Design",
    website: "https://designhub.example.com",
    logo: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    openPositions: 1
  },
  {
    id: "4",
    name: "AppMakers",
    description: "Desenvolvemos aplicativos móveis de última geração",
    location: "Belo Horizonte, MG",
    size: "10-20 funcionários",
    industry: "Tecnologia",
    website: "https://appmakers.example.com",
    openPositions: 2
  },
  {
    id: "5",
    name: "SysTech",
    description: "Consultoria em TI e gestão de projetos tecnológicos",
    location: "São Paulo, SP",
    size: "200-500 funcionários",
    industry: "Tecnologia",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    website: "https://systech.example.com",
    openPositions: 5
  },
  {
    id: "6",
    name: "MRV Engenharia",
    description: "Maior construtora da América Latina, líder no mercado imobiliário",
    location: "Belo Horizonte, MG",
    size: "5000+ funcionários",
    industry: "Construção Civil",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MRV_Engenharia_logo.svg/320px-MRV_Engenharia_logo.svg.png",
    website: "https://www.mrv.com.br",
    openPositions: 8
  }
];

const Companies = () => {
  return (
    <Layout>
      {/* Banner */}
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-12 md:py-20">
        <div className="gj-container text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Conheça as empresas que estão contratando e faça parte do futuro
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="gj-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companiesData.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1">
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {company.location}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {company.size}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {company.industry}
                  </div>
                  <div className="flex items-center gap-1">
                    <Link className="w-4 h-4" />
                    <a href={company.website} target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">
                      Website
                    </a>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Ver {company.openPositions} vagas disponíveis
                  <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Companies;
