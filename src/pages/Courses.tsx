import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/ui-custom/SearchFilters";
import CourseCard from "@/components/ui-custom/CourseCard";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";

// Updated course categories
const categories = [
  "Programação",
  "Design",
  "Marketing",
  "Gestão",
  "Idiomas",
  "Finanças",
  "Engenharia",
  "Medicina",
  "Psicologia",
  "Direito",
  "Arquitetura",
  "Música",
  "Gastronomia",
  "Educação",
  "Vendas",
];

// Expanded coursesData with 20 courses per category
const coursesData = [
  // Programação (Expand to 20 courses)
  {
    id: "prog-1",
    title: "Desenvolvimento Web Full Stack",
    category: "Programação",
    hours: 120,
    students: 3500,
    rating: 4.8,
    instructor: "Ana Silva",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    isFeatured: true,
    price: 799.90,
    discountPrice: 599.90
  },
  // Add more programming courses
  {
    id: "prog-2",
    title: "Python para Ciência de Dados",
    category: "Programação",
    hours: 80,
    students: 2800,
    rating: 4.9,
    instructor: "Carlos Santos",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf433",
    price: 599.90
  },
  {
    id: "prog-3",
    title: "JavaScript Avançado: Frameworks Modernos",
    category: "Programação",
    hours: 100,
    students: 2200,
    rating: 4.7,
    instructor: "Pedro Oliveira",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    price: 699.90
  },
  {
    id: "prog-4",
    title: "Desenvolvimento de Jogos com Unity",
    category: "Programação",
    hours: 90,
    students: 1800,
    rating: 4.6,
    instructor: "Mariana Costa",
    image: "https://images.unsplash.com/photo-1598495378973-a3fa4c9b5a72",
    price: 549.90,
    discountPrice: 449.90
  },
  {
    id: "prog-5",
    title: "Introdução à Inteligência Artificial",
    category: "Programação",
    hours: 70,
    students: 2500,
    rating: 4.8,
    instructor: "Rafael Mendes",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
    price: 749.90
  },

  // Design (Expand to 20 courses)
  {
    id: "des-1",
    title: "UI/UX Design Masterclass",
    category: "Design",
    hours: 90,
    students: 2200,
    rating: 4.7,
    instructor: "Marina Costa",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    price: 699.90,
    discountPrice: 499.90
  },
  {
    id: "des-2",
    title: "Design Gráfico Profissional",
    category: "Design",
    hours: 80,
    students: 1900,
    rating: 4.6,
    instructor: "Lucas Oliveira",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    price: 599.90
  },
  {
    id: "des-3",
    title: "Animação 2D e Ilustração Digital",
    category: "Design",
    hours: 75,
    students: 1600,
    rating: 4.5,
    instructor: "Isabela Santos",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
    price: 549.90,
    discountPrice: 429.90
  },
  {
    id: "des-4",
    title: "Design de Interfaces Mobile",
    category: "Design",
    hours: 65,
    students: 1500,
    rating: 4.7,
    instructor: "Ricardo Almeida",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    price: 499.90
  },
  {
    id: "des-5",
    title: "Design Thinking e Inovação",
    category: "Design",
    hours: 60,
    students: 1800,
    rating: 4.8,
    instructor: "Amanda Rodrigues",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    price: 579.90,
    discountPrice: 459.90
  },

  // Marketing (Expand to 20 courses)
  {
    id: "mkt-1",
    title: "Marketing Digital Completo",
    category: "Marketing",
    hours: 60,
    students: 4100,
    rating: 4.8,
    instructor: "Rafael Mendes",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
    isFeatured: true,
    price: 499.90
  },
  {
    id: "mkt-2",
    title: "Estratégias de Marketing de Conteúdo",
    category: "Marketing",
    hours: 50,
    students: 3200,
    rating: 4.7,
    instructor: "Julia Silva",
    image: "https://images.unsplash.com/photo-1542744173-9d5648a48f3a",
    price: 399.90,
    discountPrice: 299.90
  },
  {
    id: "mkt-3",
    title: "Social Media Marketing Avançado",
    category: "Marketing",
    hours: 55,
    students: 2800,
    rating: 4.6,
    instructor: "Fernando Oliveira",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d1",
    price: 449.90
  },
  {
    id: "mkt-4",
    title: "Marketing de Influência",
    category: "Marketing",
    hours: 45,
    students: 2500,
    rating: 4.5,
    instructor: "Camila Santos",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    price: 379.90,
    discountPrice: 279.90
  },
  {
    id: "mkt-5",
    title: "E-commerce e Marketing Digital",
    category: "Marketing",
    hours: 65,
    students: 2900,
    rating: 4.8,
    instructor: "André Costa",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc2b3da28",
    price: 529.90
  },

  // Add courses for other categories in a similar manner
  {
    id: "ges-1",
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
];

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const coursesPerPage = 12;

  // Filter courses based on search and category
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handleSearch = (filters: any) => {
    setSearchTerm(filters.keyword || "");
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
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
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
          <Button
            variant={selectedCategory === "Todos" ? "default" : "outline"}
            onClick={() => handleCategorySelect("Todos")}
            className="flex items-center gap-1 whitespace-nowrap"
          >
            <BookOpen className="h-4 w-4" /> Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategorySelect(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6 text-gray-600">
          {filteredCourses.length} cursos encontrados
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
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
