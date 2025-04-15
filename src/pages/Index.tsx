
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Briefcase, 
  ShoppingBag, 
  Newspaper, 
  Building2,
  ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "Cursos",
      description: "Expanda suas habilidades com cursos de qualidade ministrados por especialistas da indústria.",
      icon: <BookOpen className="h-10 w-10 text-gj-purple" />,
      link: "/courses"
    },
    {
      title: "Vagas de Emprego",
      description: "Encontre oportunidades de trabalho em empresas de renome nacional e internacional.",
      icon: <Briefcase className="h-10 w-10 text-gj-purple" />,
      link: "/jobs"
    },
    {
      title: "Store",
      description: "Acesse e-books, apostilas e materiais exclusivos para impulsionar sua carreira.",
      icon: <ShoppingBag className="h-10 w-10 text-gj-purple" />,
      link: "/store"
    },
    {
      title: "Notícias",
      description: "Fique por dentro das tendências do mercado e dicas para desenvolvimento profissional.",
      icon: <Newspaper className="h-10 w-10 text-gj-purple" />,
      link: "/news"
    },
    {
      title: "Para Empresas",
      description: "Encontre os melhores talentos e divulgue suas vagas para profissionais qualificados.",
      icon: <Building2 className="h-10 w-10 text-gj-purple" />,
      link: "/companies"
    }
  ];

  const stats = [
    { value: "10.000+", label: "Vagas Ativas" },
    { value: "500+", label: "Empresas Parceiras" },
    { value: "200+", label: "Cursos Disponíveis" },
    { value: "50.000+", label: "Profissionais Cadastrados" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="gj-section">
        <div className="gj-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Serviços para impulsionar sua <span className="text-gj-purple">carreira profissional</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="mt-2 text-gj-purple border-gj-purple">
                      Saiba mais <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <FeaturedCourses />

      {/* Featured Jobs Section */}
      <FeaturedJobs />

      {/* Stats Section */}
      <section className="gj-section bg-gj-purple-dark text-white">
        <div className="gj-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gj-purple">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gj-section bg-gradient-to-r from-gj-purple/20 to-gj-blue/20">
        <div className="gj-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para dar o próximo passo na sua carreira?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Cadastre-se agora para ter acesso a milhares de vagas e cursos exclusivos.
            Sua próxima oportunidade está esperando por você!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button size="lg">
                Cadastre-se Gratuitamente
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" size="lg">
                Explorar Vagas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
