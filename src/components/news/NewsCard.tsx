
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  date: Date;
  imageUrl?: string;
}

const NewsCard = ({ title, description, category, date, imageUrl }: NewsCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            {format(date, "d 'de' MMMM, yyyy", { locale: ptBR })}
          </div>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
