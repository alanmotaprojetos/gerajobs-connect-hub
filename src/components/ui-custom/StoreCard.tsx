
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
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-6">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6 pt-0">
        <h3 className="font-semibold text-xl mb-3 line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gj-purple">
            R$ {price.toFixed(2)}
          </span>
          <span className="text-sm font-medium px-3 py-1 bg-gj-gray-light rounded-full text-gj-purple">
            {marketplace}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full gap-2 text-base py-6" size="lg">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="h-5 w-5" />
            <span>Comprar</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
