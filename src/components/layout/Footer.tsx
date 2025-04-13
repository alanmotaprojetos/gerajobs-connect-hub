import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gj-purple-dark text-white">
      <div className="gj-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 pb-8">
          {/* Logo and about */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-md gj-gradient-bg flex items-center justify-center text-white font-bold text-xl">G</div>
              <span className="text-xl font-bold text-white">GeraJobs</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Conectando talentos às melhores oportunidades de emprego e educação profissional.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="text-gray-300 hover:text-white">Cursos</Link></li>
              <li><Link to="/jobs" className="text-gray-300 hover:text-white">Vagas</Link></li>
              <li><Link to="/store" className="text-gray-300 hover:text-white">Loja</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">Notícias</Link></li>
              <li><Link to="/companies" className="text-gray-300 hover:text-white">Empresas</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Termos de Uso</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Política de Privacidade</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contato</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Assine nossa newsletter para receber atualizações sobre novas vagas e cursos.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-3 py-2 rounded-l-md text-black flex-1 text-sm"
              />
              <button className="bg-gj-purple hover:bg-gj-purple-dark px-3 py-2 rounded-r-md">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} GeraJobs.org - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
