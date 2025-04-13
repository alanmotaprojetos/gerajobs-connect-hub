import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Briefcase, 
  ShoppingBag, 
  Newspaper, 
  Building2, 
  UserPlus, 
  LogIn,
  Menu,
  X,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Cursos', path: '/courses', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Vagas', path: '/jobs', icon: <Briefcase className="h-5 w-5" /> },
    { name: 'Loja', path: '/store', icon: <ShoppingBag className="h-5 w-5" /> },
    { name: 'Notícias', path: '/news', icon: <Newspaper className="h-5 w-5" /> },
    { name: 'Empresas', path: '/companies', icon: <Building2 className="h-5 w-5" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="gj-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-md gj-gradient-bg flex items-center justify-center text-white font-bold text-xl">G</div>
            <span className="text-xl font-bold gj-gradient-text hidden sm:inline-block">GeraJobs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="flex items-center space-x-1 text-gj-purple-dark hover:text-gj-purple font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search button */}
          <div className="hidden md:flex items-center ml-4">
            <Button variant="outline" size="icon" className="mr-2">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="flex items-center">
                <UserPlus className="h-4 w-4 mr-2" />
                Cadastrar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-2 text-gj-purple-dark hover:bg-gj-gray-light rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-2 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full flex items-center justify-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
