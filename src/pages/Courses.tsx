
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/ui-custom/SearchFilters";
import CourseCard from "@/components/ui-custom/CourseCard";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";

// Dados de exemplo para cursos
const coursesData = [
  {
    id: "1",
    title: "Desenvolvimento Web com React & TypeScript",
    category: "Programação",
    hours: 40,
    students: 2500,
    rating: 4.8,
    instructor: "Ana Silva",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: true,
    price: 499.90,
    discountPrice: 349.90
  },
  {
    id: "2",
    title: "Marketing Digital: Do Básico ao Avançado",
    category: "Marketing",
    hours: 30,
    students: 1800,
    rating: 4.7,
    instructor: "Carlos Mendes",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: false,
    price: 349.90
  },
  {
    id: "3",
    title: "Gestão de Projetos com Metodologias Ágeis",
    category: "Gestão",
    hours: 25,
    students: 1200,
    rating: 4.9,
    instructor: "Juliana Costa",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: true,
    price: 399.90,
    discountPrice: 299.90
  },
  {
    id: "4",
    title: "Design UX/UI: Princípios e Práticas",
    category: "Design",
    hours: 35,
    students: 950,
    rating: 4.6,
    instructor: "Rafael Souza",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: true,
    price: 449.90
  },
  {
    id: "5",
    title: "Python para Ciência de Dados",
    category: "Programação",
    hours: 45,
    students: 3200,
    rating: 4.9,
    instructor: "Marcos Oliveira",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf433?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: false,
    price: 599.90,
    discountPrice: 499.90
  },
  {
    id: "6",
    title: "Inglês para Negócios",
    category: "Idiomas",
    hours: 50,
    students: 1500,
    rating: 4.7,
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1565022536102-f7f33c8c3a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: false,
    price: 299.90
  },
  {
    id: "7",
    title: "Contabilidade Financeira Básica",
    category: "Finanças",
    hours: 30,
    students: 850,
    rating: 4.5,
    instructor: "Roberto Almeida",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: false,
    price: 349.90
  },
  {
    id: "8",
    title: "Design Gráfico com Adobe Creative Suite",
    category: "Design",
    hours: 60,
    students: 1700,
    rating: 4.8,
    instructor: "Carla Mendonça",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    isFeatured: false,
    price: 649.90,
    discountPrice: 549.90
  }
];

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const totalPages = Math.ceil(coursesData.length / coursesPerPage);
  
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse);
  
  const handleSearch = (filters: any) => {
    console.log("Pesquisando com filtros:", filters);
    // Implementação real de busca seria feita aqui
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
            Cursos Profissionalizantes
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Expanda seus conhecimentos e habilidades com nossos cursos de qualidade
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="gj-container py-8">
        {/* Search */}
        <SearchFilters type="courses" onSearch={handleSearch} />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" /> Todos
          </Button>
          <Button variant="outline">Programação</Button>
          <Button variant="outline">Design</Button>
          <Button variant="outline">Marketing</Button>
          <Button variant="outline">Gestão</Button>
          <Button variant="outline">Idiomas</Button>
          <Button variant="outline">Finanças</Button>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
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

export default Courses;
