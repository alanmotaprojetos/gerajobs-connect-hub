
import Layout from "@/components/layout/Layout";
import StoreCard from "@/components/ui-custom/StoreCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";

const productsData = [
  {
    id: 1,
    title: "Garrafa Térmica Infantil com Tigre",
    description: "Garrafa térmica infantil com design de tigre, ideal para crianças manterem suas bebidas na temperatura ideal durante o dia todo.",
    price: 89.90,
    image: "/lovable-uploads/916c16ca-dde0-4607-96dd-d8dd929695d9.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Amazon" as const
  },
  {
    id: 2,
    title: "Mouse sem Fio Logitech M170",
    description: "Mouse sem fio Logitech com design ergonômico e conexão wireless confiável.",
    price: 69.90,
    image: "/lovable-uploads/45b9d1ee-4483-49a9-b587-d206edbf92ce.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Mercado Livre" as const
  },
  {
    id: 3,
    title: "Caneca Ayrton Senna F1",
    description: "Caneca temática com arte do lendário piloto Ayrton Senna, perfeita para fãs de Fórmula 1.",
    price: 49.90,
    image: "/lovable-uploads/6ec34983-d8de-4a2e-ba29-cbd11a33acbb.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Magalu" as const
  },
  {
    id: 4,
    title: "Monitor Gamer Samsung T350 24\"",
    description: "Monitor gamer Samsung com tela de 24 polegadas, ideal para jogos e trabalho.",
    price: 899.90,
    image: "/lovable-uploads/d74f516e-b3c1-43ac-ae78-9320c1077752.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Shopee" as const
  },
  {
    id: 5,
    title: "Garrafa Térmica em Inox 1.9L",
    description: "Garrafa térmica em aço inox com capacidade de 1.9 litros, perfeita para manter bebidas quentes ou frias.",
    price: 129.90,
    image: "/lovable-uploads/408b2c0d-c85a-41b4-b599-ce4ca5007684.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Mercado Livre" as const
  },
  {
    id: 6,
    title: "Caneca Ayrton Senna Nacional",
    description: "Caneca comemorativa Ayrton Senna com design clássico da equipe Nacional.",
    price: 59.90,
    image: "/lovable-uploads/8a52a963-727c-49da-9bae-7acadb9dac89.png",
    affiliateLink: "#", // Replace with actual affiliate link
    marketplace: "Amazon" as const
  },
];

const Store = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <Layout>
      {/* Banner */}
      <div className="bg-gradient-to-r from-gj-purple to-gj-blue py-12 md:py-20">
        <div className="gj-container text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Produtos Selecionados
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Os melhores produtos com links de afiliados das principais lojas
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="gj-container py-8">
        {/* View mode toggle */}
        <div className="flex justify-end mb-6 gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        {/* Products grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {productsData.map((product) => (
            <StoreCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Store;
