
import { Clock, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  hours: number;
  students: number;
  rating: number;
  instructor: string;
  image: string;
  isFeatured?: boolean;
  price?: number;
  discountPrice?: number;
  isCompact?: boolean;
}

const CourseCard = ({ 
  id, 
  title, 
  category, 
  hours, 
  students, 
  rating, 
  instructor,
  image, 
  isFeatured = false, 
  price, 
  discountPrice,
  isCompact = false
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`}>
      <div className={`gj-card ${isCompact ? 'h-full' : ''} flex flex-col`}>
        {/* Course Image */}
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          {isFeatured && (
            <Badge className="absolute top-2 right-2 bg-gj-purple">
              Destaque
            </Badge>
          )}
        </div>
        
        {/* Course Info */}
        <div className="p-5 flex flex-col flex-grow">
          <Badge variant="outline" className="w-fit mb-2 text-xs text-gj-purple border-gj-purple">
            {category}
          </Badge>
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          
          {!isCompact && (
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span>Por: {instructor}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{hours} horas</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{students} alunos</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{rating}</span>
            </div>
          </div>
          
          {(price || discountPrice) && (
            <div className="mt-auto">
              <div className="flex items-center">
                {discountPrice ? (
                  <>
                    <span className="font-bold text-lg text-gj-purple">R$ {discountPrice.toFixed(2)}</span>
                    <span className="text-gray-500 line-through ml-2">R$ {price?.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="font-bold text-lg text-gj-purple">R$ {price?.toFixed(2)}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
