
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseCard from "../ui-custom/CourseCard";

// Dados de exemplo para cursos em destaque
const featuredCourses = [
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
    isFeatured: true,
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
  }
];

const FeaturedCourses = () => {
  return (
    <section className="gj-section bg-gj-gray-light">
      <div className="gj-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Cursos em Destaque</h2>
            <p className="text-gj-gray max-w-2xl">
              Amplie suas habilidades profissionais com nossos cursos mais populares
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="outline">Ver todos os cursos</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
