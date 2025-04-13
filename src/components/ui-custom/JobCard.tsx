
import { MapPin, Building2, Clock3, BriefcaseBusiness } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship' | 'remote';
  salary?: string;
  logoUrl?: string;
  postedAt: string;
  isFeatured?: boolean;
  isNew?: boolean;
  skills?: string[];
  deadline?: string;
}

const JobCard = ({ 
  id, 
  title, 
  company, 
  location, 
  type, 
  salary, 
  logoUrl, 
  postedAt,
  isFeatured = false,
  isNew = false,
  skills = [], 
  deadline 
}: JobCardProps) => {
  const typeMap = {
    'full-time': { label: 'Tempo Integral', color: 'bg-green-100 text-green-800' },
    'part-time': { label: 'Meio Período', color: 'bg-blue-100 text-blue-800' },
    'freelance': { label: 'Freelancer', color: 'bg-purple-100 text-purple-800' },
    'internship': { label: 'Estágio', color: 'bg-yellow-100 text-yellow-800' },
    'remote': { label: 'Remoto', color: 'bg-gray-100 text-gray-800' }
  };

  return (
    <Link to={`/jobs/${id}`}>
      <div className="gj-card">
        <div className="p-5">
          <div className="flex items-start">
            {logoUrl ? (
              <div className="mr-4 flex-shrink-0">
                <img 
                  src={logoUrl} 
                  alt={`${company} logo`} 
                  className="w-12 h-12 object-contain rounded-md border"
                />
              </div>
            ) : (
              <div className="mr-4 w-12 h-12 bg-gj-gray-light rounded-md flex items-center justify-center flex-shrink-0">
                <Building2 className="h-6 w-6 text-gj-gray" />
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{title}</h3>
                {isFeatured && (
                  <Badge className="bg-gj-purple ml-2">Destaque</Badge>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Building2 className="h-4 w-4 mr-1" />
                <span>{company}</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <BriefcaseBusiness className="h-4 w-4 mr-1" />
                  <span className={`px-2 py-0.5 rounded-full text-xs ${typeMap[type].color}`}>
                    {typeMap[type].label}
                  </span>
                </div>
                
                {salary && (
                  <div className="flex items-center text-sm font-medium">
                    R$ {salary}
                  </div>
                )}
                
                {isNew && (
                  <Badge variant="outline" className="border-green-500 text-green-600 text-xs">
                    Nova
                  </Badge>
                )}
              </div>
              
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{skills.length - 3}
                    </Badge>
                  )}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <Clock3 className="h-3 w-3 mr-1" />
                  <span>Publicada {postedAt}</span>
                </div>
                
                {deadline && (
                  <div>
                    <span>Prazo: {deadline}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
