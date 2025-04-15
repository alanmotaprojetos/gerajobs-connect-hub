
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import NewsCard from "@/components/news/NewsCard";
import NewsCategories from "@/components/news/NewsCategories";

const categories = [
  "Tecnologia",
  "IA",
  "Engenharia",
  "Saúde",
  "Medicina",
  "Construção Civil",
  "Transporte",
  "Psicologia",
  "Marketing",
  "Direito",
  "Investimentos"
];

const newsData = [
  {
    id: 1,
    title: "Nova IA da OpenAI revoluciona o mercado de trabalho",
    description: "GPT-5 promete transformar completamente a maneira como interagimos com a tecnologia e realizamos tarefas no ambiente profissional.",
    category: "IA",
    date: new Date("2025-04-10"),
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    id: 2,
    title: "Avanços em energia sustentável para construção civil",
    description: "Novos materiais e técnicas de construção prometem reduzir em até 60% o consumo de energia em edificações.",
    category: "Construção Civil",
    date: new Date("2025-04-12"),
    imageUrl: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77"
  },
  {
    id: 3,
    title: "Breakthrough em tratamento de Alzheimer",
    description: "Pesquisadores brasileiros desenvolvem novo medicamento que apresenta resultados promissores no tratamento de Alzheimer.",
    category: "Medicina",
    date: new Date("2025-04-13"),
    imageUrl: "https://images.unsplash.com/photo-1576671081837-49000212a370"
  },
  {
    id: 4,
    title: "Carros autônomos: nova legislação em discussão",
    description: "Congresso debate marco regulatório para veículos autônomos no Brasil. Especialistas apontam avanços significativos.",
    category: "Transporte",
    date: new Date("2025-04-14")
  },
  {
    id: 5,
    title: "Marketing digital: tendências para 2025",
    description: "Estudo revela as principais tendências em marketing digital para os próximos anos, com foco em personalização e IA.",
    category: "Marketing",
    date: new Date("2025-04-15"),
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
  },
  {
    id: 6,
    title: "Nova lei de proteção de dados para startups",
    description: "Entenda as mudanças na legislação de proteção de dados e seu impacto para empresas de tecnologia.",
    category: "Direito",
    date: new Date("2025-04-11")
  },
  {
    id: 7,
    title: "Impacto da ansiedade no ambiente corporativo",
    description: "Pesquisa revela aumento nos casos de ansiedade entre profissionais e sugere estratégias de prevenção.",
    category: "Psicologia",
    date: new Date("2025-04-09"),
    imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db"
  },
  {
    id: 8,
    title: "Investimentos em energia limpa batem recorde",
    description: "Setor de energia renovável atrai volume recorde de investimentos no primeiro trimestre de 2025.",
    category: "Investimentos",
    date: new Date("2025-04-08")
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredNews = selectedCategory === "Todas"
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <Layout>
      {/* Banner */}
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-12 md:py-20">
        <div className="gj-container text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Notícias e Tendências
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades do mercado de trabalho e tecnologia
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="gj-container py-6">
        <NewsCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* News Grid */}
      <div className="gj-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              title={news.title}
              description={news.description}
              category={news.category}
              date={news.date}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
