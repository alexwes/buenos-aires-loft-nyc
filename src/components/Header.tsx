import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Interiors", path: "/interiors" },
    { name: "Artworks", path: "/artworks" },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-background border-b border-border relative z-20">
      {/* Logo and Menu Button */}
      <div className="py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex-1 flex justify-center">
            <img 
              src="/lovable-uploads/3f2a3d94-aac1-45d5-8222-33fe85f17012.png" 
              alt="Estefania Bustamante - Art and Design Consulting LLC" 
              className="h-16 object-contain"
            />
          </Link>
          
          {/* Menu Toggle Button */}
          <button
            onClick={toggleNav}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle navigation"
          >
            {isNavOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Navigation */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
        isNavOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="py-4 px-6">
          <div className="max-w-7xl mx-auto">
            <ul className="flex justify-center space-x-12">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsNavOpen(false)}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                      location.pathname === item.path
                        ? "text-primary border-b-2 border-primary pb-1"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;