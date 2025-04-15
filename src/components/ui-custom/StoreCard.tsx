
import { ExternalLink, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface StoreCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  affiliateLink: string;
  marketplace: 'Amazon' | 'Mercado Livre' | 'Shopee' | 'Magalu';
}

const StoreCard = ({ title, description, price, image, affiliateLink, marketplace }: StoreCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gj-purple">
            R$ {price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">{marketplace}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full gap-2">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-4 w-4" />
            <span>Comprar</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
