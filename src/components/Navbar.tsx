
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="absolute h-4 w-4 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">Aire Libre</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            Acerca de
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
          <Button variant="default" asChild>
            <Link to="/explore">Explorar Datos</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4 pt-2 bg-background/95 backdrop-blur-sm border-b">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/dashboard" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button variant="default" className="w-full mt-2" asChild>
              <Link to="/explore" onClick={() => setIsMenuOpen(false)}>Explorar Datos</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
